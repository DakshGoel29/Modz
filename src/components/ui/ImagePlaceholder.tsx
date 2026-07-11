import { useState, ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Car } from 'lucide-react';

type ImagePlaceholderProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackText?: string;
  fallbackIcon?: boolean;
}

export function ImagePlaceholder({ 
  src, 
  alt, 
  className,
  fallbackText,
  fallbackIcon = true,
  loading = "lazy",
  ...props 
}: ImagePlaceholderProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    if (fallbackText || !fallbackIcon) {
      const text = fallbackText || alt || 'Image';
      const fallbackUrl = `https://placehold.co/800x600/1E293B/D4AF37?text=${encodeURIComponent(text)}&font=Montserrat`;
      return (
        <img 
          src={fallbackUrl}
          alt={alt || "Placeholder"}
          className={cn("object-cover", className)}
          loading={loading}
          {...props}
        />
      );
    }
    
    return (
      <div className={cn("flex flex-col gap-2 items-center justify-center bg-[#F8FAFC] border border-gray-100 text-gray-400", className)}>
        <Car className="w-1/4 h-1/4 max-w-[48px] max-h-[48px] opacity-20" />
        <span className="text-xs tracking-widest uppercase opacity-40 font-bold">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || "Image"}
      onError={() => {
        console.warn(`Image failed to load: ${src}`);
        setError(true);
      }}
      className={cn("object-cover", className)}
      loading={loading}
      {...props}
    />
  );
}
