import { Rocket, Linkedin, Youtube, Mail, MapPin, Instagram } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import Button from './ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom,_#080808,_#0A3622)] text-white py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket size={24} className="text-secondary" />
              <span className="font-Poppins font-bold text-xl">CACTUS ROCKETS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Projeto universitário desenvolvendo foguetes modelo para fins educacionais e competições aeroespaciais.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/cactus-rockets-design-crd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/cactusrockets/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@cactusrocketsdesign/about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-Poppins font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              {['inicio', 'quem-somos', 'projetos', 'equipe', 'blog'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-secondary transition-colors cursor-pointer"
                  >
                    {item.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-Poppins font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 text-secondary" />
                <span className="text-gray-400 break-words">cactusrockets@univasf.edu.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-secondary" />
                <span className="text-gray-400">
                  UNIVASF - Campus Juazeiro<br />
                  Av. Antônio Carlos Magalhães, 510<br />
                  Juazeiro-BA, Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-Poppins font-semibold text-lg mb-4">Inscreva-se</h3>
            <p className="text-gray-400 text-sm mb-4">Receba nossas novidades e atualizações</p>
              <form className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 bg-muted/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-gray-500"
                />
                <Button
                  className="w-full md:w-auto bg-secondary text-black hover:bg-secondary/80 font-medium transition-all hover:scale-105 h-10 px-6 whitespace-nowrap"
                >
                  Inscrever-se
                </Button>
              </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2025 Cactus Rockets Design. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
