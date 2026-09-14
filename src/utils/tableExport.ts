import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CellFormat, TableItem, MergeCell } from '../types';
import { getTableMergeInfo, getMergeMatrix } from './mergeUtils';

/**
 * Utility functions to export and download table data as HTML, Markdown, CSV, and Plain Text.
 */

function escapeHtml(text: string): string {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatCellHtml(text: string, format?: CellFormat): string {
  let escaped = escapeHtml(text || '');
  if (!escaped) return '';
  escaped = escaped.replace(/\r?\n/g, '<br/>');
  if (format?.italic) {
    escaped = `<em>${escaped}</em>`;
  }
  if (format?.bold) {
    escaped = `<strong>${escaped}</strong>`;
  }
  return escaped;
}

function formatCellMarkdown(text: string, format?: CellFormat): string {
  if (!text) return '';
  let formatted = text.replace(/\r?\n/g, '<br>');
  formatted = formatted.replace(/\|/g, '\\|');
  if (format?.bold && format?.italic) {
    formatted = `***${formatted}***`;
  } else if (format?.bold) {
    formatted = `**${formatted}**`;
  } else if (format?.italic) {
    formatted = `*${formatted}*`;
  }
  return formatted;
}

export function tableToHtml(
  headers: string[],
  rows: string[][],
  cellColors?: string[][],
  headerColors?: string[],
  cellFormats?: CellFormat[][],
  headerFormats?: CellFormat[],
  signatureOptions?: { enabled?: boolean; name?: string },
  columnAlignments?: ('left' | 'center' | 'right')[],
  merges?: MergeCell[]
): string {
  const { headerMergeInfo, bodyMergeMatrix } = getTableMergeInfo(rows.length, headers.length, merges || []);

  const thCells: string[] = [];
  for (let i = 0; i < headers.length; i++) {
    const info = headerMergeInfo[i];
    if (info && info.isCovered) {
      continue;
    }
    const color = headerColors?.[i];
    const align = columnAlignments?.[i] || 'left';
    const styles: string[] = [];
    if (color) styles.push(`background-color: ${color}`);
    if (align !== 'left') styles.push(`text-align: ${align}`);
    const styleAttr = styles.length > 0 ? ` style="${styles.join('; ')}"` : '';

    const spanAttrs: string[] = [];
    if (info && info.isMaster) {
      if (info.rowspan > 1) spanAttrs.push(` rowspan="${info.rowspan}"`);
      if (info.colspan > 1) spanAttrs.push(` colspan="${info.colspan}"`);
    }
    const spanAttrStr = spanAttrs.join('');

    const content = formatCellHtml(headers[i], headerFormats?.[i]);
    thCells.push(`      <th${spanAttrStr}${styleAttr}>${content}</th>`);
  }

  const thead = `  <thead>\n    <tr>\n${thCells.join('\n')}\n    </tr>\n  </thead>`;

  const tbodyLines: string[] = [];
  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    const tdCells: string[] = [];
    for (let colIdx = 0; colIdx < headers.length; colIdx++) {
      const info = bodyMergeMatrix[rowIdx]?.[colIdx];
      // If cell is covered by another master merge cell, skip rendering it in HTML
      if (info && info.isCovered) {
        continue;
      }

      const color = cellColors?.[rowIdx]?.[colIdx];
      const align = columnAlignments?.[colIdx] || 'left';
      const styles: string[] = [];
      if (color) styles.push(`background-color: ${color}`);
      if (align !== 'left') styles.push(`text-align: ${align}`);
      const styleAttr = styles.length > 0 ? ` style="${styles.join('; ')}"` : '';

      const spanAttrs: string[] = [];
      if (info && info.isMaster) {
        if (info.rowspan > 1) spanAttrs.push(` rowspan="${info.rowspan}"`);
        if (info.colspan > 1) spanAttrs.push(` colspan="${info.colspan}"`);
      }
      const spanAttrStr = spanAttrs.join('');

      const format = cellFormats?.[rowIdx]?.[colIdx];
      const content = formatCellHtml(rows[rowIdx]?.[colIdx] || '', format);
      tdCells.push(`      <td${spanAttrStr}${styleAttr}>${content}</td>`);
    }
    tbodyLines.push(`    <tr>\n${tdCells.join('\n')}\n    </tr>`);
  }

  const tbody = `  <tbody>\n${tbodyLines.join('\n')}\n  </tbody>`;

  let html = `<table>\n${thead}\n${tbody}\n</table>`;

  if (signatureOptions?.enabled) {
    const sigValue = signatureOptions.name?.trim() || '______________________';
    html += `\n<p><strong>Signature:</strong> ${escapeHtml(sigValue)}</p>`;
  }

  return html;
}

