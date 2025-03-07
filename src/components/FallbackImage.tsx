
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
}

export default function FallbackImage({ src, alt, fallbackSrc, className }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <Image 
      src={imgSrc} 
      alt={alt}
      className={className}
      width={100}
      height={100}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
