import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Crappie Fishing Guide | Acworth GA",
  description:
    "Navigating the waterways of Lake Allatoona can be a challenge. Finding the best places for fish native to this area can be hard, unless you know where to look. One of the fish that is prevalent in Lake Allatoona is the crappie.",
};

export default function CrappieFishingGuidePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Crappie Fishing Guide"
          description="Navigating the waterways of Lake Allatoona can be a challenge. Finding the best places for fish native to this area can be hard, unless you know where to look. One of the fish that is prevalent in Lake Allatoona is the crappie."
          images={[
            "/ingested/heronoutdooradventures/content-009.webp",
            "/ingested/heronoutdooradventures/content-019.webp",
          ]}
          imageAlt="Angler holding a striped bass caught on Lake Allatoona"
        />
        <GuideSection
          heading="THE Premier Crappie Fishing Guide"
          paragraphs={[
            `Navigating the waterways of Lake Allatoona can be a challenge. Finding the best places for fish native to this area can be hard, unless you know where to look. One of the fish that is prevalent in Lake Allatoona is the crappie. The crappie is a popular fish in North America that is small to medium size. The largest crappie on record is just over five pounds. This fish can be found in various waterways, but is commonly found in our lake. There are two main species of crappie including the white crappie and the black crappie. Hiring a crappie fishing guide is a great way to make sure your fishing adventure is successful. There are various lures and baits that are necessary to catch crappie, and a crappie fishing guide is able to help direct your fishing efforts. Whether you start early in the morning, or at dusk, your crappie fishing adventure can be successful with a skilled and knowledgeable guide. Getting out of the busy city can be tough, especially for hardworking professionals working in Atlanta. Many people often search for, "fishing trips near me" in order to coordinate a fishing adventure close to the office or home. A slice of heaven, Lake Allatoona offers the ease and convenience for people residing or working in the city.`,
          ]}
          gallery={[
            { src: "/ingested/heronoutdooradventures/content-019.webp", alt: "Four crappie caught on Lake Allatoona laid out on a measuring board" },
          ]}
        />
        <GuideCTA title="Ready to hunt for crappie?" label="Book Your Adventure" />
      </main>
      <Footer />
    </>
  );
}
