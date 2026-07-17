import { Reveal } from "@/components/magic/reveal";

export function Welcome() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/heronoutdooradventures/content-001.webp"
              alt="A group of anglers holding a striped bass caught on Lake Allatoona"
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Welcome Aboard!
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
            The best adventures start here
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            With over 40 years of experience, Pro Guide Joseph knows that it&apos;s
            not just about setting the hook, but experiencing everything that
            the waters offer. We strive to create an adventure that has the
            potential to put you on a catch of a lifetime. Check out all that
            Heron Outdoor Adventures has to offer!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
