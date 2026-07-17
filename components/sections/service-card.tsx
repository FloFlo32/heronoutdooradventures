import Link from "next/link";
import { Clock, Phone, ArrowRight } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/magic/photo-frame";

const telHref = `tel:+1${brand.contact.phone}`;

export function ServiceCard({
  title,
  description,
  duration,
  price,
  image,
  imageAlt,
  href,
  ctaLabel = "Book Now",
  featured = false,
}: {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
        featured ? "border-primary/30 ring-1 ring-primary/20" : "border-border"
      }`}
    >
      <PhotoFrame
        src={image}
        alt={imageAlt}
        className="aspect-[4/3]"
        imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">
            {href ? (
              <Link href={href} className="transition-colors hover:text-primary">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <span className="shrink-0 text-2xl font-bold text-primary">{price}</span>
        </div>
        <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <Clock className="size-4" /> {duration}
        </span>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">{description}</p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Button asChild className="flex-1">
            <a href={telHref}>
              <Phone className="size-4" /> {ctaLabel}
            </a>
          </Button>
          {href && (
            <Button asChild variant="outline" className="flex-1">
              <Link href={href}>
                Details <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
