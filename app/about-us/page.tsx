import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideCTA } from "@/components/sections/guide-cta";
import { Reveal } from "@/components/magic/reveal";
import { Gallery } from "@/components/magic/gallery";

export const metadata: Metadata = {
  title: "About Us | Meet Your Guide",
  description: "About Heron Outdoor Adventures in Dallas, GA.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Meet Your Guide"
          images={[
            "/ingested/heronoutdooradventures/content-011.webp",
            "/ingested/heronoutdooradventures/content-009.webp",
          ]}
          imageAlt="Pro Guide Joseph holding a striped bass caught on Lake Allatoona"
          cta="Book a Charter"
        />

        <section className="container-px mx-auto max-w-4xl py-16 sm:py-20">
          <Reveal>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                My name is Joseph, and I would be honored to be your guide. I
                have been an avid fisherman for over 40 years. Our team also
                includes Striper Mike and Catfish Jake that harbor decades of
                additional experience.
              </p>
              <p>
                I started guiding people on fishing adventures and other
                outdoor excursions as early as age 15 on the Great Lakes and
                many Northeastern U.S. lakes and streams.
              </p>
              <p>
                I am thrilled to now have the opportunity to offer my skills
                and resources to carry out my dreams of fishing and serving my
                community. Here at Heron Outdoors, we pride ourselves on
                instructional fishing, teaching the balance of nature and
                conservation, relationship building and creating memories that
                last a lifetime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Gallery
                images={[
                  { src: "/ingested/heronoutdooradventures/content-018.webp", alt: "Pro Guide Joseph with a striped bass catch on a cloudy morning" },
                  { src: "/ingested/heronoutdooradventures/content-006.webp", alt: "Pro Guide Joseph and a client with a striped bass at sunrise" },
                ]}
              />
            </div>
          </Reveal>
        </section>

        <GuideCTA title="Ready to fish with Joseph?" label="Book a Charter" />
      </main>
      <Footer />
    </>
  );
}
