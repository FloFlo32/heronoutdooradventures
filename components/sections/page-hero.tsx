import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";

const telHref = `tel:+1${brand.contact.phone}`;

/**
 * Shared inner-page hero: an auto-advancing photo slideshow fills the whole
 * section, with a uniform (non-gradient) dark wash for constant, reliable
 * contrast, and centered content on top — matching the reference hero
 * pattern. A flat wash reads evenly everywhere, unlike a fading scrim.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  images,
  imageAlt,
  cta = "Book Your Adventure",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  images: string[];
  imageAlt: string;
  cta?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-7xl pt-8">
      <div className="relative isolate h-[75vh] max-h-[680px] min-h-[520px] overflow-hidden rounded-3xl">
        <Slideshow
          images={images}
          alt={imageAlt}
          className="absolute -inset-px h-[calc(100%+2px)] w-[calc(100%+2px)]"
          dots={false}
        />
        <div className="absolute -inset-px bg-black/50" aria-hidden />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-12">
          <Reveal className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="size-3" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-pretty text-white/85 sm:text-lg">{description}</p>
            )}
            <Button asChild size="lg" className="mt-7">
              <a href={telHref}>
                <Phone className="size-4" /> {cta}
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
