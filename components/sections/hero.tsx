import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";
import { PhotoFrame } from "@/components/magic/photo-frame";

const telHref = `tel:+1${brand.contact.phone}`;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Star className="size-3.5 fill-primary text-primary" />
              40+ years guiding Lake Allatoona
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
              Your Premier Lake Allatoona{" "}
              <span className="text-primary">Fishing Guide</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
              {brand.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={telHref}>
                  <Phone className="size-4" /> Book Your Adventure
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/adventures">See trips &amp; pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <Slideshow
              images={[
                "/ingested/heronoutdooradventures/content-001.webp",
                "/ingested/heronoutdooradventures/content-015.webp",
                "/ingested/heronoutdooradventures/content-005.webp",
              ]}
              alt="Anglers holding striped bass caught on Lake Allatoona"
              className="aspect-[4/5] rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]"
            />
            <div className="absolute -bottom-8 -left-6 hidden w-44 rounded-2xl border-4 border-background shadow-xl sm:block">
              <PhotoFrame
                src="/ingested/heronoutdooradventures/content-024.webp"
                alt="A young angler smiling with a striped bass catch"
                className="aspect-square rounded-xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