export function tableToMarkdown(
  headers: string[],
  rows: string[][],
  cellFormats?: CellFormat[][],
  headerFormats?: CellFormat[],
  signatureOptions?: { enabled?: boolean; name?: string },
  columnAlignments?: ('left' | 'center' | 'right')[]
): string {
  const formattedHeaders = headers.map((h, i) => formatCellMarkdown(h, headerFormats?.[i]));
  const formattedRows = rows.map((r, rIdx) =>
    headers.map((_, cIdx) => formatCellMarkdown(r[cIdx] || '', cellFormats?.[rIdx]?.[cIdx]))
  );

  const colWidths = headers.map((_, i) => {
    let max = Math.max(formattedHeaders[i].length, 3);
    for (const r of formattedRows) {
      const cell = r[i] || '';
      if (cell.length > max) max = cell.length;
    }
    return max;
  });

  const padCell = (text: string, width: number, align: 'left' | 'center' | 'right') => {
    if (align === 'right') {
      return text.padStart(width);
    }
    if (align === 'center') {
      const diff = width - text.length;
      const left = Math.floor(diff / 2);
      const right = diff - left;
      return ' '.repeat(left) + text + ' '.repeat(right);
    }
    return text.padEnd(width);
  };

  const headerRow = `| ${formattedHeaders.map((h, i) => padCell(h, colWidths[i], columnAlignments?.[i] || 'left')).join(' | ')} |`;
  const dividerRow = `| ${colWidths.map((w, i) => {
    const align = columnAlignments?.[i] || 'left';
    if (align === 'center') {
      return `:${'-'.repeat(Math.max(1, w - 2))}:`;
    }
    if (align === 'right') {
      return `${'-'.repeat(Math.max(2, w - 1))}:`;
    }
    return `:${'-'.repeat(Math.max(2, w - 1))}`;
  }).join(' | ')} |`;
  const dataRows = formattedRows.map(
    r => `| ${headers.map((_, i) => padCell(r[i] || '', colWidths[i], columnAlignments?.[i] || 'left')).join(' | ')} |`
  );

  let md = [headerRow, dividerRow, ...dataRows].join('\n');

  if (signatureOptions?.enabled) {
    const sigValue = signatureOptions.name?.trim() || '______________________';
    md += `\n\n**Signature:** ${sigValue}`;
  }

  return md;
}

