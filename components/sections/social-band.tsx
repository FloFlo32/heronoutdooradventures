import { brand } from "@/brand.config";
import { AutoSlider } from "@/components/magic/auto-slider";
import { XIcon } from "@/components/icons";
import { Reveal } from "@/components/magic/reveal";

const photos = [
  { src: "/ingested/heronoutdooradventures/content-005.webp", alt: "Angler holding a striped bass on Lake Allatoona at sunrise" },
  { src: "/ingested/heronoutdooradventures/content-006.webp", alt: "Two anglers with a striped bass catch on the boat" },
  { src: "/ingested/heronoutdooradventures/content-009.webp", alt: "Angler smiling with a striped bass catch at sunset" },
  { src: "/ingested/heronoutdooradventures/content-004.webp", alt: "Two anglers holding a striped bass on Lake Allatoona" },
  { src: "/ingested/heronoutdooradventures/content-017.webp", alt: "Angler with a striped bass catch on a cloudy morning" },
];

export function SocialBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Social Media
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Life on the water
            </h2>
          </div>
          <a
            href={`https://x.com/${brand.social.x}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <XIcon className="size-4" />
            Follow @{brand.social.x}
          </a>
        </Reveal>

        <div className="mt-12">
          <AutoSlider itemClassName="w-[75%] sm:w-[42%] lg:w-[23%]">
            {photos.map((p) => (
              <div key={p.src} className="overflow-hidden rounded-2xl border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  );
}
