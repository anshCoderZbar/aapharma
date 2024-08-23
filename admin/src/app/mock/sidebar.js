import {
  Beaker,
  Biohazard,
  CalendarCheck,
  Castle,
  DownloadCloud,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FolderKanban,
  HeartHandshake,
  Image,
  ImagePlus,
  Info,
  InfoIcon,
  LayoutDashboard,
  Leaf,
  LightbulbIcon,
  Option,
  OptionIcon,
  Paperclip,
  PersonStanding,
  PersonStandingIcon,
  Search,
  ServerIcon,
  Settings,
  ShoppingBag,
  StepForward,
  Stethoscope,
  TestTube,
  User,
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
        subMenuName: "Level 1",
        slug: "master-category",
      },
      {
        id: 2,
        subMenuName: "Level 2",
        slug: "sub-category",
      },
      {
        id: 3,
        subMenuName: "Level 3",
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
        subMenuName: "Banner",
        slug: "about-banner",
      },
      {
        id: 2,
        subMenuName: "Card",
        slug: "about-card-details",
      },
      {
        id: 3,
        subMenuName: "Timeline",
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
        subMenuName: "Banner",
        slug: "personnel-banner",
      },
      {
        id: 2,
        subMenuName: "Description",
        slug: "personnel-description",
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
    name: "Case Study",
    slug: "#",
    icon: <Castle />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Case Study Tabs",
        slug: "case-study-tabs",
      },
      {
        id: 2,
        subMenuName: "Case Study Diagram Content",
        slug: "case-graph-content",
      },
      {
        id: 3,
        subMenuName: "Case Study Diagram",
        slug: "case-study-diagram",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Testimonials",
    slug: "#",
    icon: <User />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Heading",
        slug: "testimonial-content",
      },
      {
        id: 2,
        subMenuName: "Testimonials",
        slug: "all-testimonial",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Novel Therapeutics",
    slug: "#",
    icon: <Stethoscope />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "therapeutics-banner",
      },
      {
        id: 2,
        subMenuName: "Supports",
        slug: "therapeutics-supports",
      },
      {
        id: 3,
        subMenuName: "Steps",
        slug: "therapeutics-steps",
      },
      {
        id: 4,
        subMenuName: "ADC",
        slug: "therapeutics-adc",
      },
      {
        id: 5,
        subMenuName: "Bottom Section",
        slug: "therapeutics-bottom",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Carbohydrate",
    slug: "#",
    icon: <Leaf />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "carbohydrate-banner",
      },
      {
        id: 2,
        subMenuName: "Timeline",
        slug: "carbohydrate-timeline",
      },
      // {
      //   id: 3,
      //   subMenuName: "Description",
      //   slug: "carbohydrate-description",
      // },
      {
        id: 3,
        subMenuName: "Diagram",
        slug: "carbohydrate-diagram",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Employment",
    slug: "#",
    icon: <PersonStandingIcon />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "employment-banner",
      },
      {
        id: 2,
        subMenuName: "Responsibilities",
        slug: "employment-responsibilities",
      },
      {
        id: 3,
        subMenuName: "Applicants",
        slug: "employment-applicants",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Research And Development",
    slug: "#",
    icon: <Search />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "research-banner",
      },
      {
        id: 2,
        subMenuName: "SORT",
        slug: "research-sort",
      },
      {
        id: 3,
        subMenuName: "Modification",
        slug: "research-modification",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Process Research And Development",
    slug: "#",
    icon: <Search />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "process-banner",
      },
      {
        id: 2,
        subMenuName: "Mid Section",
        slug: "process-mid-section",
      },
      {
        id: 3,
        subMenuName: "Bottom Section",
        slug: "process-bottom-section",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Small Molecule Drug Discovery",
    slug: "#",
    icon: <Biohazard />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "small-molecule-banner",
      },
      {
        id: 2,
        subMenuName: "HTS",
        slug: "hts",
      },
      {
        id: 3,
        subMenuName: "SBDD",
        slug: "sbdd",
      },
      {
        id: 4,
        subMenuName: "Scaffold Hopping",
        slug: "scaffold-hopping",
      },
      {
        id: 5,
        subMenuName: "SAR",
        slug: "sar",
      },
      {
        id: 6,
        subMenuName: "Lead Development",
        slug: "lead-development",
      },
      {
        id: 7,
        subMenuName: "Tabs",
        slug: "molecule-tabs",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Service-1",
    slug: "#",
    icon: <ServerIcon />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "services-banner",
      },
      {
        id: 2,
        subMenuName: "Assessment",
        slug: "services-assessment",
      },
      {
        id: 3,
        subMenuName: "Table",
        slug: "services-table",
      },
      {
        id: 5,
        subMenuName: "Detail",
        slug: "services-details",
      },
      {
        id: 6,
        subMenuName: "Buttons",
        slug: "services-buttons",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Chemistry Expertise",
    slug: "#",
    icon: <FlaskConicalOff />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "chemistry-banner",
      },
      {
        id: 2,
        subMenuName: "Tabs",
        slug: "chemistry-tabs",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Resources",
    slug: "#",
    icon: <DownloadCloud />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "resources-banner",
      },
      {
        id: 2,
        subMenuName: "Tabs",
        slug: "resources-tabs",
      },
      {
        id: 3,
        subMenuName: "Useful Guides",
        slug: "resources-useful-guides",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Whitepaper",
    slug: "#",
    icon: <Paperclip />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "whitepaper-banner",
      },
      {
        id: 2,
        subMenuName: "Whitepaper",
        slug: "all-whitepapers",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Conference",
    slug: "#",
    icon: <CalendarCheck />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "conference-banner",
      },
      {
        id: 2,
        subMenuName: "Cards",
        slug: "conference-cards",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Partner",
    slug: "#",
    icon: <HeartHandshake />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "partner-banner",
      },
      {
        id: 2,
        subMenuName: "Case Study",
        slug: "partner-cards",
      },
      // {
      //   id: 3,
      //   subMenuName: "Fifth Card",
      //   slug: "partner-fifth-card",
      // },
      {
        id: 4,
        subMenuName: "Bottom",
        slug: "partner-bottom",
      },
      {
        id: 5,
        subMenuName: "logos",
        slug: "partner-logos",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Capabilities Overview",
    slug: "capabilities-overview",
    icon: <FlaskRound />,
  },
  {
    id: uuidv4(),
    name: "Lab Equipment",
    slug: "#",
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "lab-equipment-banner",
      },
      {
        id: 2,
        subMenuName: "Equipments",
        slug: "all-lab-equipment",
      },
    ],
    icon: <TestTube />,
  },
  {
    id: uuidv4(),
    name: "Shop",
    slug: "#",
    icon: <ShoppingBag />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Orders",
        slug: "orders",
      },
      {
        id: 2,
        subMenuName: "Coupons",
        slug: "all-coupons",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Project Management",
    slug: "#",
    icon: <FolderKanban />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "project-management-banner",
      },
      {
        id: 2,
        subMenuName: "Lists",
        slug: "project-management-Lists",
      },
      {
        id: 3,
        subMenuName: "Bottom Description",
        slug: "project-management-bottom-description",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Others",
    slug: "#",
    icon: <Paperclip />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "others-banner",
      },
      {
        id: 2,
        subMenuName: "Lists",
        slug: "others-list",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Overview",
    slug: "#",
    icon: <InfoIcon />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "overview-banner",
      },
      {
        id: 2,
        subMenuName: "Tabs",
        slug: "overview-tabs",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Analytical Instruments",
    // slug: "analytical-instrumentation",
    icon: <Beaker />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Instruments",
        slug: "all-analytical-instruments",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Synthesis",
    // slug: "analytical-instrumentation",
    icon: <Biohazard />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Synthesis",
        slug: "all-synthesis",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Research Collaboration",
    // slug: "analytical-instrumentation",
    icon: <Search />,
    subMenu: [
      {
        id: 1,
        subMenuName: "Banner",
        slug: "research-collaboration-banner",
      },
      {
        id: 2,
        subMenuName: "Mid Section",
        slug: "research-collaboration-mid-section",
      },
      {
        id: 3,
        subMenuName: "Academia",
        slug: "research-collaboration-academia",
      },
      {
        id: 4,
        subMenuName: "Private / Public Company",
        slug: "research-collaboration-company",
      },
      {
        id: 5,
        subMenuName: "Diagram",
        slug: "research-collaboration-diagram",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Accreditations",
    slug: "accreditations",
    icon: <FlaskConical />,
  },
  {
    id: uuidv4(),
    name: "Settings",
    slug: "settings",
    icon: <Settings />,
  },
];