export function tableToCsv(headers: string[], rows: string[][]): string {
  const formatCell = (val: string) => {
    const str = val ?? '';
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r') || str.includes(';')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const headerLine = headers.map(formatCell).join(',');
  const rowLines = rows.map(r => headers.map((_, i) => formatCell(r[i] || '')).join(','));

  return [headerLine, ...rowLines].join('\r\n');
}

export function tableToPlainText(
  headers: string[],
  rows: string[][],
  signatureOptions?: { enabled?: boolean; name?: string }
): string {
  // Split cells by newlines for multi-line ASCII rendering
  const headerLines = headers.map(h => (h || '').split(/\r?\n/));
  const rowCellLines = rows.map(r =>
    headers.map((_, i) => (r[i] || '').split(/\r?\n/))
  );

  const colWidths = headers.map((_, i) => {
    let max = 1;
    for (const line of headerLines[i]) {
      if (line.length > max) max = line.length;
    }
    for (const r of rowCellLines) {
      const lines = r[i] || [''];
      for (const line of lines) {
        if (line.length > max) max = line.length;
      }
    }
    return Math.max(max, 3);
  });

  const separator = `+${colWidths.map(w => '-'.repeat(w + 2)).join('+')}+`;

  // Render header lines
  const maxHeaderLineCount = Math.max(...headerLines.map(l => l.length), 1);
  const headerOutputRows: string[] = [];
  for (let l = 0; l < maxHeaderLineCount; l++) {
    const cells = headers.map((_, i) => {
      const line = headerLines[i][l] || '';
      return line.padEnd(colWidths[i]);
    });
    headerOutputRows.push(`| ${cells.join(' | ')} |`);
  }

  // Render data lines
  const dataOutputRows: string[] = [];
  for (const r of rowCellLines) {
    const maxLines = Math.max(...r.map(l => l.length), 1);
    for (let l = 0; l < maxLines; l++) {
      const cells = headers.map((_, i) => {
        const line = r[i]?.[l] || '';
        return line.padEnd(colWidths[i]);
      });
      dataOutputRows.push(`| ${cells.join(' | ')} |`);
    }
    dataOutputRows.push(separator);
  }

  let text = [separator, ...headerOutputRows, separator, ...dataOutputRows].join('\n');

  if (signatureOptions?.enabled) {
    const sigValue = signatureOptions.name?.trim() || '______________________';
    text += `\n\nSignature: ${sigValue}`;
  }

  return text;
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fallback to execCommand below
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

/**
 * Trigger an immediate client-side file download in the browser.
 * Does not open a new tab or navigate away.
 */
export function downloadFile(filename: string, content: string, mimeType: string): void {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 150);
}

/**
 * Generate a complete standalone HTML document containing one or multiple tables,
 * preserving table structure, merged cells (colspan/rowspan), background colors, bold, italic, and signature.
 */
export function generateFullHtmlDocument(tables: TableItem[]): string {
  const tablesContent = tables
    .map((tbl, idx) => {
      const title =
        tables.length > 1
          ? `    <h2 style="font-size: 1.15rem; font-weight: 800; margin: 28px 0 12px 0; text-transform: uppercase; letter-spacing: -0.02em;">${escapeHtml(
              tbl.name || `Table ${idx + 1}`
            )}</h2>\n`
          : '';

      const tableHtml = tableToHtml(
        tbl.headers,
        tbl.rows,
        tbl.cellColors,
        tbl.headerColors,
        tbl.cellFormats,
        tbl.headerFormats,
        { enabled: tbl.signatureEnabled, name: tbl.signatureName },
        tbl.columnAlignments,
        tbl.merges
      );

      return `  <section class="table-block" style="margin-bottom: 36px;">\n${title}${tableHtml}\n  </section>`;
    })
    .join('\n  <hr style="border: 0; border-top: 2px dashed #333; margin: 36px 0;" />\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tables.length === 1 && tables[0].name ? escapeHtml(tables[0].name) : 'TABLEGUY Export'}</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 32px 24px;
      color: #000000;
      background-color: #ffffff;
      line-height: 1.5;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 16px 0;
      font-size: 14px;
      table-layout: auto;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    th, td {
      border: 2px solid #000000;
      padding: 9px 12px;
      text-align: left;
      vertical-align: top;
      word-break: break-word;
      overflow-wrap: break-word;
      white-space: pre-wrap;
      max-width: 480px;
    }
    th {
      font-weight: 800;
      background-color: #f7f7f7;
    }
    p {
      margin-top: 14px;
      font-size: 14px;
    }
  </style>
</head>
<body>
<div class="container">
${tablesContent}
</div>
</body>
</html>`;
}

/**
 * Generate full Markdown output for one or multiple tables, preserving
 * bold, italic, and signature. Multiple tables are separated cleanly.
 */
export function generateFullMarkdown(tables: TableItem[]): string {
  if (tables.length === 1) {
    const tbl = tables[0];
    return tableToMarkdown(
      tbl.headers,
      tbl.rows,
      tbl.cellFormats,
      tbl.headerFormats,
      { enabled: tbl.signatureEnabled, name: tbl.signatureName },
      tbl.columnAlignments
    );
  }

  return tables
    .map((tbl, idx) => {
      const header = `### ${tbl.name || `Table ${idx + 1}`}\n\n`;
      const content = tableToMarkdown(
        tbl.headers,
        tbl.rows,
        tbl.cellFormats,
        tbl.headerFormats,
        { enabled: tbl.signatureEnabled, name: tbl.signatureName },
        tbl.columnAlignments
      );
      return `${header}${content}`;
    })
    .join('\n\n---\n\n');
}

