import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { GuideCTA } from "@/components/sections/guide-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { listServices, getServiceFacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Adventures | Trips & Pricing",
  description:
    "Book your guided fishing trip for Striped Bass (Stripers), Hybrids, Spotted Bass, Crappie, Bream, Catfish or any other desired species on Lake Allatoona near Atlanta Georgia with Heron Outdoor Adventures.",
};

const waters = ["Lake Allatoona", "Carters Lake", "Lake Lanier", "Etowah River", "Coosa River"];

const cardImages: Record<string, { image: string; imageAlt: string; description: string; featured?: boolean }> = {
  "4-hour-fishing-trip": {
    image: "/ingested/heronoutdooradventures/content-014.webp",
    imageAlt: "Angler holding a striped bass on Lake Allatoona",
    description: 'Please call or text 404-919-4918, or use the home page "Book Now" to reserve your spot.',
  },
  "6-hour-guided-fishing-trip": {
    image: "/ingested/heronoutdooradventures/content-015.webp",
    imageAlt: "Young angler holding a striped bass on Lake Allatoona",
    description: "Maximize your day on the water with a guided trip for up to 2 people.",
    featured: true,
  },
  "nature-adventure-sunset-cruise": {
    image: "/ingested/heronoutdooradventures/content-009.webp",
    imageAlt: "Angler smiling with a striped bass catch on Lake Allatoona at sunset",
    description: "Relax and enjoy the sights and sounds of nature.",
  },
  "lineside-experience-clinic": {
    image: "/ingested/heronoutdooradventures/content-006.webp",
    imageAlt: "Two anglers holding a striped bass on Lake Allatoona",
    description: "2-3 day excursions scheduled to maximize your adventure and learning.",
  },
};

export default function AdventuresPage() {
  const services = listServices();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Adventures"
          title="Book Your Adventure"
          description="Striper, bass, catfish, crappie, adventure: pick your trip and Pro Guide Joseph handles the rest."
          images={[
            "/ingested/heronoutdooradventures/content-014.webp",
            "/ingested/heronoutdooradventures/content-015.webp",
            "/ingested/heronoutdooradventures/content-009.webp",
          ]}
          imageAlt="Anglers holding a striped bass on Lake Allatoona"
        />

        <section className="container-px mx-auto max-w-7xl pt-14">
          <Reveal className="flex flex-wrap items-center justify-center gap-2">
            {waters.map((w) => (
              <Badge key={w} variant="outline" className="px-4 py-1.5 text-sm">
                {w}
              </Badge>
            ))}
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-7xl py-14 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const facts = getServiceFacts(service);
              const extra = cardImages[service.slug];
              if (!extra) return null;
              return (
                <RevealItem key={service.slug}>
                  <ServiceCard
                    title={service.title.replace(" | Heron Outdoors", "")}
                    description={extra.description}
                    duration={facts.duration}
                    price={facts.price}
                    image={extra.image}
                    imageAlt={extra.imageAlt}
                    featured={extra.featured}
                    href={`/adventures/${service.slug}`}
                  />
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>

        <GuideCTA title="Not sure which trip is right for you?" label="Call to talk it through" />
      </main>
      <Footer />
    </>
  );
}
