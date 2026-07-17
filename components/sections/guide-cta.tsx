import { Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const telHref = `tel:+1${brand.contact.phone}`;

export function GuideCTA({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <section className="container-px mx-auto max-w-7xl pb-20 sm:pb-28">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary/40 px-6 py-14 text-center sm:px-14">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <Button asChild size="lg">
            <a href={telHref}>
              <Phone className="size-4" /> {label}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
