import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { listBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | The Heron Report",
  description: "All things awesome in nature on Lake Allatoona near Atlanta, Georgia.",
};

export default function BlogPage() {
  const posts = listBlogPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="The Heron Report"
          title="Lake Allatoona Fishing Report"
          description="All things awesome in nature on Lake Allatoona near Atlanta, Georgia."
          image="/ingested/heronoutdooradventures/content-027.webp"
          imageAlt="Anglers on a boat with a striped bass catch on Lake Allatoona"
        />

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  {post.images[0] && (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.images[0]}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
                    {post.author && (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <User className="size-3.5" /> {post.author}
                      </span>
                    )}
                    <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Read the report
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
