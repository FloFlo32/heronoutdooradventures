import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { User } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GuideCTA } from "@/components/sections/guide-cta";
import { Reveal } from "@/components/magic/reveal";
import { getBlogPost, listBlogPosts, type ContentBlock } from "@/lib/content";

export function generateStaticParams() {
  return listBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.title };
}

/** Group consecutive <li> blocks into a single list; render h2/p as-is. */
function renderBlocks(blocks: ContentBlock[]) {
  const out: React.ReactNode[] = [];
  let liBuffer: string[] = [];

  const flushList = (key: string) => {
    if (liBuffer.length === 0) return;
    out.push(
      <ul key={key} className="list-disc space-y-2 pl-6">
        {liBuffer.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    );
    liBuffer = [];
  };

  blocks.forEach((block, i) => {
    if (block.tag === "li") {
      liBuffer.push(block.text);
      return;
    }
    flushList(`list-${i}`);
    if (block.tag === "h2") {
      out.push(
        <h2 key={i} className="mt-2 text-2xl font-bold">
          {block.text}
        </h2>
      );
    } else {
      out.push(<p key={i}>{block.text}</p>);
    }
  });
  flushList("list-end");

  return out;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="The Heron Report"
          title={post.title}
          image={post.images[0] ?? "/ingested/heronoutdooradventures/content-009.webp"}
          imageAlt={post.title}
        />

        <section className="container-px mx-auto max-w-3xl py-16 sm:py-20">
          {post.author && (
            <Reveal>
              <span className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <User className="size-4" /> {post.author}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {renderBlocks(post.content)}
            </div>
          </Reveal>
        </section>

        <GuideCTA title="Ready for your own adventure on the water?" label="Book Your Adventure" />
      </main>
      <Footer />
    </>
  );
}
