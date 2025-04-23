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
          with a strong emphasis on the frontend. I design and build scalable,
          accessible applications with high attention to performance and user
          experience. On the backend, I work extensively with{" "}
          <strong>NodeJS</strong> and <strong>TypeScript</strong>, and I also
          have experience developing enterprise-level services using{" "}
          <strong>C#</strong>. I architect robust APIs and search platforms
          optimized for speed and scalability, supporting efficient service
          discovery and data-driven interactions.
        </p>
        <p>
          My cloud expertise is rooted in <strong>AWS</strong>, where I work
          with services like <strong>Lambda</strong>,{" "}
          <strong>API Gateway</strong>, <strong>Route 53</strong>,{" "}
          <strong>Cognito</strong>, <strong>DynamoDB</strong>, and{" "}
          <strong>CloudFront</strong> to deliver serverless, secure, and
          globally distributed applications. I&apos;m also experienced with
          containerization and CI/CD pipelines using <strong>Docker</strong>,{" "}
          <strong>Jenkins</strong>, and <strong>Git Actions</strong>, and I
          apply Infrastructure as Code principles to automate deployments and
          ensure reliability.
        </p>
        <p>
          With over 10 years of experience, I specialize in building full-stack
          solutions that are efficient, resilient, and impactful. My background
          includes leading engineering teams and projects at Office Depot and
          TBC Corporation. I hold a Bachelor&apos;s degree in Computer Science
          from Universidad de las Ciencias Informáticas, and I remain deeply
          committed to connecting people with the technology and resources they
          need.
        </p>
      </div>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
