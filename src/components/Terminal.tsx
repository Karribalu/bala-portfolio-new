import { useEffect, useState } from "react";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Terminal = ({
  children,
  className = "",
  title = "terminal",
}: TerminalProps) => {
  return (
    <div className={`border border-primary bg-card ${className}`}>
      <div className="bg-muted px-3 py-1 text-xs text-muted-foreground border-b border-primary">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export const Typewriter = ({
  text,
  speed = 50,
  className = "",
  showCursor = true,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && <span className="cursor"></span>}
    </span>
  );
};
