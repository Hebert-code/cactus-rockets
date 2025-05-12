import { Rocket, Star, School, Compass } from "lucide-react";
import FeatureCard from "./ui/FeatureCard";
import SectionTitle from "./ui/SectionTitle";

const AboutSection = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-secondary" />,
      title: "Engenharia de Foguetes",
      description:
        "Desenvolvimento de foguetes modelo com base em princípios técnicos de engenharia aeroespacial.",
    },
    {
      icon: <Star className="h-10 w-10 text-secondary" />,
      title: "Competições Nacionais",
      description:
        "Participação em competições aeroespaciais brasileiras, representando a UNIVASF.",
    },
    {
      icon: <School className="h-10 w-10 text-secondary" />,
      title: "Formação Acadêmica",
      description:
        "Complementação da formação dos estudantes com aplicação prática de conhecimentos.",
    },
    {
      icon: <Compass className="h-10 w-10 text-secondary" />,
      title: "Pesquisa e Inovação",
      description:
        "Pesquisa em tecnologias aeroespaciais e desenvolvimento de soluções inovadoras.",
    },
  ];

  return (
    <section
      id="quem-somos"
      className="bg-[linear-gradient(to_bottom,_#080808,_#0A3622)] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto">
        
        <SectionTitle 
          title="Quem Somos"
          subtitle="O Cactus Rockets Design é um projeto universitário dedicado ao desenvolvimento 
           de foguetes modelo para fins educacionais e competições aeroespaciais."
        />

        {/* Bloco de história e imagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
              Nossa História
            </h3>
            <div className="w-16 h-1 bg-secondary mb-6 "></div>
            <p className="text-gray-300 mb-6 text-justify">
              O projeto CRD foi fundado em 2019 na Universidade Federal do Vale do São Francisco (UNIVASF), 
              por um grupo de estudantes apaixonados por tecnologia aeroespacial e determinados 
              a aplicar seus conhecimentos teóricos em projetos práticos.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              Desde então, temos crescido e evoluído, participando de competições nacionais e 
              desenvolvendo projetos de foguetes cada vez mais avançados e eficientes.
            </p>
            <p className="text-gray-300 text-justify">
              Nossa missão é promover o conhecimento aeroespacial, desenvolver tecnologias 
              inovadoras e inspirar a próxima geração de engenheiros e cientistas.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-lg transform rotate-3"></div>
            <div className="relative bg-muted rounded-lg overflow-hidden border border-white/10 shadow-xl">
              <div className="w-full h-full min-h-[300px] flex items-center justify-center p-6">
                <div className="text-center">
                  <Rocket
                    size={64}
                    className="mx-auto text-secondary mb-4 animate-pulse"
                  />
                  <p className="font-medium text-white">Equipe Cactus Rockets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards com os pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
