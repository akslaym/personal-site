import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-primary-700 hover:text-primary-800 transition-colors">
          AM
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-slate-200 mx-2" />
          <div className="flex gap-4">
            <a href="https://github.com/akslaym" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-mehta-1aa32a228/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://scholar.google.com/citations?user=WYXQ2v8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="Google Scholar">
              <GraduationCap size={20} />
            </a>
            <a href="mailto:akshay_mehta@brown.edu" className="text-slate-500 hover:text-primary-700 transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-600 hover:text-primary-700 block py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-slate-200 my-2" />
          <div className="flex gap-6 py-2">
            <a href="https://github.com/akslaym" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="GitHub">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-mehta-1aa32a228/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://scholar.google.com/citations?user=WYXQ2v8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors" title="Google Scholar">
              <GraduationCap size={22} />
            </a>
            <a href="mailto:akshay_mehta@brown.edu" className="text-slate-500 hover:text-primary-700 transition-colors" title="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
