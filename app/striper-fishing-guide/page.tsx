import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Striper Fishing Guide | Acworth GA",
  description:
    "Whether you have years of experience fishing, or are brand new to the sport, a fishing guide service can be a valuable asset to your adventure. For newcomers to the sport, we offer educational classes.",
};

export default function StriperFishingGuidePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Striper Fishing Guide"
          description="Whether you have years of experience fishing, or are brand new to the sport, a fishing guide service can be a valuable asset to your adventure. For newcomers to the sport, we offer educational classes."
          images={[
            "/ingested/heronoutdooradventures/content-009.webp",
            "/ingested/heronoutdooradventures/content-006.webp",
            "/ingested/heronoutdooradventures/content-017.webp",
          ]}
          imageAlt="Angler holding a striped bass caught on Lake Allatoona"
          cta="Catch Some Striper"
        />
        <GuideSection
          heading="Offering Comprehensive Fishing Guide Service"
          paragraphs={[
            `We are pleased to explain the difference between lures and bait, and the tips and techniques used to find the best schools of fish. For experienced fishers, we are happy to chase after schools of fish to make sure your fishing adventure is successful. We also offer a unique opportunity for experienced fly-fishers to tie into Hybrids and Stripers in several seasons throughout the year. Because of our location, based out of Acworth GA, the team at Heron Outdoor Adventures specializes in guided tours on Lake Allatoona. Just thirty minutes outside the city, we are happy to be the fishing guide service of business men and women alike. Join us to be with an experienced striper fishing guide. This type of fish is commonly referred to as a striper, but in actuality it is a striped bass. Although this fish is prevalent from south of the Carolinas clear up to Nova Scotia, catching a striper can be a challenge. Typically, stripers are reserved for experienced anglers. Using a striper fishing guide can help increase your chances of nailing a big catch. The professionals at Heron Outdoor Adventures know the best bait and fishing techniques to use in order to catch a striper. We offer catch and release practices on our excursions.`,
          ]}
          gallery={[
            { src: "/ingested/heronoutdooradventures/content-006.webp", alt: "Angler and friend holding a striped bass at sunrise" },
            { src: "/ingested/heronoutdooradventures/content-017.webp", alt: "Angler with a striped bass catch on a cloudy morning" },
            { src: "/ingested/heronoutdooradventures/content-018.webp", alt: "Angler holding a striped bass on Lake Allatoona" },
          ]}
        />
        <GuideCTA title="Ready to catch some striper?" label="Catch Some Striper" />
      </main>
      <Footer />
    </>
  );
}
