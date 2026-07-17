import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideSection } from "@/components/sections/guide-section";
import { GuideCTA } from "@/components/sections/guide-cta";

export const metadata: Metadata = {
  title: "Fishing Guide Lake Allatoona | Acworth GA",
  description:
    "Lake Allatoona is beautiful to explore. Close to Atlanta, this lake is filled with various species of fish, birds, and wildlife inhabiting the waters and areas surrounding the lake.",
};

export default function FishingGuideLakeAllatoonaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Fishing Guides"
          title="Fishing Guide Lake Allatoona"
          description="Lake Allatoona is beautiful to explore. Close to Atlanta, this lake is filled with various species of fish, birds, and wildlife inhabiting the waters and areas surrounding the lake."
          image="/ingested/heronoutdooradventures/content-009.webp"
          imageAlt="Angler smiling with a striped bass catch on Lake Allatoona"
        />
        <GuideSection
          heading="From Fishing to Wildlife, Outdoor Excursions Are For All to Enjoy"
          paragraphs={[
            `Lake Allatoona is beautiful to explore. Close to Atlanta, this lake is filled with various species of fish, birds, and wildlife inhabiting the waters and areas surrounding the lake. Described as a piece of heaven, just outside the city, Lake Allatoona is easily accessible from Atlanta. For an experienced and most knowledgeable fishing guide Lake Allatoona has to offer, reach out to Heron Outdoor Adventures. With years of experience, our team is dedicated to providing a comprehensive and successful fishing trip. There is little you need to prepare for when accompanied by one of the finest fishing guides Lake Allatoona has to offer. For fishers over the age of 16, simply have your valid state of Georgia fishing license. Bring any personal gear you may want for your big adventure. This can include sunscreen, hat, sunglasses, and appropriate footwear for your fishing trip. We are happy to provide bottled water for your trip, but feel free to bring any additional beverages you may want. Our outdoor excursions are not limited to fishing trips. As nature enthusiasts ourselves, we understand that the nature surrounding the lake does not stop at fishing. We are pleased to offer outdoor excursions geared toward bird watching and nature watching. Visitors often have the opportunity to see osprey, blue heron, and even a bald eagle on an outdoor excursion. To prepare for your trip, bring any binoculars or special camera equipment necessary to catch a photo of a rare bird.`,
          ]}
          gallery={[
            { src: "/ingested/heronoutdooradventures/content-011.webp", alt: "Two anglers holding a striped bass on Lake Allatoona" },
            { src: "/ingested/heronoutdooradventures/content-018.webp", alt: "Angler holding a striped bass on a cloudy morning" },
          ]}
        />
        <GuideCTA title="Ready to explore Lake Allatoona?" label="Book Your Adventure" />
      </main>
      <Footer />
    </>
  );
}
