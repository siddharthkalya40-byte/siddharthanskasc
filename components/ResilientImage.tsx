import { useState } from 'react';
import { Landmark } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sree Krishna Campus Archive',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#ECE7DD] to-[#DFD8CA] text-[#14326B] p-8 text-center ${className}`}
      >
        <Landmark className="w-10 h-10 mb-3 opacity-75" strokeWidth={1.5} />
        <p className="font-serif text-base font-medium text-[#1A1917]">{fallbackTitle}</p>
        <p className="text-xs text-[#5C5852] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
