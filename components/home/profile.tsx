import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { FC, memo } from "react";

interface ProfileProps {
  className?: string;
}

const Profile: FC<ProfileProps> = memo(({ className }) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-2xl items-center justify-center text-center",
        className,
      )}
      aria-label="Profile section"
    >
      <Link
        href="/about"
        className="group relative mb-8 block"
        aria-label="View David's profile"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar
                className="ring-border bg-background hover:ring-accent/50 mx-auto size-32 rounded-full object-cover shadow-lg ring-4 transition-all duration-300"
                role="img"
                aria-label="David's profile picture"
              >
                <AvatarImage
                  src="/images/profile.webp"
                  alt="David's profile picture"
                  width={128}
                  height={128}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <AvatarFallback className="bg-accent">
                  <UserIcon
                    className="text-foreground size-16"
                    aria-hidden="true"
                  />
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Learn more about David</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <h1 className="text-accent-foreground mb-4 text-center text-5xl leading-none font-bold tracking-tight">
        <span className="relative inline-block">
          <span
            className="bg-accent absolute -top-[2.5%] -left-[2.5%] z-0 h-[105%] w-[105%] -rotate-1"
            aria-hidden="true"
          />
          <span className="relative">✨Hire</span>
        </span>{" "}
        David
      </h1>

      <div className="space-y-2">
        <p className="text-foreground text-xl font-medium">
          Full Stack Engineer
        </p>
        <p>
          I am a Senior Software Engineer, Full Stack Developer, and Tech Lead
          with over 15 years of experience designing and delivering
          backend-driven web applications.           I specialize in architecting scalable
          APIs and services using <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, <strong>Microsoft .NET</strong> for
          building APIs, and <strong>TypeScript</strong>, and I have extensive
          experience implementing <strong>microservices</strong> and{" "}
          <strong>search platforms</strong> using technologies like{" "}
          <strong>OpenSearch</strong>.
        </p>
        <p>
          My backend expertise includes developing RESTful and GraphQL APIs with
          Node.js and <strong>Microsoft .NET</strong>, modeling data with{" "}
          <strong>MongoDB</strong> and{" "}
          <strong>PostgreSQL</strong>, and building service-oriented
          architectures that support modular, high-throughput systems. I’ve
          designed integrations and internal tooling to power platform-wide
          service discovery, optimized data queries, and search functionality at
          scale.
        </p>
        <p>
          I build secure, serverless cloud-native applications on{" "}
          <strong>AWS</strong> using services like<strong>Lambda</strong>,{" "}
          <strong>API Gateway</strong>, <strong>DynamoDB</strong>,{" "}
          <strong>CloudFront</strong>, <strong>Route 53</strong> and{" "}
          <strong>Cognito</strong>. I implement CI/CD pipelines using{" "}
          <strong>Docker</strong>, <strong>Jenkins</strong>, and{" "}
          <strong>GitHub Actions</strong>, and I follow Infrastructure as Code
          practices to ensure automated, repeatable deployments.
        </p>
        <p>
          While my foundation is in backend systems, I’m also proficient in
          frontend development using <strong>React</strong>,{" "}
          <strong>Material UI</strong>, and <strong>TailwindCSS</strong>,
          allowing me to deliver complete solutions end-to-end. I’ve led
          engineering teams and delivered critical systems at Unite Us, Office
          Depot, and TBC Corporation. I hold a Bachelor`&lsquo;`s degree in Computer
          Science from Universidad de las Ciencias Informáticas and remain
          passionate about building efficient, resilient systems that solve
          real-world problems.
        </p>
      </div>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
