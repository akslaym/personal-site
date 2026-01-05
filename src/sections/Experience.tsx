import { Section } from '../components/ui/Section';
import { useFilter } from '../context/FilterContext';

const experiences = [
  {
    company: "Brown University Computer Science",
    role: "Head Teaching Assistant (CSCI0300)",
    period: "Fall 2025",
    description: "Led a staff of ~20 TAs for 'Introduction to Computer Systems'. Developed regression tests, streamlined grading, and authored documentation to help 150+ students navigate low-level debugging.",
    tags: ["C", "C++"],
  },
  {
    company: "24cast.org",
    role: "Technical Director",
    period: "Jan. 2024 - Nov. 2024",
    description: "Directed a team of 8 to build a real-time election prediction platform serving 5,000+ daily visits. Architected React frontend and AWS serverless backend (DynamoDB, Lambda).",
    tags: ["TypeScript", "React", "AWS", "DynamoDB", "Lambda"],
  },
  {
    company: "Brown Political Review",
    role: "Web Director",
    period: "Mar. 2023 - Present",
    description: "Managing a cohort of 10+ developers. Redesigned the website using Next.js and TypeScript, and built interactive data journalism projects.",
    tags: ["React", "Next.js", "TypeScript"],
  },
];

export function Experience() {
  const { activeFilters } = useFilter();

  const matchesFilter = (exp: typeof experiences[0]) => {
    if (activeFilters.length === 0) return true;
    const expTags = (exp.tags ?? []).map(t => t.toLowerCase());
    return activeFilters.some(filter => expTags.includes(filter.toLowerCase()));
  };

  return (
    <Section id="experience" title="Experience" className="bg-white">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-5 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 transition-all ${
              activeFilters.length > 0 && !matchesFilter(exp) ? 'opacity-40' : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-bold text-slate-900">{exp.role}</h3>
                <p className="text-slate-600 text-sm">{exp.company}</p>
              </div>
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              {exp.description}
            </p>
            {exp.tags && exp.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white text-slate-600 text-xs font-medium rounded border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
