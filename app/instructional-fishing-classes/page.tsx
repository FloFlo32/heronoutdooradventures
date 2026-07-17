import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Instructional Fishing Classes | Acworth GA",
  description:
    "If you are looking for the best fishing guide Atlanta GA has to offer, then look no further. The team at Heron Outdoor Adventures is experienced, passionate, and dedicated to fishing and exploring the outdoors.",
};

export default function InstructionalFishingClassesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Instructional Classes"
          description="If you are looking for the best fishing guide Atlanta GA has to offer, then look no further. The team at Heron Outdoor Adventures is experienced, passionate, and dedicated to fishing and exploring the outdoors."
          image="/ingested/heronoutdooradventures/content-009.webp"
          imageAlt="Angler holding a striped bass caught on Lake Allatoona"
          cta="Book Your Class"
        />
        <GuideSection
          heading="Learn from the Guide Service that has over 40 years experience!"
          paragraphs={[
            `If you have always wanted to learn how to fish, the team at Heron Outdoor Adventures is here for you! Based in Acworth, GA, our team has decades of experience. We are able to show you different techniques and instructions about which lures and bait to use. We are passionate about the outdoors and are happy to also explain the environment and the delicate balance between the species living in and around Lake Allatoona. Our instructional fishing classes are fun, engaging, and helpful to seasoned fishers too.`,
          ]}
          callout="Ask about our classes if you would like to refine your technique or learn more about the fish living in Georgia's waterways including Lake Allatoona, Carters Lake, The Coosa and Etowah Rivers."
          gallery={[
            { src: "/ingested/heronoutdooradventures/content-023.webp", alt: "A young boy learning to hold a striped bass and a fishing rod" },
            { src: "/ingested/heronoutdooradventures/content-024.webp", alt: "A young boy smiling with a striped bass catch" },
          ]}
        />
        <GuideCTA title="Have questions about our classes?" label="Book Your Class" />
      </main>
      <Footer />
    </>
  );
}
