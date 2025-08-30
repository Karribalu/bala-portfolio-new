import { Terminal } from "./Terminal";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "karri.balu2339@gmail.com",
    href: "mailto:karri.balu2339@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    label: "GitHub",
    value: "github.com/karribalu",
    href: "https://github.com/karribalu",
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/b-subramanyam",
    href: "https://linkedin.com/in/b-subramanyam",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Banu23",
    href: "https://leetcode.com/u/Banu23",
    icon: <Code className="w-4 h-4" />,
  },
  {
    label: "Portfolio",
    value: "balasubramanyam.xyz",
    href: "https://www.balasubramanyam.xyz",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    label: "Phone",
    value: "+44 7367675677",
    href: "tel:+447367675677",
    icon: <Phone className="w-4 h-4" />,
  },
];

export const Contact = () => {
  return (
    <section className="py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/contact">
          <div className="mb-6">
            <span className="text-secondary">$ cat </span>
            <span className="text-accent">contact-info.json</span>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4">{`{`}</div>

            {contactMethods.map((contact, index) => (
              <div
                key={index}
                className="pl-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {contact.icon}
                  <span className="text-accent">
                    "{contact.label.toLowerCase()}":
                  </span>
                </div>
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-primary hover:text-secondary transition-colors duration-200 break-all ml-6 sm:ml-0"
                >
                  "{contact.value}"
                </a>
                {index < contactMethods.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </div>
            ))}

            <div className="text-sm text-muted-foreground mt-4">{`}`}</div>
          </div>

          <div className="mt-8 pt-4 border-t border-primary">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">
                  Currently located in:
                </span>
              </div>
              <span className="text-primary ml-6 sm:ml-0">London, UK</span>
            </div>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            <div className="text-secondary">
              $ echo "Feel free to reach out!"
            </div>
            <div className="mt-1">
              Ready to collaborate on exciting projects and solve complex
              technical challenges.
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};
