import { Section } from '../components/ui/Section';
import { FileText } from 'lucide-react';
import { useFilter } from '../context/FilterContext';

const researchProjects = [
  {
    title: "AI-Augmented Database Management Systems",
    advisor: "Prof. Ugur Çetintemel",
    role: "Research Assistant | UTRA/SPRINT Award Recipient",
    period: "Nov. 2024 - Present",
    description: "Leading a project on 'grounding' constraints for LLM-centric data processing. Engineered a hybrid enforcement strategy combining proactive constrained decoding with reactive verification, achieving 40% higher grounding accuracy.",
    publication: {
      text: "Vision paper published in PVLDB 2025",
      link: "https://www.vldb.org/pvldb/vol18/p4073-lee.pdf"
    },
    tags: ["LLMs", "DBMS", "Systems Research"],
    languages: ["Python", "C++"],
  },
  {
    title: "O+: Performance Interface for Shell Scripts",
    advisor: "Prof. Nikos Vasilakis",
    role: "Research Assistant",
    period: "Jan. 2024 - Present",
    description: "Engineering a dynamic profiling layer that predicts runtime for POSIX shell scripts. Built low-level measurement tools for UNIX utilities to model data flow and optimize parallelization strategies.",
    publication: null,
    tags: ["Shell", "Systems", "Performance Engineering"],
    languages: ["C", "C++"],
  }
];

export function Research() {
  const { activeFilters } = useFilter();

  const matchesFilter = (project: typeof researchProjects[0]) => {
    if (activeFilters.length === 0) return true;
    const projectTags = [...project.tags, ...project.languages].map(t => t.toLowerCase());
    return activeFilters.some(filter => projectTags.includes(filter.toLowerCase()));
  };

  return (
    <Section id="research" title="Research" subtitle="Exploring the intersection of systems, data, and AI.">
      <div className="grid grid-cols-1 gap-4">
        {researchProjects.map((project, index) => (
          <div
            key={index}
            className={`group relative bg-slate-50 p-5 md:p-6 rounded-lg border border-slate-100 hover:border-primary-300 transition-all ${
              activeFilters.length > 0 && !matchesFilter(project) ? 'opacity-40' : ''
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-medium mt-1">{project.advisor}</p>
                <p className="text-slate-500 text-sm mt-0.5">{project.role}</p>
              </div>
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap h-fit">
                {project.period}
              </span>
            </div>

            <p className="text-slate-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            {project.publication && (
              <a
                href={project.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary-700 font-medium text-sm mb-4 hover:text-primary-800 hover:underline transition-colors"
              >
                <FileText size={14} />
                {project.publication.text}
              </a>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-md border border-primary-100">
                  {tag}
                </span>
              ))}
              {project.languages.map(lang => (
                <span key={lang} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
