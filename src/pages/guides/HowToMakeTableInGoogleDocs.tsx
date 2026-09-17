import React from 'react';
import { useRouter, Link } from '../../router';
import { BrutalButton } from '../../components/BrutalButton';
import { BrutalBadge } from '../../components/BrutalBadge';
import { SEO } from '../../components/SEO';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Table as TableIcon,
  CheckCircle2,
  FileText,
  MousePointerClick,
  Sparkles,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Columns3,
  AlignRight,
  Palette,
  Check,
  FileSpreadsheet,
} from 'lucide-react';

export const HowToMakeTableInGoogleDocs: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Table in Google Docs | TABLABLE"
        description="Learn how to insert, format, customize, and clean up tables in Google Docs. Includes simple steps, design tips, and common table mistakes."
        canonicalPath="/guides/how-to-make-a-table-in-google-docs"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14 flex flex-col gap-8 sm:gap-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-600 flex-wrap">
          <Link href="/" className="hover:text-black hover:underline">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-gray-400" />
          <Link href="/guides" className="hover:text-black hover:underline">
            Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-gray-400" />
          <span className="text-black font-extrabold truncate max-w-[240px] sm:max-w-md">
            How to Make a Table in Google Docs
          </span>
        </nav>

        {/* Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="green" size="md">
              TABLES IN EVERYDAY LIFE
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              6 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Make a Table in Google Docs
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Google Docs is great for writing, but paragraphs alone fail when presenting comparisons, meeting agendas, and project schedules. Here is how to insert, style, and polish Google Docs tables so they look professional rather than like a default homework assignment.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Opening */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileText className="w-6 h-6 stroke-[2.5]" />
              When Text Alone Fails in Documents
            </h2>

            <p>
              Google Docs is the go-to tool for writing proposals, briefs, client reports, and team documentation. But when you need to explain who is handling which task, compare feature packages, or outline quarterly milestones, typing long bullet points turns your document into an exhausting wall of text.
            </p>

            <p>
              A table solves this immediately. It gives every piece of information its own coordinate: tasks line up with names, dates line up with deliverables, and readers can scan in three seconds what previously took three minutes to decipher.
            </p>

            <p>
              However, inserting a default Google Docs table often produces cramped, 1px black boxes that look uninspired. With just four small adjustments, you can transform an ordinary document table into an executive-ready layout.
            </p>
          </section>

          {/* Section 2: How to Insert a Table */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 stroke-[2.5]" />
              Step-by-Step: How to Insert a Table
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Inserting a table in Google Docs takes three clicks:
            </p>

            <ol className="space-y-3 text-xs sm:text-sm">
              <li className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-black block font-bold">Open the Insert menu:</strong>
                  <span className="text-gray-700">Place your cursor exactly where you want the table to appear in your document. In the top navigation bar, click <strong>Insert</strong>.</span>
                </div>
              </li>

              <li className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-black block font-bold">Hover over Table:</strong>
                  <span className="text-gray-700">Hover your cursor over the <strong>Table</strong> submenu. A square grid selector will pop open.</span>
                </div>
              </li>

              <li className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-black block font-bold">Select grid dimensions:</strong>
                  <span className="text-gray-700">Drag your cursor across the grid to highlight the desired rows and columns (e.g. 4 columns by 5 rows), then click once to insert.</span>
                </div>
              </li>
            </ol>

            <div className="p-3 bg-blue-50 border border-black text-xs text-blue-900 font-medium">
              <strong>Quick Tip:</strong> Don't worry about getting the exact row count right on day one. You can add or delete rows and columns at any point with a simple right-click.
            </div>
          </section>

          {/* Section 3: Essential Editing Actions */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Columns3 className="w-6 h-6 stroke-[2.5]" />
              Essential Everyday Editing Actions
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Here are the core keyboard shortcuts and mouse interactions you will use constantly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Add rows quickly:</strong>
                <p className="text-gray-700">When your cursor is in the very last cell of the table, pressing <kbd className="font-mono text-xs bg-gray-100 px-1 border">Tab</kbd> instantly creates a fresh row at the bottom.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Insert or delete columns:</strong>
                <p className="text-gray-700">Right-click any cell to open the contextual menu, where you can select <em>Insert column left / right</em> or <em>Delete column</em>.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Resize column widths:</strong>
                <p className="text-gray-700">Hover your cursor over the vertical divider line between any two columns until your cursor turns into a two-way arrow (<code className="font-mono text-xs">&harr;</code>), then click and drag.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Pin header across pages:</strong>
                <p className="text-gray-700">If your table spans across page breaks, right-click the top row, choose <em>Table properties</em>, and check <strong>Pin header row(s)</strong> so your titles repeat at the top of every printed page.</p>
              </div>
            </div>
          </section>

          {/* Section 4: How to Style a Google Docs Table */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Palette className="w-5 h-5 stroke-[2.5]" />
              Five Rules for Professional Table Styling
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Default Google Docs tables look dated because of heavy black outlines and zero breathing room. Here is how designers make tables look editorial:
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border border-black">
                <strong className="text-black block mb-0.5 font-bold">1. Lighten the borders</strong>
                <p className="text-gray-700">
                  Highlight the entire table, open <em>Table properties &rarr; Color</em>, and change the border color from harsh black (#000000) to a gentle slate or medium gray (#D1D5DB). Alternatively, set the border width to 0.5pt. The table will immediately feel modern and spacious.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-black">
                <strong className="text-black block mb-0.5 font-bold">2. Add subtle contrast to headers</strong>
                <p className="text-gray-700">
                  Highlight the top header row, click the background fill bucket tool in the toolbar, and choose a subtle 5% tint (very light gray, warm cream, or pale blue). Make the header font bold.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-black">
                <strong className="text-black block mb-0.5 font-bold">3. Increase cell padding</strong>
                <p className="text-gray-700">
                  Text jammed against table borders is hard to read. In <em>Table properties &rarr; Cell</em>, change the cell padding from the cramped default (0.05 inches) to <strong>0.08–0.12 inches</strong>. This gives your text comfortable visual margin.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-black">
                <strong className="text-black block mb-0.5 font-bold">4. Align numbers to the right</strong>
                <p className="text-gray-700">
                  Text like task descriptions and names should always be left-aligned. Financial amounts, percentages, and numeric quantities should be right-aligned so decimal points line up vertically. Read our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a readable table
                  </Link>.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-black">
                <strong className="text-black block mb-0.5 font-bold">5. Delete empty outer borders (Optional)</strong>
                <p className="text-gray-700">
                  For an executive presentation feel, remove the left and right outer borders completely, leaving only horizontal dividing lines.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: What NOT to Do */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <XCircle className="w-6 h-6 stroke-[2.5] text-red-600" />
              Common Google Docs Table Mistakes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-red-50 border border-red-300 text-red-950">
                <strong className="block font-bold mb-1">Too many columns in portrait mode</strong>
                <p>Trying to cram 8 columns into standard 8.5" × 11" portrait paper squashes text until words break across four lines. If you have more than 6 columns, switch the page or section to landscape mode (<em>File &rarr; Page setup &rarr; Landscape</em>).</p>
              </div>

              <div className="p-3.5 bg-red-50 border border-red-300 text-red-950">
                <strong className="block font-bold mb-1">Rainbow cell backgrounds</strong>
                <p>Using bright neon greens, yellows, and reds for status badges creates visual chaos. Use muted pastel tones or simple text labels instead.</p>
              </div>

              <div className="p-3.5 bg-red-50 border border-red-300 text-red-950">
                <strong className="block font-bold mb-1">Writing novels inside single cells</strong>
                <p>If a table cell contains two full paragraphs of prose, that content shouldn't be in a table. Move lengthy explanations into regular body paragraphs above or below the grid.</p>
              </div>

              <div className="p-3.5 bg-red-50 border border-red-300 text-red-950">
                <strong className="block font-bold mb-1">Inconsistent cell alignments</strong>
                <p>Centering column 1, left-aligning column 2, and right-aligning column 3 without purpose forces the eye to zigzag across the screen. Keep rules consistent.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Concrete Example - Project Task Overview */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5] text-green-700" />
              Realistic Example: Clean Project Task Table
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Here is what a properly structured, clean 4-column table looks like in action:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-xs sm:text-sm uppercase flex items-center justify-between">
                <span>Project Deliverables Overview</span>
                <span className="font-mono text-xs text-gray-600">Q4 Sprint</span>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-black">
                      <th className="p-3 font-black border-r border-gray-300">Deliverable Task</th>
                      <th className="p-3 font-black border-r border-gray-300">Owner</th>
                      <th className="p-3 font-black border-r border-gray-300">Due Date</th>
                      <th className="p-3 font-black text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-medium">
                    <tr>
                      <td className="p-3 border-r border-gray-300 font-bold">Design website mockup</td>
                      <td className="p-3 border-r border-gray-300 text-gray-700">Sara</td>
                      <td className="p-3 border-r border-gray-300 text-gray-600 font-mono text-xs">Oct 12</td>
                      <td className="p-3 text-right">
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 border border-green-300 text-xs font-bold">
                          Done
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-300 font-bold">Write sales page copy</td>
                      <td className="p-3 border-r border-gray-300 text-gray-700">Ahmed</td>
                      <td className="p-3 border-r border-gray-300 text-gray-600 font-mono text-xs">Oct 14</td>
                      <td className="p-3 text-right">
                        <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-900 border border-yellow-300 text-xs font-bold">
                          In Progress
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-300 font-bold">Review final legal draft</td>
                      <td className="p-3 border-r border-gray-300 text-gray-700">Nadia</td>
                      <td className="p-3 border-r border-gray-300 text-gray-600 font-mono text-xs">Oct 16</td>
                      <td className="p-3 text-right">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 border border-gray-300 text-xs font-bold">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              Want to see more project management structures? Read our dedicated guide on{' '}
              <Link href="/guides/organize-project-with-table" className="underline font-bold text-black hover:text-gray-800">
                how to organize a project with a table
              </Link>.
            </p>
          </section>

          {/* Section 7: When Google Docs Tables Are NOT the Right Choice */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 stroke-[2.5]" />
              When Should You NOT Use a Google Docs Table?
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Google Docs tables are ideal for brief illustrative summaries inside reports. However, they are unsuited for four specific scenarios:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-gray-800">
              <div className="p-3 bg-[#FAF8F5] border border-black">
                <strong className="text-black font-bold block mb-0.5">1. You need mathematical calculations</strong>
                <p className="text-gray-700">Google Docs tables do not have formulas like <code className="font-mono text-xs bg-white px-1 border">=SUM()</code> or <code className="font-mono text-xs bg-white px-1 border">=AVERAGE()</code>. If your table requires calculating totals, build it in <strong>Google Sheets</strong> and use <em>Insert &rarr; Chart/Table &rarr; From Sheets</em> to link it live.</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black">
                <strong className="text-black font-bold block mb-0.5">2. You have hundreds of records</strong>
                <p className="text-gray-700">Pasting a 300-row inventory sheet into Google Docs creates 8 pages of slow-loading tables. Use a dedicated spreadsheet application with sorting and filtering instead.</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black">
                <strong className="text-black font-bold block mb-0.5">3. You need to publish the table on a website</strong>
                <p className="text-gray-700">Copying and pasting a Google Docs table directly into WordPress, Webflow, or Shopify brings over unwanted inline styling. Converting your data to standard HTML is far better for web performance.</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black">
                <strong className="text-black font-bold block mb-0.5">4. You are writing technical documentation</strong>
                <p className="text-gray-700">For GitHub repositories and developer portals, Markdown tables are superior because they live directly in source code version control.</p>
              </div>
            </div>
          </section>

          {/* Section 8: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Prepare and Polish Tables Before You Paste
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Whether you need to format raw columns, align numbers, or export clean Markdown and HTML for your team, TABLABLE gives you a frictionless visual workbench to build perfect tables in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-gdocs-to-tablable-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 9: 4 Useful FAQs */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I insert a table in Google Docs?
                </h3>
                <p className="text-sm text-gray-700">
                  Click <strong>Insert</strong> in the top menu bar, hover over <strong>Table</strong>, and move your mouse over the square grid to choose your desired number of rows and columns.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I make a table look better in Google Docs?
                </h3>
                <p className="text-sm text-gray-700">
                  Lighten the border color from black to light gray (#D1D5DB), add a subtle 5% background tint to the header row, increase cell padding to 0.1 inches in Table Properties, and right-align all numeric data.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can Google Docs tables do math or calculations?
                </h3>
                <p className="text-sm text-gray-700">
                  No. Google Docs tables do not feature a formula bar or native spreadsheet functions. If you need auto-summing or formulas, build your table in Google Sheets and embed it via <em>Insert &rarr; Chart &rarr; From Sheets</em>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I delete a table in Google Docs?
                </h3>
                <p className="text-sm text-gray-700">
                  Right-click anywhere inside the table and select <strong>Delete table</strong> from the dropdown menu. You can also highlight the entire table and press <kbd className="font-mono text-xs bg-gray-100 px-1 border">Backspace</kbd> or <kbd className="font-mono text-xs bg-gray-100 px-1 border">Delete</kbd>.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Navigation */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/organize-project-with-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: How to Organize a Project with a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
