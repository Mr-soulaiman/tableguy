import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: string;
}

const BASE_URL = 'https://tableguy.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/tableguy-logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
}) => {
  const normalizedPath = canonicalPath.startsWith('/')
    ? canonicalPath === '/'
      ? ''
      : canonicalPath
    : canonicalPath
    ? `/${canonicalPath}`
    : '';

  const canonicalUrl = `${BASE_URL}${normalizedPath}${normalizedPath === '' ? '/' : ''}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // 3. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': type,
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

    // 5. Update Twitter Tags
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
  }, [title, description, canonicalUrl, type]);

  return null;
};
