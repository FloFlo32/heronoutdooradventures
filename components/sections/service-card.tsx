import { Clock, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";

const telHref = `tel:+1${brand.contact.phone}`;

export function ServiceCard({
  title,
  description,
  duration,
  price,
  image,
  imageAlt,
  ctaLabel = "Book Now",
  featured = false,
}: {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
        featured ? "border-primary/30 ring-1 ring-primary/20" : "border-border"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="shrink-0 text-2xl font-bold text-primary">{price}</span>
        </div>
        <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <Clock className="size-4" /> {duration}
        </span>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">{description}</p>
        <Button asChild className="mt-2 w-full">
          <a href={telHref}>
            <Phone className="size-4" /> {ctaLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
