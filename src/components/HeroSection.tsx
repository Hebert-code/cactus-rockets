import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, delay: number}>>([]);

    useEffect(() => {
      const createStars = () => {
        const starsArray = [];
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
          starsArray.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            delay: Math.random() * 3
          });
        }
        
        setStars(starsArray);
      };
      
      createStars();
    }, []);

    return (
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-cosmic-black overflow-hidden">
          {/* Stars background */}
          <div className="absolute inset-0 z-0">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full animate-twinkle"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: 'white',
                  opacity: star.opacity,
                  animationDelay: `${star.delay}s`
                }}
              />
            ))}
          </div>
          <div className=" flex-col md:flex-row items-center justify-between">
            <div className=" inline-flex items-center px-3 py-1 bg-cosmic-black text-secondary rounded-full mb-6">
              <Rocket size={16} className="mr-2"/>
              <span className="text-green-500 font-medium mb-2 inline-block">Projeto Aeroespacial UNIVASF</span>
            </div>

            <div className="absolute top-32 left-10 w-16 h-16 bg-cosmic-black rounded-full animate-float z-0"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-cosmic-black rounded-full animate-float z-0" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 right-1/4 w-24 h-24 hexagon bg-cosmic-black animate-float z-0" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-40 left-1/3 w-36 h-36 hexagon border border-light/20 animate-rotate z-0" style={{animationDelay: '3s'}}></div>

            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-white">CACTUS</span>
              <br/>
              <span className="bg-gradient-to-r from-dark to-light bg-clip-text text-transparent font-bold">ROCKETS DESIGN</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Desenvolvemos foguetes modelo para fins educacionais e competições aeroespaciais, 
              impulsionando o conhecimento e a inovação tecnológica.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="inline-flex items-center justify-center bg-light hover:bg-secondary/80 px-4 py-2 font-medium text-black transform hover:scale-105 transition-all shadow-dark rounded-lg">
                Nossos Projetos
              </button>
              <button className="border-secondary text-secondary hover:bg-secondary/20 transition-all transform hover:scale-105 shadow-dark">
                Conheça-nos
              </button>
            </div>
          </div>
    
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative animate-float" style={{animationDelay: '1.2s'}}>
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-light to-cosmic-black rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-cosmic-black to-light rounded-full flex items-center justify-center">
                  <Rocket size={96} className="text-white transform -rotate-45" />
                </div>
                <div className="absolute inset-0 border-4 border-white/10 rounded-full shadow-dark"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-cosmic-black text-sm font-medium px-3 py-1 rounded-full shadow-dark">
                Desde 2019
              </div>
            </div>
          </div>
      </section>
    );
  }

export default HeroSection