import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Kids Fishing Guide | Acworth GA",
  description:
    "For some people, simply being outdoors in nature is enough to relax. Not everyone loves to fish, and that is alright! We too are passionate about the environment and nature, and are pleased to offer outdoor nature tours.",
};

export default function KidsFishingGuidePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Take Your Kid Fishing!"
          description="For some people, simply being outdoors in nature is enough to relax. Not everyone loves to fish, and that is alright! We too are passionate about the environment and nature, and are pleased to offer outdoor nature tours."
          image="/ingested/heronoutdooradventures/content-021.webp"
          imageAlt="A young girl and her father holding a striped bass on Lake Allatoona"
          cta="Book a Trip"
        />
        <GuideSection
          heading="Take Your Kid Fishing!"
          paragraphs={[
            `A love of nature and fishing starts at an early age. Our team at Heron Outdoor Adventures, based out of Acworth, GA, is pleased to offer opportunities for a kids fishing guide. We want to instill our youth with a love and respect for nature at an early age. For young children, we teach the basics of fishing and help children learn techniques at an early age. We will help children identify different species of fish, and learn the appropriate lures and bait necessary to catch the fish. Our practice is a catch and release operation, so children will have a hands on experience with the fish they catch, before safely releasing them safely back into the water. We can help guide children of all ages, and understand that different ages have different fishing ability and learning ability. We have a large, 24 foot boat that has all the necessary safety equipment for children. If you are looking for a kids fishing guide, we are sure to create an educational and memorable experience for your child.`,
          ]}
          gallery={[
            { src: "/ingested/heronoutdooradventures/content-022.webp", alt: "A young boy holding a bass with his father on the boat" },
            { src: "/ingested/heronoutdooradventures/content-023.webp", alt: "A young boy holding a striped bass and a fishing rod" },
            { src: "/ingested/heronoutdooradventures/content-024.webp", alt: "A young boy smiling with a striped bass catch" },
          ]}
        />
        <GuideCTA title="Ready to take your kid fishing?" label="Book a Trip" />
      </main>
      <Footer />
    </>
  );
}
