import {
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  AboutSection,
} from "./components/Sections";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans cursor-pointer">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
