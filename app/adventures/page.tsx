import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { GuideCTA } from "@/components/sections/guide-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Book Your Adventure | Trips & Pricing",
  description:
    "Book your guided fishing trip for Striped Bass (Stripers), Hybrids, Spotted Bass, Crappie, Bream, Catfish or any other desired species on Lake Allatoona near Atlanta Georgia with Heron Outdoor Adventures.",
};

const waters = ["Lake Allatoona", "Carters Lake", "Lake Lanier", "Etowah River", "Coosa River"];

const packages = [
  {
    title: "4 Hour Fishing Trip",
    description: 'Please call or text 404-919-4918, or use the home page "Book Now" to reserve your spot.',
    duration: "4 hr",
    price: "$400",
    image: "/ingested/heronoutdooradventures/content-014.webp",
    imageAlt: "Angler holding a striped bass on Lake Allatoona",
  },
  {
    title: "6 Hour Guided Fishing Trip",
    description: 'Please call or text 404-919-4918, or use the home page "Book Now" to reserve your spot.',
    duration: "6 hr",
    price: "$600",
    image: "/ingested/heronoutdooradventures/content-015.webp",
    imageAlt: "Young angler holding a striped bass on Lake Allatoona",
    featured: true,
  },
  {
    title: "Nature Adventure / Sunset Cruise",
    description: "Relax and enjoy the sights and sounds of nature.",
    duration: "2 hr",
    price: "$150",
    image: "/ingested/heronoutdooradventures/content-009.webp",
    imageAlt: "Angler smiling with a striped bass catch on Lake Allatoona at sunset",
  },
  {
    title: "Lineside Experience Clinic",
    description: "2-3 day excursions scheduled to maximize your adventure and learning.",
    duration: "12 hr",
    price: "From $1000",
    image: "/ingested/heronoutdooradventures/content-006.webp",
    imageAlt: "Two anglers holding a striped bass on Lake Allatoona",
  },
];

export default function AdventuresPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Book Your Adventure"
          title="Book Your Adventure"
          description="Striper, bass, catfish, crappie, adventure: pick your trip and Pro Guide Joseph handles the rest."
          image="/ingested/heronoutdooradventures/content-014.webp"
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
            {packages.map((pkg) => (
              <RevealItem key={pkg.title}>
                <ServiceCard {...pkg} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <GuideCTA title="Not sure which trip is right for you?" label="Call to talk it through" />
      </main>
      <Footer />
    </>
  );
}
