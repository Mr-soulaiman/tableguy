import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = 'https://tableguy.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/tableguy-logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type,
  noindex = false,
  jsonLd,
}) => {
  let cleanPath = canonicalPath.trim();
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  if (cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const canonicalUrl = cleanPath ? `${BASE_URL}/${cleanPath}` : `${BASE_URL}/`;
  const isGuideArticle = cleanPath.startsWith('guides/') && cleanPath !== 'guides';
  const resolvedType = type || (isGuideArticle ? 'article' : 'website');

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Robots Meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // 4. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (noindex) {
      if (canonicalLink) {
        canonicalLink.remove();
      }
    } else {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // 5. Update Open Graph Tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': resolvedType,
      'og:image': DEFAULT_IMAGE,
      'og:site_name': 'TABLEGUY',
    };

    Object.entries(ogTags).forEach(([prop, content]) => {
      let meta = document.querySelector(`meta[property="${prop}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', prop);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // 6. Update Twitter Tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': DEFAULT_IMAGE,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // 7. Structured Data / JSON-LD
    let scriptTag = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
    if (noindex) {
      if (scriptTag) {
        scriptTag.remove();
      }
    } else {
      let schemaData: unknown = null;
      if (jsonLd) {
        schemaData = jsonLd;
      } else if (resolvedType === 'article') {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title.replace(' | TABLEGUY', '').trim(),
          description,
          url: canonicalUrl,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          image: DEFAULT_IMAGE,
          publisher: {
            '@type': 'Organization',
            name: 'TABLEGUY',
            url: `${BASE_URL}/`,
            logo: {
              '@type': 'ImageObject',
              url: DEFAULT_IMAGE,
            },
          },
        };
      } else if (cleanPath === '' || cleanPath === 'table-generator') {
        schemaData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${BASE_URL}/#website`,
              url: `${BASE_URL}/`,
              name: 'TABLEGUY',
              description: 'Create, edit, format and export tables online for free. Paste your data, build a clean table, and copy or download it in multiple formats.',
              publisher: {
                '@type': 'Organization',
                name: 'TABLEGUY',
                url: `${BASE_URL}/`,
                logo: {
                  '@type': 'ImageObject',
                  url: DEFAULT_IMAGE,
                },
              },
            },
            {
              '@type': 'WebApplication',
              '@id': `${BASE_URL}/#webapp`,
              name: 'TABLEGUY Table Generator',
              url: `${BASE_URL}/table-generator`,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'All',
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              description: 'Create tables online for free. Paste or enter your data, edit cells, merge cells, format tables, and export your finished table.',
            },
          ],
        };
      } else {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title.replace(' | TABLEGUY', '').trim(),
          description,
          url: canonicalUrl,
          publisher: {
            '@type': 'Organization',
            name: 'TABLEGUY',
            url: `${BASE_URL}/`,
          },
        };
      }

      if (schemaData) {
        if (!scriptTag) {
          scriptTag = document.createElement('script');
          scriptTag.id = 'seo-jsonld';
          scriptTag.type = 'application/ld+json';
          document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(schemaData);
      }
    }
  }, [title, description, canonicalUrl, resolvedType, noindex, jsonLd]);

  return null;
};
