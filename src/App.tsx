import { Layout } from './components/Layout';
import { FilterProvider } from './context/FilterContext';
import { WorkSection } from './components/WorkSection';
import { Hero } from './sections/Hero';
import { Research } from './sections/Research';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function App() {
  return (
    <FilterProvider>
      <Layout>
        <Hero />
        <WorkSection>
          <Research />
          <Experience />
          <Projects />
        </WorkSection>
        <Skills />
      </Layout>
    </FilterProvider>
  );
}

export default App;
