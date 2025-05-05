// ...same imports
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import {
  ArrowUpRightIcon,
  CheckIcon,
  PaperclipIcon as FileIcon,
  TextIcon as LearnMoreIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

const PAGE = "About";
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

export const metadata: Metadata = {
  title: page.title,
  applicationName: page.title,
  description: page.description,
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default async function AboutPage() {
  return (
    <Fragment>
      <Header />
      <Heading variant="default">
        <MainTitle
          title={page.page}
          description={page.description}
          className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
        />
      </Heading>

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-10 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
          <Card className="mb-6 overflow-hidden">
            <div className="shrink-0">
              <Image
                title="Cover Image"
                alt="Cover Image"
                src="/images/cover.webp"
                layout="responsive"
                width={1200}
                height={630}
                quality={100}
                className="h-128 w-full object-cover"
                priority
              />
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col px-8 pt-6 pb-8 text-pretty sm:px-14">
              <div className="flex items-center justify-start">
                <h2 className="text-accent-foreground w-full text-center text-3xl font-semibold tracking-tight sm:w-auto sm:text-left">
                  Why Work with David?
                </h2>
              </div>
              <article id="about-me" className="mt-4">
                <p className="text-foreground w-full text-center text-lg sm:w-auto sm:text-left">
                  A versatile full-stack software engineer with deep technical
                  expertise, strong product intuition, and over a decade of
                  experience building impactful solutions.
                </p>

                <ul
                  role="list"
                  className="text-foreground wrap-everywhere mt-6 max-w-xl space-y-4"
                >
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Based in{" "}
                      <strong className="font-semibold">Florida, USA</strong>,
                      working with clients and teams across the globe.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Over 15 years of experience across industries like{" "}
                      <strong className="font-semibold">E-commerce</strong>,{" "}
                      <strong className="font-semibold">Healthcare</strong>, and{" "}
                      <strong className="font-semibold">Automotive</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Full-stack expertise with a strong backend focus using{" "}
                      <strong className="font-semibold">Node.js</strong>,{" "}
                      <strong className="font-semibold">Express</strong>,{" "}
                      <strong className="font-semibold">MongoDB</strong>,{" "}
                      <strong className="font-semibold">React</strong>, and{" "}
                      <strong className="font-semibold">TypeScript</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Experienced in designing scalable APIs, microservices
                      architectures, and search capabilities using{" "}
                      <strong className="font-semibold">OpenSearch</strong> and{" "}
                      <strong className="font-semibold">GraphQL</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Cloud-native development with{" "}
                      <strong className="font-semibold">AWS</strong> services
                      like <strong className="font-semibold">Lambda</strong>,{" "}
                      <strong className="font-semibold">API Gateway</strong>,{" "}
                      <strong className="font-semibold">Cognito</strong>,{" "}
                      <strong className="font-semibold">DynamoDB</strong>,{" "}
                      <strong className="font-semibold">CloudFront</strong>, and{" "}
                      <strong className="font-semibold">Route 53</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Skilled in CI/CD workflows and infrastructure automation
                      using <strong className="font-semibold">Docker</strong>,{" "}
                      <strong className="font-semibold">Jenkins</strong>,{" "}
                      <strong className="font-semibold">GitHub Actions</strong>,
                      and <strong className="font-semibold">Terraform</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Proven leadership as a tech lead managing cross-functional
                      teams and driving delivery in high-stakes environments.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Fluent in{" "}
                      <strong className="font-semibold">English</strong>,{" "}
                      <strong className="font-semibold">Spanish</strong>, and{" "}
                      <strong className="font-semibold">Portuguese</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      Passionate about clean architecture, robust APIs,
                      intuitive UX, and continuous learning across the stack.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon className="text-primary mt-1 size-5 flex-none" />
                    <span>
                      When not coding, you&apos;ll find him enjoying time with
                      family, building side projects, or exploring the latest in
                      AI.
                    </span>
                  </li>
                </ul>
              </article>
              <div className="mt-8 flex w-full flex-col gap-3 sm:mx-auto sm:flex-row">
                <Link href="/story">
                  <Button className="group hover:ring-border w-full px-5 py-2 transition-colors duration-200 hover:border-black/20 hover:ring-2 dark:hover:border-white/20">
                    <LearnMoreIcon className="size-4" aria-hidden="true" />
                    Learn more
                  </Button>
                </Link>
                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="group hover:ring-border w-full px-5 py-2 transition-colors duration-200 hover:border-black/20 hover:ring-2 dark:hover:border-white/20"
                  >
                    <FileIcon className="size-4" aria-hidden="true" />
                    Download Resume
                    <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
