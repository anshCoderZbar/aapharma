import {
  Biohazard,
  FlaskConical,
  Image,
  ImagePlus,
  Info,
  LayoutDashboard,
  LightbulbIcon,
  PersonStanding,
  Settings,
} from "lucide-react";

import { v4 as uuidv4 } from "uuid";

export const SidebarData = [
  {
    id: uuidv4(),
    name: "Dashboard",
    slug: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    name: "Product Management",
    slug: "product-management",
    icon: <Biohazard />,
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    name: "Operating Philosophy",
    slug: "operating-philosophy",
    icon: <LightbulbIcon />,
  },
  {
    id: uuidv4(),
    name: "Chemical Synthesis",
    slug: "#",
    icon: <FlaskConical />,
    subMenu: [
      {
        id: 1,
        subMenuName: "chemical synthesis",
        slug: "chemical-synthesis",
      },
      {
        id: 2,
        subMenuName: "expertise includes",
        slug: "expertise-includes",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Settings",
    slug: "settings",
    icon: <Settings />,
  },
];
