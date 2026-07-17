import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Slideshow } from "@/components/magic/slideshow";
import { Badge } from "@/components/ui/badge";

const telHref = `tel:+1${brand.contact.phone}`;

const badges = ["40+ Years Experience", "Lake Allatoona Specialist", "Catch & Release Friendly"];

export function Hero() {
  return (
    <section className="container-px mx-auto max-w-7xl pt-8">
      <div className="relative flex h-[85vh] max-h-[780px] min-h-[580px] items-center justify-center overflow-hidden rounded-3xl">
        <Slideshow
          images={[
            "/ingested/heronoutdooradventures/content-001.webp",
            "/ingested/heronoutdooradventures/content-015.webp",
            "/ingested/heronoutdooradventures/content-005.webp",
            "/ingested/heronoutdooradventures/content-024.webp",
          ]}
          alt="Anglers holding striped bass caught on Lake Allatoona"
          className="absolute inset-0 h-full w-full"
          dots={false}
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <Reveal className="relative z-10 flex flex-col items-center px-6 text-center sm:px-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {badges.map((b) => (
              <Badge
                key={b}
                variant="outline"
                className="border-white/30 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm"
              >
                <Star className="size-3 fill-white text-white" /> {b}
              </Badge>
            ))}
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            Your Premier Lake Allatoona{" "}
            <span className="text-primary">Fishing Guide</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-white/85 sm:text-lg">
            {brand.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={telHref}>
                <Phone className="size-4" /> Book Your Adventure
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/adventures">See trips &amp; pricing</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
