import { Terminal } from "./Terminal";
import { Code, Database, Cloud, Monitor, Layers, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-4 h-4" />,
    skills: [
      "Python",
      "Java",
      "Rust",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "SQL",
    ],
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-4 h-4" />,
    skills: ["React", "Flask", "FastAPI", "Spring Boot", "NodeJS", "Actix"],
  },
  {
    title: "Tools & Infrastructure",
    icon: <Settings className="w-4 h-4" />,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Monitoring & DevOps",
    icon: <Monitor className="w-4 h-4" />,
    skills: ["Datadog", "Splunk", "Grafana", "Jenkins", "gRPC", "Kafka"],
  },
];

export const Skills = () => {
  return (
    <section className="py-16 px-6" id="skills">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/skills" className="mb-8">
          <div className="mb-4">
            <span className="text-secondary">$ cat </span>
            <span className="text-accent">tech-stack.json</span>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  {category.icon}
                  <span className="font-semibold">"{category.title}":</span>
                </div>
                <div className="pl-6">
                  <div className="text-sm text-muted-foreground">[</div>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="pl-4 text-sm">
                      <span className="text-primary">"{skill}"</span>
                      {skillIndex < category.skills.length - 1 && (
                        <span className="text-muted-foreground">,</span>
                      )}
                    </div>
                  ))}
                  <div className="text-sm text-muted-foreground">]</div>
                </div>
              </div>
            ))}
          </div>
        </Terminal>

        <Terminal title="~/certifications" className="mt-8">
          <div className="space-y-3">
            <div className="text-secondary">$ ls certifications/</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-accent" />
                <span>AWS Developer Associate</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-accent" />
                <span>IBM Data Science Specialization</span>
              </div>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};
