import { jsPDF } from 'jspdf';
import { TodoTask } from '../types';

export interface GeneratePdfOptions {
  title?: string;
  date?: string;
  tasks: TodoTask[];
}

/**
 * Creates and formats a neo-brutalist A4 printable To-Do List PDF.
 */
export function generateTodoPdf({
  title = 'MY TO-DO LIST',
  date = '',
  tasks = [],
}: GeneratePdfOptions): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~297mm

  const margin = 12;
  const contentWidth = pageWidth - margin * 2; // 186mm
  const bottomLimit = pageHeight - 22;

  const displayTitle = (title || 'MY TO-DO LIST').trim().toUpperCase();
  const displayDate = date.trim().toUpperCase();

  const hasAnyTime = tasks.some((t) => Boolean(t.time && t.time.trim()));

  function drawPageFrameAndHeader(isContinuation = false): number {
    // 1. Outer neo-brutalist border
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(1.0);
    doc.rect(margin, margin, contentWidth, pageHeight - margin * 2);

    // 2. Yellow header banner
    const bannerHeight = 24;
    doc.setFillColor(255, 222, 0); // #FFDE00
    doc.rect(margin, margin, contentWidth, bannerHeight, 'FD');

    // 3. Header title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(isContinuation ? 16 : 20);
    doc.setTextColor(0, 0, 0);
    const titleText = isContinuation ? `${displayTitle} (CONTINUED)` : displayTitle;
    doc.text(titleText, margin + 6, margin + 15);

    // 4. Header date badge (if present)
    if (displayDate) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      const dateTextWidth = doc.getTextWidth(displayDate);
      const badgeWidth = dateTextWidth + 8;
      const badgeX = pageWidth - margin - badgeWidth - 6;
      const badgeY = margin + 5.5;

      // White pill with black border
      doc.setFillColor(255, 255, 255);
      doc.setLineWidth(0.6);
      doc.roundedRect(badgeX, badgeY, badgeWidth, 13, 1.5, 1.5, 'FD');

      doc.setTextColor(0, 0, 0);
      doc.text(displayDate, badgeX + 4, badgeY + 8.5);
    }

    // 5. Solid dividing line under header
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(1.2);
    doc.line(margin, margin + bannerHeight, pageWidth - margin, margin + bannerHeight);

    return margin + bannerHeight + 9; // Starting Y coordinate for tasks
  }

  let currentY = drawPageFrameAndHeader(false);

  // If no tasks provided, draw a few empty ruled lines for hand-writing
  const tasksToRender =
    tasks.length > 0
      ? tasks
      : Array.from({ length: 8 }, (_, i) => ({
          id: `empty-${i}`,
          text: '',
          time: '',
          completed: false,
        }));

  for (let i = 0; i < tasksToRender.length; i++) {
    const task = tasksToRender[i];

    // Determine layout columns
    const boxSize = 5.2;
    const boxX = margin + 6;

    const timeX = margin + 16;
    const timeWidth = 26;

    const textX = hasAnyTime ? timeX + timeWidth + 2 : margin + 16;
    const textWidth = hasAnyTime ? contentWidth - 50 : contentWidth - 22;

    const displayText = task.text.trim();
    const lines = displayText
      ? doc.splitTextToSize(displayText, textWidth)
      : [''];

    const rowHeight = Math.max(lines.length * 5.8, 8.5) + 4.5;

    // Check if new page is needed
    if (currentY + rowHeight > bottomLimit) {
      doc.addPage();
      currentY = drawPageFrameAndHeader(true);
    }

    const boxY = currentY + 0.5;

    // Draw Checkbox
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.7);

    if (task.completed) {
      doc.setFillColor(255, 222, 0);
      doc.rect(boxX, boxY, boxSize, boxSize, 'FD');

      // Draw bold checkmark inside box
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.8);
      doc.line(boxX + 1.0, boxY + 2.7, boxX + 2.2, boxY + 4.4);
      doc.line(boxX + 2.2, boxY + 4.4, boxX + 4.5, boxY + 1.2);
    } else {
      doc.setFillColor(255, 255, 255);
      doc.rect(boxX, boxY, boxSize, boxSize, 'FD');
    }

    // Draw Time (if time column active)
    if (hasAnyTime && task.time) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(0, 0, 0);
      doc.text(task.time, timeX, currentY + 4.6);
    }

    // Draw Task Text
    if (displayText) {
      doc.setFont('helvetica', task.completed ? 'normal' : 'bold');
      doc.setFontSize(10.5);

      if (task.completed) {
        doc.setTextColor(115, 115, 115);
      } else {
        doc.setTextColor(0, 0, 0);
      }

      doc.text(lines, textX, currentY + 4.6);

      // Strike-through line if completed
      if (task.completed) {
        doc.setDrawColor(120, 120, 120);
        doc.setLineWidth(0.4);
        for (let l = 0; l < lines.length; l++) {
          const lineW = doc.getTextWidth(lines[l]);
          const strikeY = currentY + 4.0 + l * 5.8;
          doc.line(textX, strikeY, textX + lineW, strikeY);
        }
      }
    }

    // Row divider line
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.25);
    doc.line(margin + 4, currentY + rowHeight - 1, pageWidth - margin - 4, currentY + rowHeight - 1);

    currentY += rowHeight;
  }

  // Add Page Footers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);

    // Subtle divider above footer
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.4);
    doc.line(margin, pageHeight - margin - 7, pageWidth - margin, pageHeight - margin - 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 90);
    doc.text('TABLABLE — Free Printable Checklist (tablable.vercel.app)', margin + 4, pageHeight - margin - 2);

    const pageStr = `Page ${p} of ${totalPages}`;
    const pageW = doc.getTextWidth(pageStr);
    doc.text(pageStr, pageWidth - margin - pageW - 4, pageHeight - margin - 2);
  }

  return doc;
}

/**
 * Generates and triggers browser download of the PDF file.
 */
export function downloadTodoPdf(options: GeneratePdfOptions, filename = 'todo-list.pdf'): void {
  const doc = generateTodoPdf(options);
  doc.save(filename);
}

/**
 * Triggers native browser print dialog for the generated PDF.
 */
export function printTodoPdf(options: GeneratePdfOptions): void {
  const doc = generateTodoPdf(options);
  const blobUrl = doc.output('bloburl');

  // Attempt to open in a hidden iframe to print directly
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.src = blobUrl.toString();

  document.body.appendChild(iframe);

  iframe.onload = () => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch {
      // Fallback: open in new tab
      window.open(blobUrl.toString(), '_blank');
    }
  };
}
