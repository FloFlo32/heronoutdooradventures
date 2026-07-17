/**
 * The full nav/footer link set — mirrors the source site's menu exactly
 * (Home + 10 links). Grouped for the mega-menu; the group is a presentation
 * choice, the link set and destinations are unchanged.
 */
export const primaryLinks = [
  { label: "Meet Your Guide", href: "/about-us" },
  { label: "Book Your Adventure", href: "/adventures" },
];

export const guideLinks = [
  { label: "Fishing Guide Lake Allatoona", href: "/fishing-guide-lake-allatoona" },
  { label: "Striper Fishing Guide", href: "/striper-fishing-guide" },
  { label: "Crappie Fishing Guide", href: "/crappie-fishing-guide" },
  { label: "Catfish!", href: "/catfish" },
  { label: "Kids Fishing Guide", href: "/kids-fishing-guide" },
  { label: "Instructional Fishing Classes", href: "/instructional-fishing-classes" },
];

export const secondaryLinks = [
  { label: "Lake Allatoona Fishing Report", href: "/blog" },
  { label: "Gift Card", href: "/gift-card" },
];

export const allNavLinks = [...primaryLinks, ...guideLinks, ...secondaryLinks];
