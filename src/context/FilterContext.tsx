import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

type FilterContextType = {
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
  clearFilters: () => void;
  hasFilter: (filter: string) => boolean;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = useCallback((filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setActiveFilters([]);
  }, []);

  const hasFilter = useCallback((filter: string) => {
    return activeFilters.includes(filter);
  }, [activeFilters]);

  return (
    <FilterContext.Provider value={{ activeFilters, toggleFilter, clearFilters, hasFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
