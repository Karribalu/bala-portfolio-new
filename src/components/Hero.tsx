import { Terminal, Typewriter } from "./Terminal";
const skills = [
  "Python",
  "Java",
  "Rust",
  "JavaScript",
  "TypeScript",
  "React",
  "FastAPI",
  "Spring-Boot",
  "AWS (Certified)",
];
export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Terminal title="~/balasubramanyam-karri" className="mb-8">
          <div className="space-y-2">
            <div className="text-secondary">$ whoami</div>
            <div className="text-sm">
              <Typewriter text="Balasubramanyam Karri" speed={80} />
            </div>
            <div className="text-secondary">$ cat role.txt</div>
            <div className="text-sm">
              <Typewriter
                text="Software Engineer @ JP Morgan & Chase"
                speed={60}
              />
            </div>
            <div className="text-secondary">$ ls skills/</div>
            <div className="text-sm">
              <Typewriter text={skills.join(", ")} speed={40} />
            </div>
          </div>
        </Terminal>

        <div className="text-center overflow-hidden">
          {/* Mobile version - just text */}
          <div className="block sm:hidden">
            <h1 className="text-primary terminal-glow text-lg font-mono">
              Balasubramanyam Karri
            </h1>
          </div>

          {/* Desktop ASCII Art */}
          <div className="hidden sm:block">
            <pre className="ascii-art text-primary terminal-glow text-xs lg:text-sm overflow-x-auto">
              {`
 ____       _               _                                                             
|  _ \\     | |             (_)                                                            
    | |_) | __ _| | __ _ ___ _   _ _ __  _ __ __ _ _ __ ___   __ _ _ __  _   _  __ _ _ __ ___     
    |  _ < / _\` | |/ _\` / __| | | | '_ \\| '__/ _\` | '_ \` _ \\ / _\` | '_ \\| | | |/ _\` | '_ \` _ \\    
    | |_) | (_| | | (_| \\__ \\ |_| | |_) | | | (_| | | | | | | (_| | | | | |_| | (_| | | | | | |   
    |____/ \\__,_|_|\\__,_|___/\\__,_|_.__/|_|  \\__,_|_| |_| |_|\\__,_|_| |_|\\__, |\\__,_|_| |_| |_|   
                                                                      __/ |                
                                                                     |___/                 
                                                                     
            `}
            </pre>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
          <a
            href="mailto:karri.balu2339@gmail.com"
            className="text-accent hover:text-secondary transition-colors duration-200"
          >
            {">"} EMAIL
          </a>
          <a
            href="https://github.com/karribalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary transition-colors duration-200"
          >
            {">"} GITHUB
          </a>
          <a
            href="https://linkedin.com/in/b-subramanyam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary transition-colors duration-200"
          >
            {">"} LINKEDIN
          </a>
          <a
            href="https://leetcode.com/u/Banu23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary transition-colors duration-200"
          >
            {">"} LEETCODE
          </a>
        </div>
      </div>
    </section>
  );
};
