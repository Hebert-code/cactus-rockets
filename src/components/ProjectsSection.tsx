import { useState, useRef } from "react";
import ProjectCard from "./ui/ProjectCard";
import ProjectFilter from "./ui/ProjectFilter";
import SectionTitle from "./ui/SectionTitle";
import ProjectsDetails from "./ui/ProjectsDetails";
import { projects } from "@/data/projects";
import { competitions } from "@/data/competitions";
import StarBackground from "./ui/StarBackground";

interface Projects {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const categories = ["Todos", "Foguete Experimental", "Foguete de Competição", "Foguete de Alta Performance"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expandedPost, setExpandedPost] = useState<Projects | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

  const handleToggle = () => {
    setShowAll(prev => {
      const newState = !prev;
      if (!newState && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return newState;
    });
  };

  return (
    <section id="projetos" className="relative bg-[linear-gradient(to_bottom,_#0A3622,_#080808)] text-white px-4 py-20 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <StarBackground/>
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Conheça os foguetes e competições desenvolvidos pela nossa equipe ao longo dos anos."
        />

        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white">
              Foguetes Desenvolvidos
            </h3>
            <ProjectFilter
              categories={categories}
              active={activeCategory}
              onChange={(cat) => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={i}
              onClick={() => setExpandedPost(project)}
            />
          ))}
        </div>

        {filtered.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={handleToggle}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-black transition"
            >
              {showAll ? "Ver menos ↑" : "Ver todos os projetos →"}
            </button>
          </div>
        )}

        <div className="mt-20">
          <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-6">
            Competições
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] bg-cosmic-black/30 rounded-lg border border-white/10 backdrop-blur-sm">
              <thead className="bg-cosmic-black/70">
                <tr>
                  <th className="py-4 px-6 text-left text-white">Ano</th>
                  <th className="py-4 px-6 text-left text-white">Competição</th>
                  <th className="py-4 px-6 text-left text-white">Local</th>
                  <th className="py-4 px-6 text-left text-white">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {competitions.map((comp, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-cosmic-black/10" : "bg-transparent"} hover:bg-secondary/10 transition-colors`}
                  >
                    <td className="py-4 px-6 font-medium text-secondary">{comp.year}</td>
                    <td className="py-4 px-6 text-gray-300">{comp.name}</td>
                    <td className="py-4 px-6 text-gray-300">{comp.location}</td>
                    <td className="py-4 px-6">
                      <span className="bg-cosmic-black text-secondary text-xs px-2 py-1 rounded-full font-medium">
                        {comp.achievement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {expandedPost && (
        <ProjectsDetails
          post={expandedPost}
          close={() => setExpandedPost(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
