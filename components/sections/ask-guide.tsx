import { Phone, Mail, MessageCircleQuestion } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const telHref = `tel:+1${brand.contact.phone}`;

export function AskGuide() {
  return (
    <section id="ask-the-guide" className="container-px mx-auto max-w-7xl pb-20 sm:pb-28">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border bg-primary/5 px-6 py-14 text-center sm:px-14">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <MessageCircleQuestion className="size-6" />
          </div>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Ask the Guide!
          </span>
          <h2 className="mx-auto mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
            Got a question about your next trip?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Call, text, or email Pro Guide Joseph directly, or open the chat in
            the corner for a quick answer any time of day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={telHref}>
                <Phone className="size-4" /> Call or text 404-919-4918
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${brand.social.email}`}>
                <Mail className="size-4" /> Email the guide
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
