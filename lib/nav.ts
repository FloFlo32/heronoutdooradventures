/**
 * The full nav/footer link set — mirrors the source site's menu (Home + 10
 * links), with "Book Now" renamed to "Adventures" and expanded into a submenu
 * of the 4 real trip packages (each now has its own page, matching the
 * source's Wix service-page detail routes).
 */
export const primaryLinks = [{ label: "Meet Your Guide", href: "/about-us" }];

export const adventureLinks = [
  { label: "4 Hour Fishing Trip", href: "/adventures/4-hour-fishing-trip" },
  { label: "6 Hour Guided Fishing Trip", href: "/adventures/6-hour-guided-fishing-trip" },
  { label: "Nature Adventure / Sunset Cruise", href: "/adventures/nature-adventure-sunset-cruise" },
  { label: "Lineside Experience Clinic", href: "/adventures/lineside-experience-clinic" },
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

export const allNavLinks = [
  ...primaryLinks,
  { label: "Adventures", href: "/adventures" },
  ...adventureLinks,
  ...guideLinks,
  ...secondaryLinks,
];
