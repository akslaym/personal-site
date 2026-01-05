import { Section } from '../components/ui/Section';

const skills = {
  Languages: ["C++", "Python", "Java", "JavaScript/TypeScript", "Dart"],
  "Web & Mobile": ["React", "Next.js", "Flutter", "Tailwind CSS", "HTML/CSS"],
  "Tools & Systems": ["AWS", "Git", "C", "VS Code", "Adobe XD", "Photoshop"],
  "Spoken Languages": ["English (Fluent)", "Spanish (Limited)", "Hindi (Elementary)"]
};

const interests = [
  "Lifting", "Volleyball", "Bollywood Dancing", "Mindfulness", "Yoga", "Soccer", "Tennis", "Trivia"
];

export function Skills() {
  return (
    <Section id="skills" title="Skills & Interests" className="bg-slate-50 mb-20 rounded-2xl border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Technical Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-800">Technical Skills</h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-md shadow-sm border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-800">Interests</h3>
          <div className="flex flex-wrap gap-3 content-start">
            {interests.map(interest => (
              <span key={interest} className="px-4 py-2 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {interest}
              </span>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-primary-900 rounded-xl text-white">
            <h4 className="font-bold text-lg mb-2">Let's Connect</h4>
            <p className="text-primary-100 mb-4">
              I'm always open to discussing systems research, web development, or a game of volleyball.
            </p>
            <a href="mailto:akshay_mehta@brown.edu" className="inline-block bg-white text-primary-900 px-6 py-2 rounded-lg font-bold hover:bg-primary-50 transition-colors">
              akshay_mehta@brown.edu
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}
