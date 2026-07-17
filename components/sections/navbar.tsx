"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { primaryLinks, guideLinks, secondaryLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

const telHref = `tel:+1${brand.contact.phone}`;
const telLabel = "404-919-4918";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [guidesOpen, setGuidesOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setGuidesOpen(false);
  }, [pathname]);

  const isGuidePage = guideLinks.some((l) => l.href === pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${brand.name} home`}>
          <Image
            src="/logo.png"
            alt={`${brand.name} logo`}
            width={200}
            height={140}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                pathname === l.href && "bg-accent text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                (isGuidePage || guidesOpen) && "bg-accent text-foreground"
              )}
              aria-expanded={guidesOpen}
              aria-haspopup="true"
              onClick={() => setGuidesOpen((o) => !o)}
            >
              Fishing Guides
              <ChevronDown className={cn("size-4 transition-transform", guidesOpen && "rotate-180")} />
            </button>

            {guidesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-2">
                <div className="grid gap-1 rounded-2xl border border-border bg-card p-3 shadow-xl shadow-primary/10">
                  {guideLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                        pathname === l.href && "bg-accent text-foreground"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {secondaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                pathname === l.href && "bg-accent text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={telHref}>
              <Phone className="size-4" /> {telLabel}
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Fishing Guides
            </p>
            {guideLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            {secondaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <a href={telHref}>
                <Phone className="size-4" /> Call {telLabel}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
