import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Catfish!",
  description:
    "We are excited to now be offering Catfish Adventures. Targeting the bigger Blues, Flatheads and Channel Cats on Lake Allatoona.",
};

export default function CatfishPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Catfish!"
          image="/ingested/heronoutdooradventures/content-020.webp"
          imageAlt="Angler holding a large blue catfish at night on Lake Allatoona"
        />
        <GuideSection
          heading="Catfish!"
          paragraphs={[
            `We are excited to now be offering Catfish Adventures in 2020. Start your trip out with an exciting boat ride in a new Storm Cat powered by a 250 Yamaha SHO, get the big bite from an Allatoona monster and end up with bragging rights for life. We will be targeting the bigger Blues, Flatheads and Channel Cats that elude most fisherman here on Allatoona, but we know exactly what to do to get that bite. We do believe that any trophy cats are best released to help sustain this fishery, but you can catch some eaters, too! 4-6 hour Day and Night trips available. Call for details today.`,
          ]}
        />
        <GuideCTA title="Ready to land an Allatoona monster?" label="Book Your Adventure" />
      </main>
      <Footer />
    </>
  );
}
