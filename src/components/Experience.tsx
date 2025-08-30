import { Terminal } from "./Terminal";
import { Building2, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer 2",
    company: "JP Morgan & Chase",
    location: "London, UK",
    period: "Jan 2025 - Present",
    highlights: [
      "Led UI component modularization with Module Federation, reducing bundle size by 40%",
      "Built document export service handling 1,700+ requests/min with 10GB/30s throughput",
      "Rebuilt Elasticsearch API handling 4,000+ requests/sec with P95 latency <120ms",
      "Integrated Vector Search improving relevance by 30% via A/B testing",
      "Collaborated on embedding models (OpenAI, BERT) with 200ms latency, 90% recall",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "AWS", "Elasticsearch"],
  },
  {
    title: "Software Engineer",
    company: "JP Morgan & Chase",
    location: "Glasgow, UK",
    period: "Feb 2023 - Jan 2025",
    highlights: [
      "Built Search-as-a-Service app serving 12,000+ searches/min",
      "Delivered 25+ REST APIs using Spring Boot",
      "Optimized MongoDB migration reducing time from 15 to 6 days for 85M documents",
      "Engineered Kafka microservices processing 150K documents/day",
      "Reduced query response time from 800ms to 250ms via index optimization",
      "Built unified logging framework reducing debug time from 15min to 2min",
    ],
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "AWS",
      "Terraform",
    ],
  },
  {
    title: "Software Engineer (DevOps)",
    company: "CyberArk",
    location: "Hyderabad, India",
    period: "Sep 2022 - Jan 2023",
    highlights: [
      "DevOps Engineer for Identity Security Product",
      "Optimized Jenkins pipelines for CI/CD automation",
      "Managed cloud infrastructure using Terraform and Kubernetes on AWS",
      "Implemented automated vulnerability scans and compliance checks",
    ],
    tech: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
  },
];

export const Experience = () => {
  return (
    <section className="py-16 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/work-history">
          <div className="mb-4">
            <span className="text-secondary">$ git log --oneline --graph</span>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent text-sm mt-1">*</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-primary font-semibold">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Building2 className="w-3 h-3" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="space-y-1 text-sm mb-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="text-muted-foreground">Tech:</span>
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="text-accent">
                          {tech}
                          {idx < exp.tech.length - 1 && (
                            <span className="text-muted-foreground">, </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Terminal>
      </div>
    </section>
  );
};
