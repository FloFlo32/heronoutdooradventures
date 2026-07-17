import { Reveal } from "@/components/magic/reveal";
import { Gallery, type GalleryImage } from "@/components/magic/gallery";

export function GuideSection({
  heading,
  paragraphs,
  gallery,
  callout,
}: {
  heading: string;
  paragraphs: string[];
  gallery?: GalleryImage[];
  callout?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-4xl py-16 sm:py-20">
      <Reveal>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">{heading}</h2>
        <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      {callout && (
        <Reveal delay={0.06}>
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-pretty font-medium text-foreground">{callout}</p>
          </div>
        </Reveal>
      )}

      {gallery && gallery.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Gallery images={gallery} />
          </div>
        </Reveal>
      )}
    </section>
  );
}
