import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useCanonical() {
  const location = useLocation();

  useEffect(() => {
    // Determine the base URL (using the netlify app domain as requested previously)
    const baseUrl = 'https://elitemodz.vercel.app';
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    // Find existing canonical tag
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    
    if (link) {
      // Update existing tag
      link.href = canonicalUrl;
    } else {
      // Create new tag
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
    
    // Clean up if needed (usually canonicals stay and just update)
  }, [location.pathname]);
}
