import { Mail, FileText, Download, Award, Calendar } from 'lucide-react';

const updates = [
  {
    date: "Jan 2025",
    title: "PVLDB 2025 Publication",
    type: "publication",
    link: "https://www.vldb.org/pvldb/vol18/p4073-lee.pdf"
  },
  {
    date: "Nov 2024",
    title: "UTRA/SPRINT Award",
    type: "award",
    link: null
  },
  {
    date: "Fall 2025",
    title: "Head TA for CSCI0300",
    type: "news",
    link: null
  }
];

const iconMap = {
  publication: FileText,
  award: Award,
  news: Calendar
};

export function Hero() {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 w-full">
        {/* Left Column: Name, About, CTAs */}
        <div className="lg:col-span-3 space-y-6 animate-in slide-in-from-bottom-5 duration-700">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-3">
              Akshay Mehta
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 font-medium">
              Systems Researcher · Brown University
            </p>
          </div>

          <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-xl">
            <p>
              I am a senior studying Applied Mathematics and Computer Science (Sc.B).
              My research interest lies at the intersection of <span className="text-slate-800 font-medium">performance</span>, <span className="text-slate-800 font-medium">correctness</span>, and <span className="text-slate-800 font-medium">explainability</span> in systems.
            </p>
            <p>
              As LLMs and agentic systems become prevalent, I focus on building AI-augmented data systems that are fast, grounded, and supported by clear documentation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#research"
              className="px-4 py-2 bg-primary-700 text-white text-sm font-medium rounded-md hover:bg-primary-800 transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              Research
            </a>
            <a
              href="mailto:akshay_mehta@brown.edu"
              className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:border-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:border-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              CV
            </a>
          </div>
        </div>

        {/* Right Column: Recent Updates */}
        <div className="lg:col-span-2 animate-in slide-in-from-bottom-5 duration-700 delay-150 lg:pt-4">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
            Recent Updates
          </h2>
          <div className="space-y-4">
            {updates.map((update, index) => {
              const Icon = iconMap[update.type as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Icon size={16} className="text-primary-600" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block mb-1">
                      {update.date}
                    </span>
                    {update.link ? (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-800 hover:text-primary-700 transition-colors"
                      >
                        {update.title}
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-800">
                        {update.title}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
