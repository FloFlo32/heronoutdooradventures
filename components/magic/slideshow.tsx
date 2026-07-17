"use client";

import * as React from "react";
import { PhotoFrame } from "@/components/magic/photo-frame";
import { cn } from "@/lib/utils";

/**
 * Slideshow — auto-advancing photo background. Each photo is shown via
 * PhotoFrame (never cropped) with a soft cross-fade, plus dot controls.
 */
export function Slideshow({
  images,
  alt,
  className,
  interval = 4500,
  dots = true,
}: {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  dots?: boolean;
}) {
  const slides = images.length > 0 ? images : ["/ingested/heronoutdooradventures/content-009.webp"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {slides.map((src, i) => (
        <PhotoFrame
          key={src}
          src={src}
          alt={alt}
          priority={i === 0}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-700 ease-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {dots && slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
