import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Blogs } from "@/components/Blogs";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-primary">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-primary font-mono text-sm terminal-glow">
              <span className="text-secondary">$ </span>bk.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 text-xs font-mono">
              <a
                href="#skills"
                className="text-accent hover:text-secondary transition-colors"
              >
                /skills
              </a>
              <a
                href="#experience"
                className="text-accent hover:text-secondary transition-colors"
              >
                /experience
              </a>
              <a
                href="#projects"
                className="text-accent hover:text-secondary transition-colors"
              >
                /projects
              </a>
              <a
                href="#blogs"
                className="text-accent hover:text-secondary transition-colors"
              >
                /blogs
              </a>
              <a
                href="#education"
                className="text-accent hover:text-secondary transition-colors"
              >
                /education
              </a>
              <a
                href="#contact"
                className="text-accent hover:text-secondary transition-colors"
              >
                /contact
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                id="menu-toggle"
                className="text-primary hover:text-secondary transition-colors p-2"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden md:hidden mt-3 pb-3 border-t border-primary pt-3"
          >
            <div className="flex flex-col gap-3 text-xs font-mono">
              <a
                href="#skills"
                className="text-accent hover:text-secondary transition-colors"
              >
                /skills
              </a>
              <a
                href="#experience"
                className="text-accent hover:text-secondary transition-colors"
              >
                /experience
              </a>
              <a
                href="#projects"
                className="text-accent hover:text-secondary transition-colors"
              >
                /projects
              </a>
              <a
                href="#blogs"
                className="text-accent hover:text-secondary transition-colors"
              >
                /blogs
              </a>
              <a
                href="#education"
                className="text-accent hover:text-secondary transition-colors"
              >
                /education
              </a>
              <a
                href="#contact"
                className="text-accent hover:text-secondary transition-colors"
              >
                /contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 sm:pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary bg-card mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <div className="mb-2">
              <span className="text-secondary">$ </span>
              <span className="text-accent">echo</span>
              <span> "Made with ❤️ by Bala"</span>
            </div>
            <div>
              <span className="text-secondary">© 2025 </span>
              <span className="text-primary">Balasubramanyam Karri</span>
              <span className="text-secondary"> - All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
