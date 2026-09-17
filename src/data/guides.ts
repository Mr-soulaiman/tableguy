export interface GuideCategory {
  id: string;
  name: string;
  description: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  category: 'TABLE FORMATS' | 'TABLE BASICS' | 'TABLES IN EVERYDAY LIFE' | 'TIPS & HOW-TO';
  description: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  summaryPoints?: string[];
  relatedSlugs: string[];
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    id: 'table-formats',
    name: 'TABLE FORMATS',
    description: 'Understand different table and data formats and when to use them.',
  },
  {
    id: 'table-basics',
    name: 'TABLE BASICS',
    description: 'Learn how to create tables that are clear, useful, and easy to understand.',
  },
  {
    id: 'tables-in-everyday-life',
    name: 'TABLES IN EVERYDAY LIFE',
    description: 'Practical ways to use tables for studying, planning, comparing, organizing, and more.',
  },
  {
    id: 'tips-and-how-to',
    name: 'TIPS & HOW-TO',
    description: 'Simple techniques for creating, formatting, and working with tables.',
  },
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: 'csv-vs-excel-vs-html-vs-markdown',
    title: "CSV vs Excel vs HTML vs Markdown: What's the Difference?",
    category: 'TABLE FORMATS',
    description: "CSV, Excel, HTML and Markdown all handle tables differently. Here's what each one is good for, with simple examples to help you choose the right format.",
    readingTime: '5 min read',
    seoTitle: "CSV vs Excel vs HTML vs Markdown: What's the Difference? | TABLABLE",
    seoDescription: "CSV, Excel, HTML and Markdown all handle tables differently. Here's what each one is good for, with simple examples to help you choose the right format.",
    intro: "CSV, Excel, HTML, and Markdown all handle tables differently. Here is what each format actually does, what it is good for, and how to pick the right one without overthinking it.",
    summaryPoints: [
      "Excel is an interactive workspace for formulas, calculations, and active sheets.",
      "CSV is raw data stripped down to its essentials, built to move cleanly between programs.",
      "HTML is standard web markup for styling, cell merging, and rendering tables on web pages.",
      "Markdown is plain text syntax using pipes that stays readable anywhere, even before rendering."
    ],
    relatedSlugs: ['when-to-use-csv', 'when-to-use-html-tables', 'when-to-use-markdown-tables'],
  },
  {
    slug: 'when-to-use-csv',
    title: 'When Should You Use CSV?',
    category: 'TABLE FORMATS',
    description: 'Not sure when to use CSV? Learn what CSV is good for, when it makes sense, and when another format like Excel is a better choice.',
    readingTime: '4 min read',
    seoTitle: 'When Should You Use CSV? A Simple Guide | TABLABLE',
    seoDescription: 'Not sure when to use CSV? Learn what CSV is good for, when it makes sense, and when another format like Excel is a better choice.',
    intro: "CSV isn't built for pretty reports or fancy colors. It was built for one specific purpose: moving data between different tools without friction. Here is how to know when it is the exact right tool for your table.",
    summaryPoints: [
      "Universally supported by almost every spreadsheet, CRM, database, and system.",
      "Lightweight plain-text format that handles large lists of records with zero lag.",
      "Ideal for transferring raw data between different applications.",
      "Does not save formulas, cell colors, bold text, or merged headers."
    ],
    relatedSlugs: ['csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'when-to-use-html-tables',
    title: 'When Should You Use HTML Tables?',
    category: 'TABLE FORMATS',
    description: 'Learn when HTML tables are useful, when to use them on a website, and when another format is a better choice.',
    readingTime: '4 min read',
    seoTitle: 'When Should You Use HTML Tables? A Simple Guide | TABLABLE',
    seoDescription: 'Learn when HTML tables are useful, when to use them on a website, and when another format is a better choice.',
    intro: "If you want people to view, compare, and understand structured data directly on a webpage, HTML tables are how you do it. Here is when they make total sense, and when you should avoid them.",
    summaryPoints: [
      "Native browser rendering with complete support for cell merging (colspan and rowspan).",
      "Full styling flexibility through CSS background colors, borders, and typography.",
      "Accessible semantic tags (thead, tbody, th, td) for screen readers.",
      "Ideal for embedding styled data tables into websites, CMS articles, and web apps."
    ],
    relatedSlugs: ['csv-vs-excel-vs-html-vs-markdown', 'when-to-use-csv'],
  },
  {
    slug: 'when-to-use-markdown-tables',
    title: 'When Should You Use Markdown Tables?',
    category: 'TABLE FORMATS',
    description: 'Learn when Markdown tables are useful, when to avoid them, and how to create simple readable tables for documentation, GitHub, notes, and more.',
    readingTime: '4 min read',
    seoTitle: 'When Should You Use Markdown Tables? | TABLABLE',
    seoDescription: 'Learn when Markdown tables are useful, when to avoid them, and how to create simple readable tables for documentation, GitHub, notes, and more.',
    intro: "Markdown tables give you a clean, lightweight way to show structured data inside notes, README files, and documentation without writing messy code. Here is when they shine, when they fall short, and how to build one that looks great.",
    summaryPoints: [
      "Readable directly in raw text editors using standard pipe (|) and dash (-) syntax.",
      "Natively supported on GitHub, GitLab, Notion, Obsidian, and static site generators.",
      "Supports basic column alignments (left, center, right).",
      "Best for documentation summaries, parameter lists, and quick comparison tables."
    ],
    relatedSlugs: ['when-to-use-html-tables', 'when-to-use-csv', 'csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'tables-vs-lists',
    title: 'Tables vs Lists: When Should You Use Each?',
    category: 'TABLE BASICS',
    description: 'Learn when a table is better than a list and when a simple list is actually the better choice. Real examples, comparison rules, and practical advice.',
    readingTime: '5 min read',
    seoTitle: 'Tables vs Lists: When Should You Use Each? | TABLABLE',
    seoDescription: 'Learn when a table is better than a list and when a simple list is actually the better choice. Real examples, comparison rules, and practical advice.',
    intro: "Choosing between a table and a list determines how easily your audience scans and interprets your content. Both have specific strengths depending on data complexity.",
    summaryPoints: [
      "Use lists when items have single attributes or follow a strict chronological sequence.",
      "Use tables when items share multiple comparable dimensions (e.g., price, features, status).",
      "Tables allow multi-dimensional scanning across both rows and columns.",
      "Keep short simple notes in lists, but switch to tables when comparisons become repetitive."
    ],
    relatedSlugs: ['how-to-make-readable-table', 'turn-messy-list-into-clean-table', 'compare-products-with-table'],
  },
  {
    slug: 'how-to-make-readable-table',
    title: 'How to Make a Table Easy to Read',
    category: 'TABLE BASICS',
    description: 'Learn how to turn a confusing table into one anyone can understand in a few seconds. Clear rules on alignment, headers, cell length, and the 5-second test.',
    readingTime: '5 min read',
    seoTitle: 'How to Make a Table Easy to Read | TABLABLE',
    seoDescription: 'Learn how to turn a confusing table into one anyone can understand in a few seconds. Clear rules on alignment, headers, cell length, and the 5-second test.',
    intro: "A well-structured table allows readers to spot key data points in seconds. Clear header design, consistent alignment, and balanced spacing make all the difference.",
    summaryPoints: [
      "Align text columns to the left and numerical figures to the right for easy comparison.",
      "Keep header labels concise, descriptive, and visually distinct from body rows.",
      "Use subtle alternating rows or borders to guide the reader's eye across wide tables.",
      "Avoid overcrowded cells by splitting complex entries into logical sub-columns."
    ],
    relatedSlugs: ['tables-vs-lists', 'common-table-mistakes', 'tables-for-studying'],
  },
  {
    slug: 'tables-for-studying',
    title: 'How Tables Can Help You Study',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn practical ways to use study tables for revision, definitions, vocabulary, formulas, and history. Avoid dense paragraphs and retain information faster.',
    readingTime: '5 min read',
    seoTitle: 'How Tables Can Help You Study | TABLABLE',
    seoDescription: 'Learn practical ways to use study tables for revision, definitions, vocabulary, formulas, and history. Avoid dense paragraphs and retain information faster.',
    intro: "Transforming dense textbook notes into structured visual tables is one of the most effective techniques for active learning and revision.",
    summaryPoints: [
      "Side-by-side comparison tables make contrasting concepts immediately obvious.",
      "Summarizing chapters into tables forces you to extract core definitions and keywords.",
      "Formula and vocabulary tables provide quick reference sheets during revision.",
      "Structured tables reduce cognitive overload compared to long uninterrupted paragraphs."
    ],
    relatedSlugs: ['tables-vs-lists', 'how-to-make-readable-table', 'organize-information-with-table'],
  },
  {
    slug: 'budget-with-a-table',
    title: 'How to Organize Your Budget With a Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how a simple table makes personal budgeting easy to understand. Compare planned vs actual spending, fixed vs variable costs, and avoid common budgeting traps.',
    readingTime: '5 min read',
    seoTitle: 'How to Organize Your Budget With a Table | TABLABLE',
    seoDescription: 'Learn how a simple table makes personal budgeting easy to understand. Compare planned vs actual spending, fixed vs variable costs, and avoid common budgeting traps.',
    intro: "Tracking income and expenses in a clean table gives you complete clarity on cash flow and spending patterns without complex accounting software.",
    summaryPoints: [
      "Structure columns with Category, Planned, Actual, and Difference.",
      "Group expenses into fixed predictable costs and variable spending.",
      "Keep categories to 6–8 broad buckets rather than exhausting micro-categories.",
      "Review weekly to adjust habits based on actual numbers."
    ],
    relatedSlugs: ['tables-for-studying', 'organize-information-with-table', 'common-table-mistakes'],
  },
  {
    slug: 'compare-products-with-table',
    title: 'How to Compare Products Using a Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to create a simple product comparison table that makes prices, features, and differences easier to understand and compare.',
    readingTime: '5 min read',
    seoTitle: 'How to Compare Products Using a Table | TABLABLE',
    seoDescription: 'Learn how to create a simple product comparison table that makes prices, features, and differences easier to understand and compare.',
    intro: "Comparing products across dozens of open browser tabs is exhausting. Putting the choices into a simple comparison table puts everything in one view so you can make a clear decision in minutes.",
    summaryPoints: [
      "Pick 4 to 8 critical deciding features rather than dozens of confusing specifications.",
      "Keep units, currencies, and formats strictly consistent across every row.",
      "Avoid large paragraphs in cells and focus on comparable values.",
      "Turn your raw comparison into a clean exportable table in TABLABLE."
    ],
    relatedSlugs: ['how-to-make-readable-table', 'tables-vs-lists', 'make-table-from-excel-google-sheets'],
  },
  {
    slug: 'common-table-mistakes',
    title: 'Common Mistakes When Creating Tables',
    category: 'TIPS & HOW-TO',
    description: 'Avoid the top 10 common table mistakes including too many columns, unclear headings, mixing formats, and forgetting mobile screens. Simple fixes for every problem.',
    readingTime: '5 min read',
    seoTitle: 'Common Mistakes When Creating Tables | TABLABLE',
    seoDescription: 'Avoid the top 10 common table mistakes including too many columns, unclear headings, mixing formats, and forgetting mobile screens. Simple fixes for every problem.',
    intro: "Even accurate data can be misunderstood if presented in a cluttered table. Recognizing frequent table mistakes helps you produce clearer documents.",
    summaryPoints: [
      "Keep table widths down to 4–6 columns so text doesn't squeeze awkwardly on mobile screens.",
      "Right-align numbers and prices so decimal places and digits align vertically.",
      "Summarize long paragraphs inside cells to prevent bloated row heights.",
      "Eliminate redundant columns where every row contains the exact same information."
    ],
    relatedSlugs: ['how-to-make-readable-table', 'tables-vs-lists', 'organize-information-with-table'],
  },
  {
    slug: 'turn-messy-list-into-clean-table',
    title: 'How to Turn a Messy List Into a Clean Table',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to turn messy lists, notes, copied text, and other unorganized information into clean, readable tables with simple practical steps.',
    readingTime: '5 min read',
    seoTitle: 'How to Turn a Messy List Into a Clean Table | TABLABLE',
    seoDescription: 'Learn how to turn messy lists, notes, copied text, and other unorganized information into clean, readable tables with simple practical steps.',
    intro: "When someone dumps unorganized text, notes, or messages in your lap, the data isn't the problem — the organization is. Here is a practical, 5-step method to turn messy text into a clean table in minutes.",
    summaryPoints: [
      "Spot repeating patterns across raw lines to define clean column headers.",
      "Clean formatting quirks, standardize dates/currencies, and fill empty cells before formatting.",
      "Use tables when each item has multiple comparable attributes, and simple lists for single points.",
      "Export directly to CSV, HTML, or Markdown once structured."
    ],
    relatedSlugs: ['make-table-from-excel-google-sheets', 'when-to-use-html-tables', 'csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'make-table-from-excel-google-sheets',
    title: 'How to Make a Table From Excel or Google Sheets',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to turn Excel or Google Sheets data into a clean, readable table using simple steps, with tips for fixing messy pasted data.',
    readingTime: '5 min read',
    seoTitle: 'How to Make a Table From Excel or Google Sheets | TABLABLE',
    seoDescription: 'Learn how to turn Excel or Google Sheets data into a clean, readable table using simple steps, with tips for fixing messy pasted data.',
    intro: "Spreadsheets are great for calculating and managing data. But when you need to pull out rows to share in an email, documentation, or a website, sending an entire sheet is overkill. Here is how to turn spreadsheet data into a clean, ready-to-share table in a few easy steps.",
    summaryPoints: [
      "Copy cells directly from Excel or Google Sheets (copied as tab-delimited text).",
      "Strip unnecessary columns to make tables significantly easier to read.",
      "Fix common paste issues like stacked columns, shifted headers, or merged cells.",
      "Export instantly to clean HTML, Markdown, CSV, TXT, or PDF."
    ],
    relatedSlugs: ['turn-messy-list-into-clean-table', 'csv-vs-excel-vs-html-vs-markdown', 'when-to-use-html-tables'],
  },
  {
    slug: 'organize-information-with-table',
    title: 'How to Organize Information With a Table',
    category: 'TABLE BASICS',
    description: 'Learn a simple, step-by-step process to turn scattered notes, trip details, tasks, and project ideas into clean, scannable tables that anyone can understand.',
    readingTime: '5 min read',
    seoTitle: 'How to Organize Information With a Table | TABLABLE',
    seoDescription: 'Learn a simple, step-by-step process to turn scattered notes, trip details, tasks, and project ideas into clean, scannable tables that anyone can understand.',
    intro: "Turning unstructured notes into an organized table requires deciding what belongs in rows and what should become a column.",
    summaryPoints: [
      "Spot repeated categories across scattered notes to form 3 to 5 clear columns.",
      "Assign individual entities or records to rows, and their attributes to columns.",
      "Right-align numbers and left-align text to keep the table scannable.",
      "Avoid tables for sequential recipes or long narrative text."
    ],
    relatedSlugs: ['turn-messy-list-into-clean-table', 'tables-vs-lists', 'how-to-make-readable-table'],
  },
  {
    slug: 'organize-project-with-table',
    title: 'How to Organize a Project With a Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to turn scattered project tasks, owners, and deadlines into a simple project table. Practical steps, examples, and templates for small teams and personal projects.',
    readingTime: '5 min read',
    seoTitle: 'How to Organize a Project With a Table | TABLABLE',
    seoDescription: 'Learn how to turn scattered project tasks, owners, and deadlines into a simple project table. Practical steps, examples, and templates for small teams and personal projects.',
    intro: "A project has tasks, people, deadlines, and different statuses, but everything is scattered across chat messages and notes. A simple table turns that confusion into a clean, actionable plan.",
    summaryPoints: [
      "Define 4 to 5 core columns: Task, Person, Deadline, and Status.",
      "Assign one clear owner per row to ensure accountability.",
      "Keep statuses simple (Not Started, In Progress, Done) to avoid administrative bloat.",
      "Use tables for small focused teams, and dedicated software for enterprise dependencies."
    ],
    relatedSlugs: ['turn-messy-list-into-clean-table', 'tables-vs-lists', 'organize-information-with-table'],
  },
  {
    slug: 'organize-study-notes-with-table',
    title: 'How to Organize Your Study Notes With a Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to turn long study notes, formulas, vocabulary, and history dates into clean revision tables. Practical steps, examples, and study templates.',
    readingTime: '5 min read',
    seoTitle: 'How to Organize Your Study Notes With a Table | TABLABLE',
    seoDescription: 'Learn how to turn long study notes, formulas, vocabulary, and history dates into clean revision tables. Practical steps, examples, and study templates.',
    intro: "Reviewing pages of dense lecture notes before an exam takes forever. A structured study table turns scattered notes into a clear revision sheet you can scan in minutes.",
    summaryPoints: [
      "Focus on one topic per table with 3 to 5 clear categories.",
      "Summarize concepts into concise phrases instead of copying full textbook paragraphs.",
      "Use tailored layouts for vocabulary, formulas, history chronologies, and revision trackers.",
      "Cover columns to quiz yourself and test active recall."
    ],
    relatedSlugs: ['tables-for-studying', 'how-to-make-readable-table', 'tables-vs-lists'],
  },
  {
    slug: 'create-schedule-with-table',
    title: 'How to Create a Simple Schedule With a Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to turn busy days, study routines, and work tasks into a clean schedule table. Practical templates, examples, and rules for realistic planning.',
    readingTime: '5 min read',
    seoTitle: 'How to Create a Simple Schedule With a Table | TABLABLE',
    seoDescription: 'Learn how to turn busy days, study routines, and work tasks into a clean schedule table. Practical templates, examples, and rules for realistic planning.',
    intro: "Your week contains classes, work shifts, workouts, appointments, and chores. A simple schedule table gives you an instant overview of your week without micromanaging every minute.",
    summaryPoints: [
      "Block time broadly (Morning, Afternoon, Evening) rather than micromanaging 15-minute slots.",
      "Keep activity names short and maintain consistent time formats across cells.",
      "Leave intentional buffer blocks for unexpected delays and rest.",
      "Use tables for weekly routines and printable plans, and digital calendars for exact alerts."
    ],
    relatedSlugs: ['budget-with-a-table', 'organize-project-with-table', 'how-to-make-readable-table'],
  },
  {
    slug: 'turn-list-of-data-into-table',
    title: 'How to Turn a List of Data Into a Table',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to turn raw text, comma-separated values, tabs, and copied spreadsheet data into a clean, properly structured table with practical troubleshooting tips.',
    readingTime: '5 min read',
    seoTitle: 'How to Turn a List of Data Into a Table | TABLABLE',
    seoDescription: 'Learn how to turn raw text, comma-separated values, tabs, and copied spreadsheet data into a clean, properly structured table. Practical steps and troubleshooting.',
    intro: "Raw text separated by commas or tabs already has structure — it just isn't visual yet. Here is how to recognize rows, columns, and delimiters, and turn unformatted lines into a readable table.",
    summaryPoints: [
      "Understand the 4 anatomy pieces: rows, columns, separators, and headers.",
      "Identify common separators: commas (CSV), tabs (spreadsheets), and semicolons.",
      "Fix squashed columns, shifted rows, and unquoted commas with ease.",
      "Follow a simple 5-step method to convert any raw list into a clean table."
    ],
    relatedSlugs: ['turn-messy-list-into-clean-table', 'make-table-from-excel-google-sheets', 'csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'how-to-make-useful-comparison-table',
    title: 'How to Make a Comparison Table That Actually Helps',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to design comparison tables that clarify choices instead of overwhelming readers with dozens of obscure specifications.',
    readingTime: '5 min read',
    seoTitle: 'How to Make a Comparison Table That Actually Helps | TABLABLE',
    seoDescription: 'Learn how to build comparison tables that clarify decisions instead of overwhelming readers. Practical methods, laptop examples, templates, and key rules.',
    intro: "Most comparison tables overwhelm readers with dozens of technical specifications nobody cares about. Here is how to build comparison tables that focus on genuine decision drivers.",
    summaryPoints: [
      "Avoid the specification dump trap by focusing on features that actually drive decisions.",
      "Keep units, currencies, and formats strictly uniform across all compared options.",
      "Limit comparisons to 3 to 4 choices to maintain clarity on mobile screens.",
      "Tailor columns to what the user prioritizes rather than forcing an artificial winner."
    ],
    relatedSlugs: ['compare-products-with-table', 'how-to-make-readable-table', 'tables-vs-lists'],
  },
  {
    slug: 'create-table-for-website',
    title: 'How to Create a Table for a Website',
    category: 'TABLE FORMATS',
    description: 'Learn how to create clean, responsive HTML tables for websites. Understand table tags, mobile responsiveness, and when HTML beats Markdown or CSV.',
    readingTime: '5 min read',
    seoTitle: 'How to Create a Table for a Website | TABLABLE',
    seoDescription: 'Learn how to build clean, responsive HTML tables for websites. Practical code examples, when to use tables, HTML vs Markdown vs CSV, and accessibility tips.',
    intro: "Presenting pricing tiers, schedules, or specifications on a webpage requires responsive HTML. Here is how web tables work and how to build them with clean code.",
    summaryPoints: [
      "Understand the core tags: <table>, <tr>, <th> for headings, and <td> for data.",
      "Use tables for structured data like pricing and schedules, never for general page layouts.",
      "Wrap web tables in scrollable containers (overflow-x: auto) for smooth mobile viewing.",
      "Compare HTML vs Markdown vs CSV to choose the right format for your project."
    ],
    relatedSlugs: ['when-to-use-html-tables', 'when-to-use-markdown-tables', 'csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'how-to-clean-up-a-table',
    title: 'How to Clean Up a Table Before Sharing It',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to clean up a messy table before sharing it. Fix inconsistent data, duplicate rows, confusing headers, spacing, formatting, and more.',
    readingTime: '5 min read',
    seoTitle: 'How to Clean Up a Table Before Sharing It | TABLABLE',
    seoDescription: 'Learn how to clean up a messy table before sharing it. Fix inconsistent data, duplicate rows, confusing headers, spacing, formatting, and more.',
    intro: 'You spent hours collecting data into a grid. But right before sending it, you realize it looks chaotic. Here is a practical checklist to clean up sloppy rows and make your table immediately trustworthy.',
    summaryPoints: [
      'Standardize capitalization across names, categories, and locations.',
      'Remove duplicate rows and discard unnecessary technical columns.',
      'Fill blank cells with clear placeholders like — or N/A so gaps aren’t ambiguous.',
      'Right-align all numbers and avoid distracting rainbow colors.'
    ],
    relatedSlugs: ['turn-messy-list-into-clean-table', 'how-to-make-readable-table', 'how-to-make-a-table-mobile-friendly'],
  },
  {
    slug: 'how-to-make-a-table-mobile-friendly',
    title: 'How to Make a Table Mobile-Friendly',
    category: 'TIPS & HOW-TO',
    description: 'Learn how to make tables easier to read on phones. Practical tips for shorter text, fewer columns, responsive layouts, wrapping, and wide tables.',
    readingTime: '5 min read',
    seoTitle: 'How to Make a Table Mobile-Friendly | TABLABLE',
    seoDescription: 'Learn how to make tables easier to read on phones. Practical tips for shorter text, fewer columns, responsive layouts, wrapping, and wide tables.',
    intro: 'A table looks great on a 27-inch laptop monitor, but on a phone half of it disappears. Here is why wide tables struggle on smartphones and how to keep them genuinely readable.',
    summaryPoints: [
      'Reduce columns down to 4 to 6 essentials to prevent horizontal squishing.',
      'Keep text concise and allow cells to wrap rather than clipping words.',
      'Wrap large data tables in smooth overflow-x containers for responsive swiping.',
      'Maintain legible font sizes (at least 13px–14px) and comfortable vertical padding.'
    ],
    relatedSlugs: ['how-to-clean-up-a-table', 'create-table-for-website', 'how-to-make-readable-table'],
  },
  {
    slug: 'simple-inventory-table',
    title: 'How to Create a Simple Inventory Table',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to create a simple inventory table for your home, business, workshop, office, or supplies. Includes useful columns and practical examples.',
    readingTime: '6 min read',
    seoTitle: 'How to Create a Simple Inventory Table | TABLABLE',
    seoDescription: 'Learn how to create a simple inventory table for your home, business, workshop, office, or supplies. Includes useful columns and practical examples.',
    intro: 'You don’t need expensive enterprise software to organize physical stock or household storage. A straightforward inventory table gives you total clarity in minutes.',
    summaryPoints: [
      'Focus on core columns: Item Name, Category, Quantity, and Location.',
      'Avoid tracking 15+ unnecessary fields that turn inventory into an abandoned chore.',
      'Update stock counts in real-time when items are consumed or sold.',
      'Keep item naming consistent so searching takes only seconds.'
    ],
    relatedSlugs: ['organize-project-with-table', 'budget-with-a-table', 'create-schedule-with-table'],
  },
  {
    slug: 'how-to-convert-csv-to-html',
    title: 'How to Convert CSV to HTML',
    category: 'TABLE FORMATS',
    description: 'Learn how to convert CSV data into an HTML table for a website. Includes examples, simple methods, formatting tips, and common CSV problems.',
    readingTime: '6 min read',
    seoTitle: 'How to Convert CSV to HTML | TABLABLE',
    seoDescription: 'Learn how to convert CSV data into an HTML table for a website. Includes examples, simple methods, formatting tips, and common CSV problems.',
    intro: 'You have a CSV file full of rows and columns, but you need an actual table on a website. Here is how to turn raw comma-separated records into clean, semantic HTML table tags without headaches.',
    summaryPoints: [
      'Understand the difference: CSV stores data while HTML renders visual grids.',
      'Map CSV rows to <tr> tags and values to <th> or <td> cells.',
      'Handle common edge cases like commas inside quotes, line breaks, and unescaped HTML entities.',
      'Use semantic <thead>, <tbody>, and responsive wrappers for clean presentation.'
    ],
    relatedSlugs: ['how-to-convert-csv-to-markdown', 'create-table-for-website', 'when-to-use-html-tables'],
  },
  {
    slug: 'how-to-convert-csv-to-markdown',
    title: 'How to Convert CSV to Markdown',
    category: 'TABLE FORMATS',
    description: 'Learn how to convert CSV or spreadsheet data into a Markdown table for GitHub, documentation, notes, and other Markdown-based content.',
    readingTime: '6 min read',
    seoTitle: 'How to Convert CSV to Markdown | TABLABLE',
    seoDescription: 'Learn how to convert CSV or spreadsheet data into a Markdown table for GitHub, documentation, notes, and other Markdown-based content.',
    intro: 'You copied a CSV or spreadsheet full of data, but what you actually need is a clean Markdown table. Here is how to convert comma-separated values into GitHub-ready pipes and dashes without spending twenty minutes aligning hyphens by hand.',
    summaryPoints: [
      'Convert CSV commas into Markdown pipes (|) and add the required hyphen delimiter line.',
      'Escape pipe characters inside cells (\\|) to avoid corrupting column boundaries.',
      'Control column alignments using colons (:--- left, :---: center, ---: right).',
      'Embed directly into GitHub READMEs, Obsidian notes, and documentation portals.'
    ],
    relatedSlugs: ['how-to-convert-csv-to-html', 'when-to-use-markdown-tables', 'csv-vs-excel-vs-html-vs-markdown'],
  },
  {
    slug: 'how-to-make-a-table-in-google-docs',
    title: 'How to Make a Table in Google Docs',
    category: 'TABLES IN EVERYDAY LIFE',
    description: 'Learn how to insert, format, customize, and clean up tables in Google Docs. Includes simple steps, design tips, and common table mistakes.',
    readingTime: '6 min read',
    seoTitle: 'How to Make a Table in Google Docs | TABLABLE',
    seoDescription: 'Learn how to insert, format, customize, and clean up tables in Google Docs. Includes simple steps, design tips, and common table mistakes.',
    intro: 'Google Docs is great for writing, but paragraphs alone fail when presenting comparisons, meeting agendas, and project schedules. Here is how to insert, style, and polish Google Docs tables so they look professional rather than like a default homework assignment.',
    summaryPoints: [
      'Insert tables via Insert > Table and choose row and column dimensions.',
      'Lighten default black borders to soft gray (#D1D5DB) and add 0.1in cell padding.',
      'Add subtle background tints to headers and pin header rows across page breaks.',
      'Right-align numeric values and switch to landscape mode for tables with 6+ columns.'
    ],
    relatedSlugs: ['organize-project-with-table', 'how-to-clean-up-a-table', 'how-to-make-readable-table'],
  },
  {
    slug: 'how-to-convert-excel-to-html',
    title: 'How to Convert Excel to HTML',
    category: 'TABLE FORMATS',
    description: 'Learn how to convert Excel spreadsheet data into an HTML table for a website. Includes examples, conversion methods, formatting tips, and common problems.',
    readingTime: '7 min read',
    seoTitle: 'How to Convert Excel to HTML | TABLABLE',
    seoDescription: 'Learn how to convert Excel spreadsheet data into an HTML table for a website. Includes examples, conversion methods, formatting tips, and common problems.',
    intro: 'You have a perfectly good table in Excel, but now you need that information on a website. Here is how to move your spreadsheet data into clean, accessible HTML without bloated tags or broken layouts.',
    summaryPoints: [
      'Understand the role shift: Excel is built for calculating and analyzing data; HTML is built for structured web display.',
      'Simple HTML tables are cleaner, lighter, and easier to maintain than trying to duplicate an entire Excel sheet design.',
      'Formulas convert to static values; merged cells and heavy desktop styles should be cleaned before conversion.',
      'Follow the 6-step workflow: Excel → clean data → convert → check → copy HTML → paste into website.'
    ],
    relatedSlugs: ['how-to-convert-csv-to-html', 'create-table-for-website', 'when-to-use-html-tables'],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find(article => article.slug === slug);
}

export function getRelatedGuides(currentSlug: string): GuideArticle[] {
  const current = getGuideBySlug(currentSlug);
  if (!current) return [];

  // Try finding explicit related articles first
  const explicit = current.relatedSlugs
    .map(slug => getGuideBySlug(slug))
    .filter((a): a is GuideArticle => a !== undefined);

  if (explicit.length >= 2) {
    return explicit.slice(0, 3);
  }

  // Fallback to same category articles
  const sameCategory = GUIDE_ARTICLES.filter(
    a => a.category === current.category && a.slug !== currentSlug
  );

  const combined = [...explicit, ...sameCategory];
  const unique = Array.from(new Set(combined));
  return unique.slice(0, 3);
}