/**
 * Generate full CSV output. Contains only cell data (no formatting, colors, or signature).
 * Properly escapes commas, quotes, and line breaks.
 * Multiple tables are kept valid and readable by separating with clear headers and blank lines.
 * When forDownload is true, prepends UTF-8 BOM (\uFEFF) and Excel delimiter directive (sep=,\r\n)
 * so Excel on any Windows regional setting opens columns cleanly instead of bundling into Column A.
 */
export function generateFullCsv(tables: TableItem[], forDownload = true): string {
  let csvBody = '';
  if (tables.length === 1) {
    csvBody = tableToCsv(tables[0].headers, tables[0].rows);
  } else {
    csvBody = tables
      .map((tbl, idx) => {
        const tableName = tbl.name || `Table ${idx + 1}`;
        const headerComment = `# ${tableName}`;
        const csvData = tableToCsv(tbl.headers, tbl.rows);
        return `${headerComment}\r\n${csvData}`;
      })
      .join('\r\n\r\n');
  }

  if (forDownload) {
    // \uFEFF ensures UTF-8 detection in Excel; sep=, forces comma delimiter in all regional locales
    return `\uFEFFsep=,\r\n${csvBody}`;
  }

  return csvBody;
}

/**
 * Generate full Plain Text output with clean ASCII borders and signatures.
 * Multiple tables are clearly separated.
 */
export function generateFullPlainText(tables: TableItem[]): string {
  if (tables.length === 1) {
    const tbl = tables[0];
    return tableToPlainText(tbl.headers, tbl.rows, {
      enabled: tbl.signatureEnabled,
      name: tbl.signatureName,
    });
  }

  return tables
    .map((tbl, idx) => {
      const title = `=== ${tbl.name || `Table ${idx + 1}`} ===\n`;
      const tableText = tableToPlainText(tbl.headers, tbl.rows, {
        enabled: tbl.signatureEnabled,
        name: tbl.signatureName,
      });
      return `${title}${tableText}`;
    })
    .join('\n\n' + '='.repeat(48) + '\n\n');
}

/**
 * Convert hex color code to [r, g, b] array for jsPDF styling.
 */
export function hexToRgb(hex: string): [number, number, number] | null {
  if (!hex) return null;
  const cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return [r, g, b];
  }
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

/**
 * Download generated table(s) as a clean, printable PDF named 'table.pdf'.
 * Preserves cell contents, structure, merged cells (colSpan/rowSpan), background colors, bold/italic text,
 * signatures, handles wide tables automatically (landscape), and long tables (multi-page).
 */
