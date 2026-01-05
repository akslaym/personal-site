# Project: Personal Site

## TL;DR (What we’re building)
A personal site for Akshay with portfolio and resume.
Primary success criteria: fast, accessible, SEO-friendly, easy to update content.

## Tech stack
- Framework: Vite + React 19
- Language: TypeScript
- Styling: Tailwind CSS
- Content: Hardcoded in components (no external JSON yet)
- Deployed on: GitHub Pages

## General Rules of Functioning 
Read this every time you open this document for the first time. The rules you must abide by are listed below: 
1. Upon starting every version of the site, you must first check the change log to see what changes have been made since the last version. 
2. You must then check the current TODOs to see what tasks need to be completed. If you find any tasks that need to be completed, you must complete them. 
3. Upon completing tasks you must update the change log with the updates you have made and how you thought through each solution. Essentially a design overview. 
4. You must generate new todos to be made on the next iteration of the site. This is more a brainstorm and some you suggest may be removed. 
5. If you ever run into any issues or errors, you must update the change log with the updates you have made, where you got stuck, and how you implemented a solution if there was one. 
6. You must generate a file-system architecure of the site to be used for the next iteration of the site, so that you do not need to grep and guess.

## Commands (canonical)
- Install: pnpm i | npm i
- Dev: pnpm dev
- Build: pnpm build
- Preview: pnpm preview
- Tests: pnpm test
- Lint/format: pnpm lint / pnpm format
- Typecheck: pnpm typecheck

## Project map (curated, not exhaustive)
- `src/` — application code
  - `src/app/` or `src/pages/` — routes
  - `src/components/` — shared UI components
  - `src/content/` — posts / pages content
- `public/` — static assets (images, icons)
- `styles/` — global styles (if applicable)

## Checks (Definition of Done)
Before updating the changelog, ensure:
- `pnpm build` succeeds
- `pnpm lint` (and `pnpm test` if it exists) succeeds
- No obvious a11y regressions on key pages (home / blog / project page)

## Current TODOs
Summary: Core functionality complete. Future iterations could focus on:
- [ ] Add real project screenshots when available, I've currently put two screenshots in the home directory. Place them accordingly, and name them correctly.
- [ ] Optimize for mobile experience (test on various devices)
- [ ] I added actual CV file to the home directly. Please place in public folder and name accordingly. 
- [ ] Finally, I have a domain akslaym.dev on cloudflare. Please deploy the site to this domain and make sure all assets carry over accurately. I want it to be live and look like it does on dev. Please also make sure all code abides by standards that can be published and deployed temporarily. I will vet these and provide feedback if needed later. Also, if you cannot deploy to cloudflare without more information, ask me for it and I will provide it.

## Changelog
### v0.3.0 — 2026-01-05
- Summary: Layout restructure and filtering improvements for better UX
- Files touched:
  - `src/sections/Hero.tsx` - Combined Hero, About, and Updates into single two-column layout with CV download button
  - `src/components/Navbar.tsx` - Fixed to consistent h-16 height
  - `src/components/Layout.tsx` - Removed redundant top padding
  - `src/context/FilterContext.tsx` - Refactored for multi-select filtering (array of filters)
  - `src/components/WorkSection.tsx` - Updated to use new multi-select filter API
  - `src/sections/Research.tsx` - Updated filter logic for multi-select
  - `src/sections/Experience.tsx` - Updated filter logic for multi-select
  - `src/sections/Projects.tsx` - Updated filter logic for multi-select
  - Removed: `src/sections/About.tsx`, `src/sections/Updates.tsx` (merged into Hero)
- Reasoning / design notes:
  - Hero restructure: Created two-column layout (3:2 ratio) with About/CTAs on left, Recent Updates on right. Full viewport height for impactful first impression.
  - CV button: Added download button linking to /resume.pdf (user needs to add actual PDF)
  - Navbar fix: Changed from variable py-4/py-6 to fixed h-16 to eliminate gap between navbar and sticky filter
  - Multi-select filter: Users can now select multiple tags (e.g., Python AND React). Items show if they match ANY selected filter. Clear button removes all filters.
  - Removed redundant sections: About and Updates are now inline in Hero, reducing scroll distance to reach work content.
- Follow-ups / future TODO ideas:
  - Add actual resume.pdf
  - Dark mode toggle
  - Mobile optimization
  - Real project screenshots

