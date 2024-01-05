import {
  Biohazard,
  Image,
  ImagePlus,
  Info,
  LayoutDashboard,
  LightbulbIcon,
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
        subMenuName: "Services Content",
        slug: "home-service-content",
      },
      {
        id: 4,
        subMenuName: "Add Services ",
        slug: "home-services",
      },
      {
        id: 5,
        subMenuName: "Vision",
        slug: "home-vision",
      },
      {
        id: 6,
        subMenuName: "Clients",
        slug: "home-client",
      },
      {
        id: 7,
        subMenuName: "Testimonial",
        slug: "home-testimonial",
      },
      {
        id: 8,
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
        subMenuName: "Master Category",
        slug: "master-category",
      },
      {
        id: 2,
        subMenuName: "Sub Category",
        slug: "sub-category",
      },
      {
        id: 3,
        subMenuName: "Sub Child Category",
        slug: "sub-child-category",
      },
    ],
  },
  {
    name: "Product Master",
    slug: "product-master",
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
    name: "Operating Philosophy",
    slug: "operating-philosophy",
    icon: <LightbulbIcon />,
  },
  {
    name: "Settings",
    slug: "settings",
    icon: <Settings />,
  },
];
