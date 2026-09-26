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
    title: 'Free Table Generator — Create Tables Online | TABLABLE',
    description: 'Create tables online for free. Paste or enter your data, edit cells, merge cells, format tables, and export your finished table.',
  },
  {
    path: '/to-do-list',
    title: 'To-Do List Maker — Free Printable Checklist PDF | Tablable',
    description: 'Create a simple to-do list from your tasks and download a clean printable PDF checklist. Free, simple, and no sign-up required.',
  },
  {
    path: '/word-counter',
    title: 'Free Word Counter - Count Words & Characters | TABLABLE',
    description: 'Free online word counter. Count words, characters, sentences, paragraphs, and reading time instantly. Simple, fast, and free.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://tablable.vercel.app/#website',
          url: 'https://tablable.vercel.app/',
          name: 'TABLABLE',
          description: 'Create, edit, format and export tables online for free. Paste your data, build a clean table, and copy or download it in multiple formats.',
        },
        {
          '@type': 'WebApplication',
          '@id': 'https://tablable.vercel.app/#wordcounter',
          name: 'TABLABLE Free Word Counter',
          url: 'https://tablable.vercel.app/word-counter',
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          browserRequirements: 'Requires JavaScript. Requires HTML5.',
          description: 'Free online word counter. Count words, characters, sentences, paragraphs, and reading time instantly. Simple, fast, and free.',
        },
      ],
    },
  },
  {
    path: '/guides',
    title: 'TABLABLE Guides — Learn About Tables, Formats & Organization',
    description: 'Learn how to create better tables, choose the right table format, organize information, and use tables effectively with practical guides from TABLABLE.',
  },
  {
    path: '/about',
    title: 'About TABLABLE — Simple Online Table Tools',
    description: 'Learn about TABLABLE, a simple free online tool for creating, editing, formatting and exporting tables.',
  },
  {
    path: '/contact',
    title: 'Contact TABLABLE',
    description: 'Contact TABLABLE with questions, feedback, bug reports or suggestions about the free table generator.',
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

function generateHtmlForRoute({ routePath, title, description, jsonLd }) {
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

  if (routePath.startsWith('/guides/')) {
    html = html.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="article" />`
    );
  }

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

  if (jsonLd) {
    html = html.replace(
      /<script\s+type="application\/ld\+json"\s+id="seo-jsonld">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json" id="seo-jsonld">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>`
    );
  }

  return html;
}

const allRoutes = [
  ...staticRoutes.map((r) => ({
    routePath: r.path,
    title: r.title,
    description: r.description,
    jsonLd: r.jsonLd,
  })),
  ...guideArticles.map((a) => {
    const canonicalUrl = `https://tablable.vercel.app/guides/${a.slug}`;
    return {
      routePath: `/guides/${a.slug}`,
      title: a.seoTitle,
      description: a.seoDescription,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.seoTitle.replace(' | TABLABLE', '').trim(),
        description: a.seoDescription,
        url: canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        image: 'https://tablable.vercel.app/tablable-logo.png',
        publisher: {
          '@type': 'Organization',
          name: 'TABLABLE',
          url: 'https://tablable.vercel.app/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://tablable.vercel.app/tablable-logo.png',
          },
        },
      },
    };
  }),
];

console.log(`Generating static HTML for ${allRoutes.length} routes...`);

for (const r of allRoutes) {
  const routeHtml = generateHtmlForRoute(r);
  const targetDir = path.join(distDir, r.routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf8');
}

// Also write dist/404.html with noindex and 404 title
let notFoundHtml = template;
notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/s, '<title>404 — Table Not Found | TABLABLE</title>');
notFoundHtml = notFoundHtml.replace(
  /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
  '<meta name="description" content="The page you&#039;re looking for doesn&#039;t exist." />'
);
notFoundHtml = notFoundHtml.replace(
  /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
  '<meta name="robots" content="noindex, nofollow" />'
);
notFoundHtml = notFoundHtml.replace(
  /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
  ''
);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

console.log(`Successfully generated static HTML for ${allRoutes.length} routes + 404.html.`);