export function downloadPdf(tables: TableItem[], filename = 'table.pdf'): void {
  if (!tables || tables.length === 0) return;

  const maxCols = Math.max(...tables.map(t => t.headers.length || 0));
  // If table has more than 5 columns, switch to landscape for optimal readability
  const orientation = maxCols > 5 ? 'landscape' : 'portrait';

  const doc = new jsPDF({
    orientation,
    unit: 'mm',
    format: 'a4',
  });

  const margin = 14;
  let currentY = margin;

  tables.forEach((tbl, tblIdx) => {
    const pageHeight = doc.internal.pageSize.getHeight();

    // Table title if multiple tables or custom name
    if (tables.length > 1 || (tbl.name && tbl.name.trim() !== '' && tbl.name !== 'Untitled Table')) {
      if (currentY + 20 > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(tables.length > 1 ? 12 : 14);
      doc.setTextColor(0, 0, 0);
      const title = tbl.name || `Table ${tblIdx + 1}`;
      doc.text(title, margin, currentY);
      currentY += 6;
    }

    const fontSize = maxCols > 8 ? 7.5 : maxCols > 5 ? 8.5 : 9.5;

    // Convert headers and rows to jspdf-autotable Input with colSpan / rowSpan support for merges
    const { headerMergeInfo, bodyMergeMatrix } = getTableMergeInfo(tbl.rows.length, tbl.headers.length, tbl.merges || []);

    const headRow: any[] = [];
    for (let cIdx = 0; cIdx < tbl.headers.length; cIdx++) {
      const info = headerMergeInfo[cIdx];
      if (info && info.isCovered) {
        continue;
      }
      const cellObj: any = {
        content: tbl.headers[cIdx] ?? '',
      };
      if (info && info.isMaster) {
        if (info.rowspan > 1) cellObj.rowSpan = info.rowspan;
        if (info.colspan > 1) cellObj.colSpan = info.colspan;
      }
      headRow.push(cellObj);
    }

    const bodyData: any[] = [];

    for (let rIdx = 0; rIdx < tbl.rows.length; rIdx++) {
      const rowCells: any[] = [];
      for (let cIdx = 0; cIdx < tbl.headers.length; cIdx++) {
        const info = bodyMergeMatrix[rIdx]?.[cIdx];
        if (info && info.isCovered) {
          // autoTable automatically handles skipping covered cells if master specifies colSpan / rowSpan
          continue;
        }

        const cellText = tbl.rows[rIdx]?.[cIdx] ?? '';
        const cellObj: any = {
          content: cellText,
        };

        if (info && info.isMaster) {
          if (info.rowspan > 1) cellObj.rowSpan = info.rowspan;
          if (info.colspan > 1) cellObj.colSpan = info.colspan;
        }

        rowCells.push(cellObj);
      }
      bodyData.push(rowCells);
    }

    autoTable(doc, {
      startY: currentY,
      head: [headRow],
      body: bodyData,
      theme: 'grid',
      margin: { top: margin, right: margin, bottom: margin, left: margin },
      styles: {
        font: 'helvetica',
        fontSize,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.25,
        cellPadding: 3,
        overflow: 'linebreak',
        valign: 'middle',
      },
      headStyles: {
        fillColor: [242, 242, 242],
        textColor: [0, 0, 0],
        fontStyle: 'bold',
        lineWidth: 0.35,
        lineColor: [0, 0, 0],
      },
      didParseCell: (data) => {
        const colIdx = data.column.index;
        const align = tbl.columnAlignments?.[colIdx] || 'left';
        data.cell.styles.halign = align;

        if (data.section === 'head') {
          const hColor = tbl.headerColors?.[colIdx];
          if (hColor) {
            const rgb = hexToRgb(hColor);
            if (rgb) data.cell.styles.fillColor = rgb;
          }
          const hFormat = tbl.headerFormats?.[colIdx];
          if (hFormat?.italic) {
            data.cell.styles.fontStyle = 'bolditalic';
          }
        } else if (data.section === 'body') {
          const rowIdx = data.row.index;
          const cellColor = tbl.cellColors?.[rowIdx]?.[colIdx];
          if (cellColor) {
            const rgb = hexToRgb(cellColor);
            if (rgb) data.cell.styles.fillColor = rgb;
          }
          const format = tbl.cellFormats?.[rowIdx]?.[colIdx];
          if (format?.bold && format?.italic) {
            data.cell.styles.fontStyle = 'bolditalic';
          } else if (format?.bold) {
            data.cell.styles.fontStyle = 'bold';
          } else if (format?.italic) {
            data.cell.styles.fontStyle = 'italic';
          }
        }
      },
    });

    const finalY = (doc as any).lastAutoTable?.finalY ?? currentY;
    currentY = finalY;

    // Signature if enabled
    if (tbl.signatureEnabled && tbl.signatureName?.trim()) {
      if (currentY + 15 > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
      } else {
        currentY += 6;
      }
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9.5);
      doc.setTextColor(40, 40, 40);
      doc.text(`Signed: ${tbl.signatureName.trim()}`, margin, currentY);
      currentY += 4;
    }

    currentY += 12;
  });

  doc.save(filename);
}
