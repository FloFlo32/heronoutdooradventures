import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";

const telHref = `tel:+1${brand.contact.phone}`;

/**
 * Shared inner-page hero: an auto-advancing photo slideshow up top (never
 * cropped — see PhotoFrame), the title and CTA sit BELOW it on a solid
 * surface (never text-over-photo).
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
      <Slideshow
        images={images}
        alt={imageAlt}
        className="aspect-[16/9] rounded-3xl sm:aspect-[21/9]"
      />

      <Reveal>
        <div className="mx-auto -mt-10 max-w-4xl rounded-2xl border border-border bg-card px-6 py-8 shadow-xl shadow-primary/5 sm:px-10 sm:py-10">
          <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">{description}</p>
          )}
          <Button asChild size="lg" className="mt-6">
            <a href={telHref}>
              <Phone className="size-4" /> {cta}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
