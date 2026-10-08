import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_KEYWORDS = 
  "ambient light for car, baleno car accessories, brezza car accessories, Car projector light, wagon r car accessories, exterior car accessories, best car perfume, seat cover for car, Sun shades for car, Best dash cam for car in India, swift car accessories, car light accessories, EliteModz Gurugram";

const SITE_NAME = "EliteModz";
const BASE_URL = "https://elitemodz.vercel.app";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200";

export function useSEO({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schema
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr: 'name' | 'property', nameVal: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, nameVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 3. Open Graph Tags
    const currentUrl = `${BASE_URL}${canonicalPath || location.pathname}`;
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:image', ogImage);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = currentUrl;

    // 6. Dynamic JSON-LD Schema (if provided)
    const existingSchemaScript = document.getElementById('page-dynamic-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-dynamic-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up dynamic schema on unmount if needed
      const scriptToRemove = document.getElementById('page-dynamic-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogType, ogImage, schema, location.pathname]);
}
