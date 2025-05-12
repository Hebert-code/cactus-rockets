import { Rocket, Menu, X } from "lucide-react";
import useMobileMenu from "../hooks/useMobileMenu";

const NavBar = () => {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Blog", href: "#blog" },
  ];

  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-cosmic-black/95 bg-opacity-80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
          <span className="font-Poppins font-bold text-lg sm:text-xl text-white">
            CACTUS ROCKETS
          </span>
        </div>

        {/* Desktop Menu + Botão */}
        <div className="hidden lg:flex items-center gap-7">
          <ul className="flex gap-8 font-medium">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleScroll(href)}
                  className="font-medium cursor-pointer text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleScroll("#contato")}
            className="inline-flex items-center justify-center bg-light hover:bg-secondary/80 px-4 py-2 font-medium text-black transform hover:scale-105 transition-all shadow-dark rounded-lg"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-light" />
            ) : (
              <Menu className="h-6 w-6 text-light" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-4 z-40 shadow-md transition-all">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => {
                  handleScroll(href);
                  closeMenu();
                }}
                className="block text-white text-base font-medium hover:text-secondary transition"
              >
                {label}
              </button>
            </li>
          ))}
          <button
            onClick={() => {
              handleScroll("#contato");
              closeMenu();
            }}
            className="mt-2 inline-flex items-center justify-center bg-light hover:bg-secondary/80 px-4 py-2 font-medium text-black transform hover:scale-105 transition-all shadow-dark rounded-lg"
          >
            Fale Conosco
          </button>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
