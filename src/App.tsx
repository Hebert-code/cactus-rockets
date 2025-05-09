import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <TeamSection/>
        <BlogSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
