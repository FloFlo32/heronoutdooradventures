import pagesData from "@/content/data/pages.json";
import servicesData from "@/content/data/services.json";
import blogData from "@/content/data/blog-posts.json";

export type ContentBlock = { tag: string; text: string };
export type ScrapedPage = {
  path: string;
  title: string;
  description: string;
  content: ContentBlock[];
  images: string[];
};
export type ScrapedService = {
  path: string;
  slug: string;
  title: string;
  content: ContentBlock[];
  images: string[];
};
export type ScrapedBlogPost = {
  path: string;
  slug: string;
  title: string;
  author: string | null;
  content: ContentBlock[];
  images: string[];
};

const pages = pagesData as Record<string, ScrapedPage>;
const services = (servicesData as Omit<ScrapedService, "slug">[]).map((s) => ({
  ...s,
  slug: s.path.replace("/service-page/", ""),
}));
const blogPosts = blogData as ScrapedBlogPost[];

export function getPage(path: string): ScrapedPage {
  const page = pages[path];
  if (!page) throw new Error(`No scraped content for page: ${path}`);
  return page;
}

export function getParagraphs(page: ScrapedPage, tag: "p" | "h1" | "h2" | "h3" | "h4" = "p") {
  return page.content.filter((c) => c.tag === tag).map((c) => c.text);
}

export function getService(slug: string): ScrapedService {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`No scraped service for: ${slug}`);
  return service;
}

export function listServices() {
  return services;
}

/** Pull the labeled facts (duration, price, meeting spot) out of a service's span blocks. */
export function getServiceFacts(service: ScrapedService) {
  const spans = service.content.filter((c) => c.tag === "span").map((c) => c.text);
  // spans arrive as: ["<dur><dur>", "<dur>", "<price text>$<price>", "<location>"]
  const duration = spans[1] ?? "";
  const priceRaw = spans[2] ?? "";
  const half = priceRaw.length / 2;
  const price = Number.isInteger(half) && priceRaw.slice(0, half) === priceRaw.slice(half)
    ? priceRaw.slice(0, half)
    : (priceRaw.includes("$") ? priceRaw.slice(priceRaw.indexOf("$")) : priceRaw);
  const location = spans[3] ?? "";
  return { duration, price, location };
}

/** Body content minus the h1/span "fact" blocks already surfaced via getServiceFacts. */
export function getServiceSections(service: ScrapedService) {
  const blocks = service.content.filter((c) => c.tag === "h2" || c.tag === "p");
  const sections: { heading: string; paragraphs: string[] }[] = [];
  let current: { heading: string; paragraphs: string[] } | null = null;
  for (const b of blocks) {
    if (b.tag === "h2") {
      current = { heading: b.text, paragraphs: [] };
      sections.push(current);
    } else if (current) {
      current.paragraphs.push(b.text);
    }
  }
  return sections;
}

export function listBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug: string): ScrapedBlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
