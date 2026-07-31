import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CompetitiveStats from "./components/CompetitiveStats";
import MasonryProjects from "./components/MasonryProjects";
import MinimalContact from "./components/MinimalContact";

const App = () => {
  return (
    <main className="bg-background min-h-screen text-primary relative">
      <FloatingNav />
      <Hero />
      <AboutSection />
      <CompetitiveStats />
      <MasonryProjects />
      <MinimalContact />
    </main>
  );
};

export default App;
