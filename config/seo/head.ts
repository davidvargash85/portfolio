import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("David Vargas | Full-Stack Software Engineer"),
    description: truncateDescription(
      "Experienced Software Engineer specializing in high-performance frontend applications, React, and scalable architectures."
    ),
    slug: "/",
  },
  {
    page: "About",
    title: truncateTitle("About | David Vargas | Software Engineer"),
    description: truncateDescription(
      "Discover David Vargas's background in building robust frontend and backend systems, from enterprise platforms to consumer applications."
    ),
    slug: "/about",
  },
  {
    page: "Story",
    title: truncateTitle("Story | Engineering Journey | David Vargas"),
    description: truncateDescription(
      "Learn about David’s evolution as a developer—from early projects to leading engineering efforts across industries."
    ),
    slug: "/story",
  },
  {
    page: "Blog",
    title: truncateTitle("Blog | React, Architecture, and Dev Insights | David Vargas"),
    description: truncateDescription(
      "Read David's latest insights on React, performance tuning, software architecture, and engineering leadership."
    ),
    slug: "/blog",
  },
  {
    page: "Projects",
    title: truncateTitle("Projects | David Vargas | React & Full-Stack Work"),
    description: truncateDescription(
      "Explore David's portfolio built using React, Next.js, Node.js, and scalable backend systems like .NET & Ruby on Rails and OpenSearch (ElasticSearch)."
    ),
    slug: "/projects",
  },
  {
    page: "Contact",
    title: truncateTitle("Contact | Connect with David Vargas"),
    description: truncateDescription(
      "Want to collaborate or discuss a project? Reach out to David directly."
    ),
    slug: "/contact",
  },
];

export default HEAD;
