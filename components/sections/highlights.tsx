import Link from "next/link";
import { GraduationCap, Sailboat, UserRound, Newspaper, ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

const items = [
  {
    icon: GraduationCap,
    eyebrow: "Instructional",
    title: "Learn from the guide service",
    description:
      "Sharing my knowledge to future guides, anglers and teaching my experiences to help conservation.",
    href: "/instructional-fishing-classes",
  },
  {
    icon: Sailboat,
    eyebrow: "Charters",
    title: "Book a guided trip",
    description:
      "Experience an adventure like never before, set the hook on some of the best fisheries in the US!",
    href: "/adventures",
  },
  {
    icon: UserRound,
    eyebrow: "Meet Your Guide",
    title: "40+ years on the water",
    description:
      "The best thing about my job is being able to see the joy and happiness in my clients. That same smile I had as a kid!",
    href: "/about-us",
  },
  {
    icon: Newspaper,
    eyebrow: "The Heron Report",
    title: "Live fishing reports",
    description:
      "Get the latest fishing reports on the waters I fish 180 days out of the year!",
    href: "/blog",
  },
];

export function Highlights() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <RevealItem key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <item.icon className="size-5" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.eyebrow}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Read more
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
