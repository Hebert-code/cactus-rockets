import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Nicole", role: "Coordenadora Geral", image: "/placeholder.svg", linkedin: "https://www.linkedin.com/in/maria-nicolle/" },
    { name: "Carlos Oliveira", role: "Engenheiro Aeroespacial", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Marina Costa", role: "Designer de Estruturas", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Roberto Santos", role: "Especialista em Propulsão", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Juliana Mendes", role: "Desenvolvedora de Sistemas", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Paulo Ferreira", role: "Técnico de Eletrônica", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Fernanda Lima", role: "Analista de Dados", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Miguel Souza", role: "Engenheiro de Software", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
  ];

  return (
    <section
      id="equipe"
      className="p-24 text-white bg-[linear-gradient(to_top,_#0A3622,_#080808)]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-Poppins font-bold text-3xl md:text-4xl mb-4 relative">
            <span className="relative z-10">Nossa Equipe</span>
            <div className="absolute w-20 h-1 bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 mt-5" />
          </h2>
          <p className="text-gray-300 mt-8">
            Conheça os talentosos estudantes e professores que compõem nossa equipe multidisciplinar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-[rgba(0,0,0,0.8)]
                backdrop-blur-sm
                border-2 border-transparent
                rounded-lg
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:border-green-500
                hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]
              "
            >
              <div className="h-56 bg-cosmic-darkgray overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black to-transparent z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-secondary/80 text-cosmic-black text-xs font-medium py-1 px-2 z-20">
                  {member.role.split(" ")[0]}
                </div>
              </div>
              <div className="p-4 text-center relative">
                <h4 className="font-Poppins font-semibold text-lg mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-8 h-8
                    bg-cosmic-black text-secondary
                    border border-secondary/30
                    rounded-full
                    transition-colors
                    hover:bg-secondary hover:text-black
                  "
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="black-divider mb-6" />
          <p className="text-gray-300 mb-6">
            Interessado em fazer parte da nossa equipe? Estamos sempre abertos a novos talentos!
          </p>
          <a
            href="#contato"
            className="
              inline-block
              bg-secondary hover:bg-secondary/80
              text-cosmic-black font-medium
              py-3 px-8 rounded-md
              transition-transform transform hover:scale-105 shadow-dark
            "
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
