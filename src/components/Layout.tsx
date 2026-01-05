import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-gradient-to-b from-white via-slate-50/30 to-white selection:bg-primary-100 selection:text-primary-900">
      {/* Subtle dot pattern for visual interest */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #64748b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <Navbar />
      <main className="relative flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
