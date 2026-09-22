import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf8');

// Static routes
const staticRoutes = [
  {
    path: '/table-generator',
    title: 'Online Table Generator & Editor | TABLABLE',
    description: 'Design, edit, and format tables visually. Paste spreadsheet data, add formulas, align text, and export to Markdown, HTML, CSV, Plain Text, or PDF.',
  },
  {
    path: '/to-do-list',
    title: 'To-Do List Maker — Free Printable Checklist PDF | Tablable',
    description: 'Create a simple to-do list from your tasks and download a clean printable PDF checklist. Free, simple, and no sign-up required.',
  },
  {
    path: '/guides',
    title: 'Table Guides & Tutorials | TABLABLE',
    description: 'Practical guides and tutorials on formatting tables, converting data between CSV, HTML, and Markdown, and creating clean spreadsheets.',
  },
  {
    path: '/about',
    title: 'About TABLABLE — Simple Online Table Tools',
    description: 'Learn about TABLABLE, a simple free online tool for creating, editing, formatting and exporting tables.',
  },
  {
    path: '/contact',
    title: 'Contact TABLABLE — Questions & Feedback',
    description: 'Get in touch with the TABLABLE team. Send us questions, feedback, or feature suggestions for our online table generator.',
  },
  {
    path: '/privacy-policy',
    title: 'TABLABLE Privacy Policy',
    description: 'Read the TABLABLE Privacy Policy and learn how the website handles information and table data.',
  },
  {
    path: '/terms',
    title: 'TABLABLE Terms of Use',
    description: 'Read the Terms of Use for TABLABLE, a free online table creation and formatting tool.',
  },
];

// Load guide articles via esbuild bundling
const guidesTsPath = path.join(rootDir, 'src/data/guides.ts');
const bundleResult = esbuild.buildSync({
  entryPoints: [guidesTsPath],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  write: false,
});

const bundledCode = bundleResult.outputFiles[0].text;
const mod = { exports: {} };
const runFn = new Function('module', 'exports', 'require', bundledCode);
runFn(mod, mod.exports, (name) => {
  if (name === 'lucide-react') return {};
  return {};
});

const guideArticles = mod.exports.GUIDE_ARTICLES || [];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateHtmlForRoute({ routePath, title, description }) {
  const canonicalUrl = `https://tablable.vercel.app${routePath}`;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  let html = template;

  // Replace <title>...</title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);

  // Replace <meta name="description" ... />
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${safeDesc}" />`
  );

  // Replace <link rel="canonical" ... />
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );

  return html;
}

const allRoutes = [
  ...staticRoutes.map((r) => ({
    routePath: r.path,
    title: r.title,
    description: r.description,
  })),
  ...guideArticles.map((a) => ({
    routePath: `/guides/${a.slug}`,
    title: a.seoTitle,
    description: a.seoDescription,
  })),
];

console.log(`Generating static HTML for ${allRoutes.length} routes...`);

for (const r of allRoutes) {
  const routeHtml = generateHtmlForRoute(r);
  const targetDir = path.join(distDir, r.routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf8');
}

// Also write dist/404.html
fs.writeFileSync(path.join(distDir, '404.html'), template, 'utf8');

console.log(`Successfully generated static HTML for ${allRoutes.length} routes + 404.html.`);
