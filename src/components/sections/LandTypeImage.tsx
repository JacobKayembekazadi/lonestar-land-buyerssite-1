"use client";

import Image from "next/image";

interface LandTypeImageProps {
  src: string;
  alt: string;
}

export default function LandTypeImage({ src, alt }: LandTypeImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 hover:scale-105"
      onError={(e) => {
        // Fallback to a default pattern if image fails to load
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
