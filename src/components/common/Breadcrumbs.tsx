import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BASE_URL = 'https://elitemodz.vercel.app';

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  useEffect(() => {
    // Generate BreadcrumbList Schema.org JSON-LD
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': fullItems.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.label,
        'item': item.href ? `${BASE_URL}${item.href}` : undefined
      }))
    };

    const scriptId = 'breadcrumbs-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(breadcrumbSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className={`text-xs md:text-sm text-gray-400 py-3 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 md:gap-2">
              {index === 0 ? (
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors font-medium text-gray-500 hover:underline"
                >
                  <Home size={13} className="inline mb-0.5" />
                  <span>Home</span>
                </Link>
              ) : item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-[#D4AF37] transition-colors font-medium text-gray-500 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight size={13} className="text-gray-400 shrink-0" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
