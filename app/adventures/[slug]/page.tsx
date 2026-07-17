import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideCTA } from "@/components/sections/guide-cta";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { getService, getServiceFacts, getServiceSections, listServices } from "@/lib/content";

const telHref = `tel:+1${brand.contact.phone}`;

const heroImages: Record<string, string[]> = {
  "4-hour-fishing-trip": [
    "/ingested/heronoutdooradventures/content-014.webp",
    "/ingested/heronoutdooradventures/content-009.webp",
  ],
  "6-hour-guided-fishing-trip": [
    "/ingested/heronoutdooradventures/content-015.webp",
    "/ingested/heronoutdooradventures/content-009.webp",
  ],
  "nature-adventure-sunset-cruise": [
    "/ingested/heronoutdooradventures/content-009.webp",
  ],
  "lineside-experience-clinic": [
    "/ingested/heronoutdooradventures/content-006.webp",
    "/ingested/heronoutdooradventures/content-017.webp",
  ],
};

export function generateStaticParams() {
  return listServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = service.title.replace(" | Heron Outdoors", "");
  return { title, description: `${title} on Lake Allatoona with Heron Outdoor Adventures.` };
}

export default async function AdventureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let service;
  try {
    service = getService(slug);
  } catch {
    notFound();
  }
  const facts = getServiceFacts(service);
  const sections = getServiceSections(service);
  const title = service.title.replace(" | Heron Outdoors", "");
  const images = heroImages[slug] ?? ["/ingested/heronoutdooradventures/content-009.webp"];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Adventures"
          title={title}
          description={sections[0]?.paragraphs[0]}
          images={images}
          imageAlt={title}
          cta="Book This Trip"
        />

        <section className="container-px mx-auto max-w-4xl py-10">
          <Reveal className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="accent" className="px-4 py-2 text-sm">
              <span className="text-lg font-bold text-primary">{facts.price}</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Clock className="size-4" /> {facts.duration}
            </Badge>
            {facts.location && (
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <MapPin className="size-4" /> {facts.location}
              </Badge>
            )}
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-16 sm:pb-20">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
                <h2 className="text-2xl font-bold">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                  {s.heading === "Contact Details" ? (
                    <div className="flex flex-col gap-3">
                      <a href={telHref} className="flex items-center gap-2 font-medium text-foreground hover:text-primary">
                        <Phone className="size-4 text-primary" /> 404-919-4918
                      </a>
                      <a href={`mailto:${brand.social.email}`} className="flex items-center gap-2 font-medium text-foreground hover:text-primary">
                        <Mail className="size-4 text-primary" /> {brand.social.email}
                      </a>
                      <p className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary" /> {s.paragraphs[2] ?? "Allatoona Lake, Georgia, USA"}
                      </p>
                    </div>
                  ) : (
                    s.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <GuideCTA title={`Ready to book the ${title}?`} label="Book This Trip" />
      </main>
      <Footer />
    </>
  );
}
