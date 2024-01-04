import {
  Biohazard,
  Image,
  ImagePlus,
  Info,
  LayoutDashboard,
  PersonStanding,
  Settings,
} from "lucide-react";

export const SidebarData = [
  {
    name: "dashboard",
    slug: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Home",
    slug: "#",
    icon: <Image />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "home-banner",
      },
      {
        id: 2,
        subMenuName: "About",
        slug: "home-about",
      },
      {
        id: 3,
        subMenuName: "Services ",
        slug: "home-services",
      },
      {
        id: 4,
        subMenuName: "Vision",
        slug: "home-vision",
      },
      {
        id: 5,
        subMenuName: "Clients",
        slug: "home-client",
      },
      {
        id: 6,
        subMenuName: "Testimonial",
        slug: "home-testimonial",
      },
      {
        id: 7,
        subMenuName: "Article",
        slug: "home-article",
      },
    ],
  },

  {
    name: "Catalog",
    slug: "#",
    icon: <ImagePlus />,
    subMenu: [
      {
        id: 1,
        subMenuName: "category 1",
        slug: "catalogL1",
      },
      {
        id: 2,
        subMenuName: "category 2",
        slug: "catalogL2",
      },
      {
        id: 3,
        subMenuName: "category 3",
        slug: "catalogL3",
      },
    ],
  },
  {
    name: "Chemical Editor",
    slug: "chemical",
    icon: <Biohazard />,
  },
  {
    name: "About Us",
    slug: "#",
    icon: <Info />,
    subMenu: [
      {
        id: 1,
        subMenuName: "About Banner",
        slug: "about-banner",
      },
      {
        id: 2,
        subMenuName: "About Card",
        slug: "about-card-details",
      },
      {
        id: 3,
        subMenuName: "About Timeline",
        slug: "about-timeline",
      },
    ],
  },
  {
    name: "Personnel",
    slug: "#",
    icon: <PersonStanding />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Personnel Banner",
        slug: "personnel-banner",
      },
      {
        id: 2,
        subMenuName: "Personnel Characterized ",
        slug: "personnel-characterized",
      },
      {
        id: 3,
        subMenuName: "Our Team",
        slug: "our-team",
      },
    ],
  },
  {
    name: "Settings",
    slug: "settings",
    icon: <Settings />,
  },
];
