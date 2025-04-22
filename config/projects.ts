import { truncateDescription } from "@/lib/seo";
import { ProjectSubNavType } from "@/types";
import {
  RssIcon as BlogIcon,
  DamIcon,
  BeefIcon as MongolFoodIcon,
  UserRoundIcon as RoundUserIcon,
  UserSquareIcon as SquareUserIcon,
  EarthIcon as WebIcon,
} from "lucide-react";

const projects: ProjectSubNavType[] = [
  {
    title: "All Projects",
    description: truncateDescription("Overview of all projects", 30),
    image: "/images/navigation/all-projects.webp",
    href: "/projects",
    icon: BlogIcon,
  },
  {
    title: "Office Depot Design & Print",
    description: truncateDescription(
      "ReactJS & Typescript",
      30,
    ),
    image: "/images/projects/office-depot.png",
    href: "https://www.officedepot.com/vendor/vendorRouter.do?id=8808464&configurableItemType=CPD#/designer?template=1044&orientation=portrait&size=INCHES_8DOT5X11",
    icon: BlogIcon,
  },
  {
    title: "UniteUs Search Platform",
    description: truncateDescription("ReactJS, Typescript, Ruby On Rails", 30),
    href: "http://uniteus.com",
    icon: BlogIcon,
  },
  {
    title: "A simple snake game in React",
    description: truncateDescription("React & Typescript, P3 Graphics", 30),
    href: "https://davidvargash85.github.io/snake/",
    icon: BlogIcon,
  },
];

export default projects;