### v0.2.0 — 2026-01-05
- Summary: Design refinement iteration focusing on visual cohesion and professional presentation for PhD admissions/hiring committees
- Files touched:
  - `src/components/Navbar.tsx` - Changed logo to "AM" initials, added Google Scholar link, updated GitHub/LinkedIn with actual URLs
  - `src/sections/Hero.tsx` - Made more compact, removed duplicate bio (now in About)
  - `src/sections/About.tsx` - Simplified to inline text section (no card wrapper)
  - `src/sections/Research.tsx` - Added clickable VLDB publication link, removed hover arrows, cleaner card styling
  - `src/sections/Experience.tsx` - Simplified from timeline to clean card layout
  - `src/sections/Projects.tsx` - Added filter support, cleaner styling
  - `src/sections/Updates.tsx` - NEW: Recent Updates section for awards/news
  - `src/components/WorkSection.tsx` - NEW: Wrapper with integrated sticky filter bar
  - `src/components/Layout.tsx` - Added subtle dot pattern and gradient background
  - `src/App.tsx` - Reordered sections, wrapped work sections in WorkSection
  - Removed: `src/components/FilterBar.tsx` (replaced by WorkSection)
- Reasoning / design notes:
  - Name deduplication: Changed navbar logo to "AM" initials, keeping full name only in Hero
  - Section flow: Hero → About → Updates → Research → Experience → Projects → Skills (more logical for CV-style reading)
  - Filter integration: Moved filter into sticky bar within WorkSection wrapper - less awkward, always accessible
  - Visual interest: Added subtle dot pattern (opacity 1.5%) and gradient background to break up white space
  - Simpler Experience: Removed complex timeline in favor of clean stacked cards - easier to scan quickly
  - Publication links: VLDB paper now clickable with FileText icon
  - Social links: Added Google Scholar alongside GitHub, LinkedIn, Email
- Follow-ups / future TODO ideas:
  - Add actual project screenshots
  - Consider dark mode toggle
  - Add CV/resume download
  - Mobile optimization testing
### v0.1.0 — 2026-01-05
- Summary: Complete redesign focusing on a minimal, professional academic portfolio style
- Files touched:
  - `src/sections/Hero.tsx` - Redesigned to professional researcher style with name, title, and concise bio
  - `src/sections/About.tsx` - Removed styled quote formatting
  - `src/sections/Research.tsx` - Added publication highlights, language tags (Python, C++, C), role display
  - `src/sections/Experience.tsx` - Removed Project LETS, added tech stack tags for each role
  - `src/sections/Projects.tsx` - Added styled icon previews with gradient backgrounds
  - `src/App.tsx` - Reordered sections (Research now after Hero), added FilterProvider
  - `src/context/FilterContext.tsx` - New: React context for cross-section tag filtering
  - `src/components/FilterBar.tsx` - New: Horizontal filter bar with clickable tech tags
  - `eslint.config.js` - Fixed ESLint configuration compatibility
- Reasoning / design notes:
  - Hero: Moved from catchy slogan to professional introduction (name + title + bio). Inspired by academic researcher sites.
  - Research first: Placed Research section immediately after Hero to emphasize academic work, making it more like an interactive CV.
  - Filter system: Implemented opacity-based filtering that dims non-matching items when a tag is selected. Simple UX without hiding content completely.
  - Project previews: Used gradient backgrounds with Lucide icons instead of placeholder text. Provides visual interest while waiting for real screenshots.
  - Tags: Separated topic tags (green) from language tags (gray) for visual distinction across Research and Experience sections.
- Follow-ups / future TODO ideas:
  - Add actual social links when user provides them
  - Consider more sophisticated filtering (multi-select, persist in URL)
  - Add animations for section transitions
  - Consider adding a publications list with proper academic citations

## Known quirks / landmines
- ESLint warning on `FilterContext.tsx` about fast refresh (expected for context files)

## File System Architecture (v0.3.0)
```
/src
├── App.tsx                      # Main app - section ordering, providers
├── main.tsx                     # Entry point
├── index.css                    # Tailwind directives
├── /components
│   ├── Layout.tsx               # Navbar + main + Footer + background pattern
│   ├── Navbar.tsx               # Fixed nav (h-16) with "AM" logo, social links
│   ├── Footer.tsx               # Simple footer
│   ├── WorkSection.tsx          # Wrapper with sticky multi-select filter bar
│   └── /ui
│       └── Section.tsx          # Reusable section wrapper
├── /context
│   └── FilterContext.tsx        # Multi-select filter state (array-based)
├── /sections
│   ├── Hero.tsx                 # Combined: name, bio, CTAs, CV + Recent Updates (two-column)
│   ├── Research.tsx             # Research projects with publication links
│   ├── Experience.tsx           # Work experience cards
│   ├── Projects.tsx             # Project cards with filtering
│   └── Skills.tsx               # Skills grid + interests
└── /lib
    └── utils.ts                 # cn() utility for classnames
```
