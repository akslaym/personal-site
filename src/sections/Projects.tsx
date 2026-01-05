import { Section } from '../components/ui/Section';
import { ExternalLink, Github } from 'lucide-react';
import { useFilter } from '../context/FilterContext';

const projects = [
  {
    title: "24cast.org Election Predictor",
    description: "Interactive election prediction platform with 5,000+ daily visits. Built with React, AWS DynamoDB, Lambda, and API Gateway. Features real-time election data integration and a touchscreen UI for 2,000+ attendees.",
    tech: ["React", "TypeScript", "AWS", "DynamoDB"],
    link: "https://24cast.org",
    github: null,
    image: "/24cast-preview.png",
    period: "2024"
  },
  {
    title: "Brown Political Review Website",
    description: "Complete redesign of the Brown Political Review publication platform using Next.js. Developed a custom 'games page' inspired by NYT and migrated backend to SQL.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind"],
    link: "https://brownpoliticalreview.org",
    github: null,
    image: "/bpr-preview.png",
    period: "2023 - Present"
  }
];

export function Projects() {
  const { activeFilters } = useFilter();

  const matchesFilter = (project: typeof projects[0]) => {
    if (activeFilters.length === 0) return true;
    const projectTech = project.tech.map(t => t.toLowerCase());
    return activeFilters.some(filter => projectTech.includes(filter.toLowerCase()));
  };

  return (
    <Section id="projects" title="Selected Projects" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col h-full bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group ${
                activeFilters.length > 0 && !matchesFilter(project) ? 'opacity-40' : ''
              }`}
            >
              <div className="h-44 bg-slate-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{project.period}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-2 border-t border-slate-100">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary-700 text-sm font-medium hover:underline">
                      <ExternalLink size={14} />
                      Visit Site
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
