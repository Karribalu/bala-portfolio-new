import { Terminal } from "./Terminal";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Folder,
  FileCode,
} from "lucide-react";

const projects = [
  {
    name: "DesignSage",
    description:
      "AI-driven interview platform for real-time system design evaluation",
    status: "In Progress",
    tech: [
      "React",
      "NextJS",
      "ReactFlow",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI",
    ],
    highlights: [
      "Drag and drop canvas for system design",
      "Integrated AI assistant for dynamic follow-ups",
      "Real-time automated feedback system",
    ],
    github: "#",
  },
  {
    name: "Dynamic Hashing Algorithm",
    description:
      "Rust implementation of Baotong Lu's Dynamic Hashing Algorithm",
    status: "Completed",
    tech: ["Rust"],
    highlights: [
      "Performance optimized hash table implementation",
      "Memory efficient dynamic resizing",
      "Comprehensive test suite",
    ],
    github: "#",
  },
  {
    name: "PREQUAL Load Balancer",
    description:
      "Google's Probing to Reduce Queuing and Latency strategy in Rust",
    status: "Completed",
    tech: ["Rust", "gRPC", "Protobuf"],
    highlights: [
      "High-performance load balancing",
      "gRPC communication layer",
      "Latency optimization algorithms",
    ],
    github: "#",
  },
  {
    name: "Monkey Language Interpreter",
    description: "Complete interpreter for Monkey programming language",
    status: "Completed",
    tech: ["Rust"],
    highlights: [
      "Lexical analysis and parsing",
      "AST evaluation engine",
      "Built-in functions and data types",
    ],
    github: "#",
  },
  {
    name: "NFT Marketplace",
    description: "Decentralized marketplace for trading NFTs",
    status: "Completed",
    tech: ["Solidity", "Ethereum", "Hardhat", "React"],
    highlights: [
      "Smart contract development",
      "Web3 integration",
      "Decentralized storage",
    ],
    github: "#",
  },
];

const contributions = [
  "influxdata/influxdb/pull/25997",
  "meilisearch/meilisearch/pull/4787",
  "meilisearch/meilisearch/pull/4716",
  "meilisearch/meilisearch/pull/4231",
];

export const Projects = () => {
  return (
    <section className="py-16 px-6" id="projects">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/projects" className="mb-8">
          <div className="mb-4">
            <span className="text-secondary">$ ls -la projects/</span>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Folder className="w-4 h-4 text-accent" />
                  <span className="text-primary font-semibold">
                    {project.name}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-muted text-secondary rounded">
                    {project.status}
                  </span>
                </div>

                <div className="pl-6 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="text-muted-foreground">Tech:</span>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-accent">
                        {tech}
                        {idx < project.tech.length - 1 && (
                          <span className="text-muted-foreground">, </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-accent hover:text-secondary transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Terminal>

        <Terminal title="~/open-source" className="mt-8">
          <div className="space-y-3">
            <div className="text-secondary">
              $ git log --author="Balasubramanyam Karri" --oneline
            </div>
            <div className="space-y-2">
              {contributions.map((contribution, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <FileCode className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <a
                      href={`https://github.com/${contribution}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors break-all"
                    >
                      {contribution}
                    </a>
                    <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};
