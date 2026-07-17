import { cn } from "@/lib/utils";

/**
 * PhotoFrame — shows a photo at its real proportions, never cropped.
 * A softly blurred, scaled-up copy of the same photo fills the frame behind
 * it (object-cover) so there's no empty letterboxing; the real photo sits on
 * top at object-contain, fully intact.
 */
export function PhotoFrame({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("relative z-10 h-full w-full object-contain", imgClassName)}
      />
    </div>
  );
}
