import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const telHref = `tel:+1${brand.contact.phone}`;

/**
 * Shared inner-page header: a big photo banner up top, the title and CTA sit
 * BELOW it on a solid surface (never text-over-photo). Mirrors the source
 * site, which uses the same fixed banner photo behind every inner page.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta = "Book Your Adventure",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  cta?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-7xl pt-8">
      <div className="relative overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="h-[38vh] min-h-[280px] w-full object-cover sm:h-[46vh]"
        />
      </div>

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
