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
          I am a Senior Software Engineer and Tech Lead with focus in the
          frontend, I design and develop frontend applications with a strong
          focus on accessibility, and scalability. I also architect
          high-performance APIs and search engines optimized for speed and
          scalability, enabling efficient service discovery and referrals. With
          expertise in ReactJS, Typescript, AWS, Docker, Jenkins, Git Actions,
          and Infrastructure as a Service, I specialize in developing robust and
          scalable solutions. I am committed to building systems that are not
          only efficient but also impactful in connecting people with the
          resources they need. I have over 10 years of experience in software
          development, including leading teams and projects at Office Depot and
          TBC Corporation. I hold a Bachelor's degree in Computer Science from
          Universidad de las Ciencias Informáticas.
        </p>
      </div>
    </section>
  );
});

Profile.displayName = "Profile";

export default Profile;
