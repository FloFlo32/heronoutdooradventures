import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";

const telHref = `tel:+1${brand.contact.phone}`;

export function Hero() {
  return (
    <section className="container-px mx-auto max-w-7xl pt-8">
      <div className="relative h-[82vh] max-h-[760px] min-h-[560px] overflow-hidden rounded-3xl">
        <Slideshow
          images={[
            "/ingested/heronoutdooradventures/content-001.webp",
            "/ingested/heronoutdooradventures/content-015.webp",
            "/ingested/heronoutdooradventures/content-005.webp",
            "/ingested/heronoutdooradventures/content-024.webp",
          ]}
          alt="Anglers holding striped bass caught on Lake Allatoona"
          className="absolute inset-0 h-full w-full"
        />

        <Reveal className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-card/95 px-6 py-7 shadow-2xl backdrop-blur-md sm:px-10 sm:py-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Star className="size-3.5 fill-primary text-primary" />
              40+ years guiding Lake Allatoona
            </span>

            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
              Your Premier Lake Allatoona{" "}
              <span className="text-primary">Fishing Guide</span>
            </h1>

            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              {brand.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={telHref}>
                  <Phone className="size-4" /> Book Your Adventure
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/adventures">See trips &amp; pricing</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
