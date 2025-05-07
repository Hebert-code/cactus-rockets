import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </main>
    </div>
  );
}

export default App;
