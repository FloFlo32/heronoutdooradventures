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
const services = servicesData as ScrapedService[];
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
  const service = services.find((s) => s.path.endsWith(slug));
  if (!service) throw new Error(`No scraped service for: ${slug}`);
  return service;
}

export function listBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug: string): ScrapedBlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
