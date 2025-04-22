import {
  FaEnvelope as EmailIcon,
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa6";
import { SocialType } from "../types";

const socialConfig: SocialType[] = [
  {
    href: "mailto:davidvargash@gmail.com",
    icon: EmailIcon,
    label: "Email",
  },
  {
    href: "https://github.com/davidvargash85",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/david-in-da-code/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  }
];

export default socialConfig;
