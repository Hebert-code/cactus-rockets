import { Rocket, ArrowDown } from "lucide-react";
import StarBackground from "./ui/StarBackground";
import Button from "./ui/Button";

const HeroSection = () => {

  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cosmic-black overflow-hidden px-4"
    >
      <StarBackground />

    <div className="absolute top-32 left-10 w-16 h-16 bg-cosmic-black rounded-full animate-float z-0"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-cosmic-black rounded-full animate-float z-0" style={{ animationDelay: "1s" }}></div>
    <div className="absolute top-1/4 right-1/4 w-24 h-24 hexagon bg-cosmic-black animate-float z-0" style={{ animationDelay: "2s" }}></div>
    <div className="absolute bottom-40 left-1/3 w-36 h-36 hexagon border border-light/20 animate-rotate z-0" style={{ animationDelay: "3s" }}></div>


      {/* Conteúdo principal */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center justify-center gap-8 z-10 text-center lg:text-left">
        {/* Coluna de texto */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Selo do projeto */}
          <div className="inline-flex items-center px-3 py-1 bg-cosmic-black text-secondary rounded-full mb-2">
            <Rocket size={16} className="mr-2" />
            <span className="text-green-500 font-medium">Projeto Aeroespacial UNIVASF</span>
          </div>

          {/* Título e descrição */}
          <div className="w-full md:w-3/4">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight whitespace-nowrap">
              <span className="text-white">CACTUS</span>
              <br />
              <span className="bg-gradient-to-r from-dark to-light bg-clip-text text-transparent font-bold">
                ROCKETS DESIGN
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Desenvolvemos foguetes modelo para fins educacionais e competições aeroespaciais, 
              impulsionando o conhecimento e a inovação tecnológica.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <Button
                size="lg"
                variant="primary"
                onClick={() => handleScroll("#projetos")}
              >
                Nossos Projetos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 bg-[#041b10] hover:border-white hover:text-white"
                onClick={() => handleScroll("#quem-somos")}
              >
                Conheça-nos
              </Button>
            </div>
          </div>
        </div>

        {/* Coluna de foguete */}
        <div className="w-full flex justify-center animate-fade-in-up mt-6 lg:mt-0" style={{ animationDelay: "0.6s" }}>
          <div className="relative animate-float" style={{ animationDelay: "1.2s" }}>
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-112 lg:h-112 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-light to-cosmic-black rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-cosmic-black to-light rounded-full flex items-center justify-center">
                <Rocket size={96} className="text-white transform -rotate-45 animate-lift-off" />
              </div>
              <div className="absolute inset-0 border-4 border-white/10 rounded-full shadow-dark"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary text-cosmic-black text-sm font-medium px-3 py-1 rounded-full shadow-dark">
              Desde 2019
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 mb-25">
        <div className="text-secondary opacity-60 font-bold animation-bounceDown">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
