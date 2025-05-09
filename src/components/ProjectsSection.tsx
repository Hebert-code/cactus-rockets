import { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import ProjectFilter from "./ui/ProjectFilter";

const categories = ["Todos", "Foguete Experimental", "Foguete de Competição", "Foguete de Alta Performance"];

const projects = [  

  {
    id: 1,
    title: "Foguete Mandacaru I",
    description: "Primeiro protótipo desenvolvido pela equipe, participou da competição nacional em 2019.",
    category: "Foguete Experimental",
    image: "/placeholder.svg" // Placeholder image
  },
  {
    id: 2,
    title: "Foguete Sertão",
    description: "Modelo aprimorado com altímetro e sistema de recuperação avançado.",
    category: "Foguete de Competição",
    image: "/placeholder.svg" // Placeholder image
  },
  {
    id: 3,
    title: "Foguete Caatinga",
    description: "Projeto mais recente com motor de classe G e telemetria em tempo real.",
    category: "Foguete de Alta Performance",
    image: "/placeholder.svg" // Placeholder image
  }
];

const competitions = [
    {
        year: "2019",
        name: "Festival de Foguetes",
        location: "São Paulo, SP",
        achievement: "Participação",
      },
      {
        year: "2020",
        name: "MOBFOG",
        location: "Virtual",
        achievement: "5º Lugar",
      },
      {
        year: "2021",
        name: "MOBFOG",
        location: "Rio de Janeiro, RJ",
        achievement: "3º Lugar",
      },
      {
        year: "2022",
        name: "Olimpíada Brasileira de Satélites",
        location: "Natal, RN",
        achievement: "Menção Honrosa",
      },
]

const ProjectsSection = () => {
    
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

    return(
        <section id="projetos" className="bg-[linear-gradient(to_bottom,_#0A3622,_#080808)] text-white p-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-Poppins font-bold text-3xl md:text-4xl text-white mb-4 relative">
                        <span className="relative z-10">Nossos Projetos</span>
                        <div className=" absolute w-20 h-1 bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 mt-5"></div>
                    </h2>
                    <p className="text-gray-300 mt-8">Conheça os foguetes e competições desenvolvidos pela nossa equipe ao longo dos anos.</p>
                </div>

                <div className="mb-20">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                        <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white">
                            Foguetes Desenvolvidos
                        </h3>
                        <ProjectFilter
                            categories={categories}
                            active={activeCategory}
                            onChange={setActiveCategory}
                        />
                    </div>
                </div>
 


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.id} {...project} index={i} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-black transition">
                        Ver todos os projetos →
                    </button>
                </div>
            </div>

            <div>
                <div className="mt-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                        <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white">
                            Competições
                        </h3>
                    </div>
                </div>

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
                                <tr key={index} className={`${index % 2 === 0 ? "bg-cosmic-black/10" : "bg-transparent"} hover:bg-secondary/10 transition-colors`}>
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
        </section>
    );
};

export default ProjectsSection