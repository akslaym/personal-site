import type { ReactNode } from 'react';
import { useFilter } from '../context/FilterContext';
import { X } from 'lucide-react';

const filterTags = [
  "Python", "C++", "C", "TypeScript", "React", "Next.js", "AWS"
];

type WorkSectionProps = {
  children: ReactNode;
};

export function WorkSection({ children }: WorkSectionProps) {
  const { activeFilters, toggleFilter, clearFilters, hasFilter } = useFilter();

  return (
    <div className="relative">
      {/* Subtle background gradient for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 pointer-events-none" />

      {/* Filter bar - sticky on scroll */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400 mr-1">
              Filter:
            </span>
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  hasFilter(tag)
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-1 p-1 text-slate-400 hover:text-slate-600 rounded transition-colors"
                title="Clear all filters"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative">
        {children}
      </div>
    </div>
  );
}
