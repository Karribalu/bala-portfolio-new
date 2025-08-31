import { Terminal } from "./Terminal";
import { BookOpen } from "lucide-react";

const blogs = [
  {
    title: "Lucene Internals 1: Introduction",
    url: "https://medium.com/@karri.balu2339/lucene-internals-1-introduction-d0fd7448a023",
    description:
      "An introduction to the internals of Apache Lucene search engine.",
  },
  {
    title: "Lucene in Rust: What is an Index? Part 2",
    url: "https://medium.com/@karri.balu2339/lucene-in-rust-what-is-an-index-part-2-7ea6c8ce0580",
    description: "Exploring indexing concepts in Lucene implemented in Rust.",
  },
];

export const Blogs = () => {
  return (
    <section className="py-16 px-6" id="blogs">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/blogs" className="mb-8">
          <div className="mb-4">
            <span className="text-secondary">$ ls </span>
            <span className="text-accent">blogs/</span>
          </div>

          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-semibold">"{blog.title}":</span>
                </div>
                <div className="pl-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    {blog.description}
                  </div>
                  <div className="text-sm">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      {blog.url}
                    </a>
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
