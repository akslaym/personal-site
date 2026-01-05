export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Akshay Mehta. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}
