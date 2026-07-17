import type { Metadata } from "next";
import { Gift, Phone, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const telHref = `tel:+1${brand.contact.phone}`;

export const metadata: Metadata = {
  title: "Gift Card",
  description: "Ticket to Adventure! Gift Cards for all occasions.",
};

export default function GiftCardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Gift Card"
          title="Ticket to Adventure! Gift Cards for all occasions"
          image="/ingested/heronoutdooradventures/content-030.webp"
          imageAlt="Angler holding a striped bass, a Heron Outdoor Adventures gift for any occasion"
          cta="Call to Purchase"
        />

        <section className="container-px mx-auto max-w-3xl py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-primary/20 bg-primary/5 px-8 py-12 text-center">
              <div className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Gift className="size-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Heron Outdoor Adventures</p>
                <p className="mt-2 text-5xl font-bold">$400</p>
                <p className="mt-2 text-muted-foreground">Good toward any guided fishing trip or adventure.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={telHref}>
                    <Phone className="size-4" /> Call to Purchase
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`mailto:${brand.social.email}?subject=Gift%20Card`}>
                    <Mail className="size-4" /> Email to Purchase
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
