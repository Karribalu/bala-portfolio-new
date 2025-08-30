import { Terminal } from "./Terminal";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const courses = [
  "Operating Systems",
  "Blockchain Systems",
  "Data Structures",
  "Networking",
  "Databases",
  "Compiler Design",
  "Data Science",
  "Artificial Intelligence",
];

export const Education = () => {
  return (
    <section className="py-16 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <Terminal title="~/education">
          <div className="mb-4">
            <span className="text-secondary">$ cat </span>
            <span className="text-accent">academic-records.txt</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="font-semibold">Bachelor of Technology</span>
              <span className="text-muted-foreground">-</span>
              <span className="text-accent">Computer Science Engineering</span>
            </div>

            <div className="pl-7 space-y-2">
              <div className="text-sm text-primary">
                Jawaharlal Nehru Technological University of Hyderabad (JNTUH)
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Hyderabad, India
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  May 2018 - July 2022
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-secondary">Relevant Coursework:</span>
                </div>
                <div className="pl-6 text-sm">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {courses.map((course, index) => (
                      <div key={index} className="text-primary">
                        • {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};
