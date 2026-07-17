import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { XIcon } from "@/components/icons";
import { primaryLinks, adventureLinks, guideLinks, secondaryLinks } from "@/lib/nav";

const telHref = `tel:+1${brand.contact.phone}`;
const telLabel = "404-919-4918";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={`${brand.name} logo`}
              width={200}
              height={140}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline}. With over 40 years of experience, Pro Guide Joseph
            knows it&apos;s not just about setting the hook, but experiencing
            everything the waters offer.
          </p>
          <div className="mt-5 flex flex-col gap-2.5 text-sm">
            <a href={telHref} className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary">
              <Phone className="size-4 text-primary" /> {telLabel}
            </a>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {brand.contact.address}
            </p>
          </div>
          <div className="mt-5 flex gap-2">
            <a
              href={`https://x.com/${brand.social.x}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <XIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2.5">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            {secondaryLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Adventures</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/adventures" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                All Adventures
              </Link>
            </li>
            {adventureLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Fishing Guides</h4>
          <ul className="mt-4 space-y-2.5">
            {guideLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}, Lake Allatoona, Georgia.
        </p>
      </div>
    </footer>
  );
}
