export interface GuideCategory {
  id: string;
  name: string;
  description: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  category: 'TABLES' | 'TO-DO LISTS' | 'FORMATS' | 'TIPS & HOW-TO' | 'WORD COUNTER';
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
    id: 'tables',
    name: 'TABLES',
    description: 'Learn how to create tables that are clear, useful, and easy to understand.',
  },
  {
    id: 'to-do-lists',
    name: 'TO-DO LISTS',
    description: 'Practical guides on making checklists, task planning, and deciding between tables and lists.',
  },
  {
    id: 'word-counter',
    name: 'WORD COUNTER',
    description: 'Simple guides on counting words, understanding character limits, and managing essay lengths.',
  },
  {
    id: 'formats',
    name: 'FORMATS',
    description: 'Understand different table, list, and data export formats and when to use them.',
  },
  {
    id: 'tips-and-how-to',
    name: 'TIPS & HOW-TO',
    description: 'Simple techniques for creating, formatting, cleaning, and exporting tables and checklists.',
  },
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: 'csv-vs-excel-vs-html-vs-markdown',
    title: "CSV vs Excel vs HTML vs Markdown: What's the Difference?",
    category: 'FORMATS',
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
    category: 'FORMATS',
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
    relatedSlugs: ['csv-vs-excel-vs-html-vs-markdown', 'how-to-convert-csv-to-html', 'how-to-convert-csv-to-markdown'],
  },
  {
    slug: 'when-to-use-html-tables',
    title: 'When Should You Use HTML Tables?',
    category: 'FORMATS',
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
    relatedSlugs: ['csv-vs-excel-vs-html-vs-markdown', 'when-to-use-csv', 'how-to-convert-csv-to-html'],
  },
  {
    slug: 'when-to-use-markdown-tables',
    title: 'When Should You Use Markdown Tables?',
    category: 'FORMATS',
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
    slug: 'how-to-convert-csv-to-html',
    title: 'How to Convert CSV to HTML',
    category: 'FORMATS',
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
    relatedSlugs: ['how-to-convert-csv-to-markdown', 'when-to-use-csv', 'when-to-use-html-tables'],
  },
  {
    slug: 'how-to-convert-csv-to-markdown',
    title: 'How to Convert CSV to Markdown',
    category: 'FORMATS',
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
    slug: 'how-to-make-readable-table',
    title: 'How to Make a Table Easy to Read',
    category: 'TABLES',
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
    relatedSlugs: ['how-to-clean-up-a-table', 'how-to-make-a-table-mobile-friendly', 'how-to-make-useful-comparison-table'],
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
    relatedSlugs: ['how-to-make-readable-table', 'how-to-clean-up-a-table', 'how-to-make-a-table-mobile-friendly'],
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
    relatedSlugs: ['how-to-clean-up-a-table', 'when-to-use-html-tables', 'how-to-make-readable-table'],
  },
  {
    slug: 'how-to-make-a-to-do-list-that-actually-works',
    title: 'How to Make a To-Do List That Actually Works',
    category: 'TO-DO LISTS',
    description: 'Learn how to make a simple to-do list you can actually finish, with practical tips for choosing tasks, setting priorities, and keeping your list realistic.',
    readingTime: '5 min read',
    seoTitle: 'How to Make a To-Do List That Actually Works | TABLABLE',
    seoDescription: 'Learn how to make a simple to-do list you can actually finish, with practical tips for choosing tasks, setting priorities, and keeping your list realistic.',
    intro: 'Most to-do lists fail before lunchtime because they become overwhelming dumping grounds. A realistic list focuses on three core outcomes and clear physical actions.',
    summaryPoints: [
      'Limit daily core tasks to 3 items. Everything else is secondary.',
      'Replace vague goals with concrete physical actions you can picture.',
      'Attach times only to real appointments, not arbitrary tasks.',
      'Leave 40% buffer room in your day for the unexpected.'
    ],
    relatedSlugs: ['daily-to-do-list-how-to-plan-your-day', 'weekly-to-do-list-how-to-plan-your-week', 'printable-to-do-list-how-to-make-one-for-free'],
  },
  {
    slug: 'daily-to-do-list-how-to-plan-your-day',
    title: 'Daily To-Do List: How to Plan Your Day',
    category: 'TO-DO LISTS',
    description: 'Build a realistic daily to-do list with simple steps for choosing priorities, organizing your time, and avoiding an overloaded schedule.',
    readingTime: '5 min read',
    seoTitle: 'Daily To-Do List: How to Plan Your Day | TABLABLE',
    seoDescription: 'Build a realistic daily to-do list with simple steps for choosing priorities, organizing your time, and avoiding an overloaded schedule.',
    intro: 'Turn chaotic morning clutter into a calm, focused daily checklist. Learn how to anchor your day around 3 core tasks and batch administrative chores.',
    summaryPoints: [
      'Start with a quick brain dump to clear your mental cache.',
      'Pick 3 anchor tasks to protect your focus during peak hours.',
      'Cluster minor errands into a single 30-minute afternoon batch.',
      'Avoid scheduling every 15 minutes to keep your plan resilient.'
    ],
    relatedSlugs: ['how-to-make-a-to-do-list-that-actually-works', 'weekly-to-do-list-how-to-plan-your-week', 'printable-to-do-list-how-to-make-one-for-free'],
  },
  {
    slug: 'weekly-to-do-list-how-to-plan-your-week',
    title: 'Weekly To-Do List: How to Plan Your Week',
    category: 'TO-DO LISTS',
    description: 'Learn how to make a weekly to-do list that keeps important tasks visible without turning your week into an impossible schedule.',
    readingTime: '5 min read',
    seoTitle: 'Weekly To-Do List: How to Plan Your Week | TABLABLE',
    seoDescription: 'Learn how to make a weekly to-do list that keeps important tasks visible without turning your week into an impossible schedule.',
    intro: 'A weekly to-do list is a master menu of outcomes, not an impossible calendar grid. Learn how to tier weekly tasks and avoid the Monday trap.',
    summaryPoints: [
      'Separate your master task pool from fixed calendar commitments.',
      'Sort tasks into Must Happen, Should Happen, and If There is Time.',
      'Spread large multi-step projects across several days instead of overloading Monday.',
      'Close each week with an intentional 5-minute Friday review.'
    ],
    relatedSlugs: ['how-to-make-a-to-do-list-that-actually-works', 'daily-to-do-list-how-to-plan-your-day', 'printable-to-do-list-how-to-make-one-for-free'],
  },
  {
    slug: 'printable-to-do-list-how-to-make-one-for-free',
    title: 'Printable To-Do List: How to Make One for Free',
    category: 'TO-DO LISTS',
    description: 'Learn how to make a simple printable to-do list for free, organize your tasks clearly, and turn it into a clean PDF you can print or keep on your device.',
    readingTime: '5 min read',
    seoTitle: 'Printable To-Do List: How to Make One for Free | TABLABLE',
    seoDescription: 'Learn how to make a simple printable to-do list for free, organize your tasks clearly, and turn it into a clean PDF you can print or keep on your device.',
    intro: 'Keep a clear, physical checklist on your desk without digital pings or distractions. Learn how to format a clean printable to-do list for study, chores, or work.',
    summaryPoints: [
      'Physical paper lists eliminate phone notifications and tab hopping.',
      'Prioritize readability and writing space over decorative graphics.',
      'Assign times only to genuine appointments or hard deadlines.',
      'Download a clean A4 PDF ready for your desk in seconds.'
    ],
    relatedSlugs: ['to-do-list-vs-checklist', 'how-to-make-a-to-do-list-that-actually-works', 'daily-to-do-list-how-to-plan-your-day'],
  },
  {
    slug: 'to-do-list-vs-checklist',
    title: "To-Do List vs. Checklist: What's the Difference?",
    category: 'TO-DO LISTS',
    description: 'To-do lists and checklists look similar, but they are useful for different things. Learn the difference and when to use each one.',
    readingTime: '5 min read',
    seoTitle: "To-Do List vs. Checklist: What's the Difference? | TABLABLE",
    seoDescription: 'To-do lists and checklists look similar, but they are useful for different things. Learn the difference and when to use each one.',
    intro: 'Both formats use tick boxes, but they serve completely different purposes: deciding what needs doing versus verifying that nothing was missed.',
    summaryPoints: [
      'To-do lists guide intentional daily focus and change constantly.',
      'Checklists prevent missed steps during repeatable processes.',
      'Turn heavy to-do items into multi-step checklists to eliminate friction.',
      'Use both together for optimal daily clarity and quality control.'
    ],
    relatedSlugs: ['printable-to-do-list-how-to-make-one-for-free', 'daily-to-do-list-how-to-plan-your-day', 'how-to-make-a-to-do-list-that-actually-works'],
  },
  {
    slug: 'how-to-count-words-in-a-text',
    title: 'How to Count Words in a Text: A Simple Guide',
    category: 'WORD COUNTER',
    description: 'Learn how to count words in a text, understand word-count rules, and check your text instantly with a free online word counter.',
    readingTime: '5 min read',
    seoTitle: 'How to Count Words in a Text: A Simple Guide | TABLABLE',
    seoDescription: 'Learn how to count words in a text, understand word-count rules, and check your text instantly with a free online word counter.',
    intro: 'Whether you are finishing a school assignment, writing an application form with a strict limit, or editing an article, knowing your exact word count saves time and guesswork.',
    summaryPoints: [
      'A word is any continuous group of characters separated by spaces or line breaks.',
      'Multiple spaces and blank lines are ignored so they never inflate your count.',
      'Hyphenated words and contractions like "don\'t" or "well-known" usually count as one word.',
      'Paste or type into an online word counter to check words, characters, and sentences live.'
    ],
    relatedSlugs: ['word-count-vs-character-count', 'how-many-words-should-an-essay-be'],
  },
  {
    slug: 'word-count-vs-character-count',
    title: "Word Count vs. Character Count: What's the Difference?",
    category: 'WORD COUNTER',
    description: 'Learn the difference between word count and character count, including spaces, with simple examples and a free online word counter.',
    readingTime: '5 min read',
    seoTitle: "Word Count vs. Character Count: What's the Difference? | TABLABLE",
    seoDescription: 'Learn the difference between word count and character count, including spaces, with simple examples and a free online word counter.',
    intro: 'Some forms ask for a 500-word essay. Others stop you from typing after 280 characters. Here is how word count and character count work—and why spaces matter.',
    summaryPoints: [
      'Word count measures whole words separated by spaces; character count measures every letter, number, symbol, and space.',
      'Strict web forms and social media limits almost always count characters including spaces.',
      'Two sentences with the exact same word count can have very different character counts depending on word length.',
      'Use a live word counter to track words, total characters, and characters without spaces simultaneously.'
    ],
    relatedSlugs: ['how-to-count-words-in-a-text', 'how-many-words-should-an-essay-be'],
  },
  {
    slug: 'how-many-words-should-an-essay-be',
    title: 'How Many Words Should an Essay Be?',
    category: 'WORD COUNTER',
    description: "How long should an essay be? Learn how to work with word limits, stay on topic, and check your essay's word count for free.",
    readingTime: '5 min read',
    seoTitle: 'How Many Words Should an Essay Be? | TABLABLE',
    seoDescription: "How long should an essay be? Learn how to work with word limits, stay on topic, and check your essay's word count for free.",
    intro: 'There is no single word count that applies to every essay. Here is how to understand essay length ranges, hit your target without fluff, and edit cleanly.',
    summaryPoints: [
      'Always check your assignment prompt or syllabus first—your instructor\'s instructions override any general rule.',
      'Word limits indicate how much depth is expected, not just how many pages to fill.',
      'If your draft is too short, add concrete examples or address a counterargument instead of repeating yourself.',
      'Check your body text separately from your title page and bibliography using an online word counter.'
    ],
    relatedSlugs: ['how-to-count-words-in-a-text', 'word-count-vs-character-count'],
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
