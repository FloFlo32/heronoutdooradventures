import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";

const telHref = `tel:+1${brand.contact.phone}`;

/**
 * Shared inner-page hero: an auto-advancing photo slideshow fills the whole
 * section as the background; the title and CTA float on top in a solid,
 * fully opaque card (never a transparent scrim, so contrast always holds).
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
      <div className="relative h-[70vh] max-h-[640px] min-h-[480px] overflow-hidden rounded-3xl">
        <Slideshow images={images} alt={imageAlt} className="absolute inset-0 h-full w-full" />

        <Reveal className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-card/95 px-6 py-7 shadow-2xl backdrop-blur-md sm:px-9 sm:py-9">
            <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight className="size-3" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-[1.05] sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{description}</p>
            )}
            <Button asChild size="lg" className="mt-5">
              <a href={telHref}>
                <Phone className="size-4" /> {cta}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
