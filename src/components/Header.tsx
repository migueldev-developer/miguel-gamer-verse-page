
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gamer-dark-blue bg-opacity-95 shadow-lg py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gamer-purple flex items-center justify-center animate-pulse-soft">
            <span className="font-russo text-xl">M</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-russo">
            <span className="text-white">Miguel</span>
            <span className="text-gamer-purple"> – </span>
            <span className="text-gamer-blue">Gamer e Criador</span>
          </h1>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {["Sobre Mim", "Habilidades", "Meus Jogos Favoritos", "Contato"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="text-white hover:text-gamer-purple transition-colors font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gamer-purple group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gamer-dark-blue bg-opacity-95 py-4">
          <nav className="flex flex-col gap-4 container mx-auto px-4">
            {["Sobre Mim", "Habilidades", "Meus Jogos Favoritos", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-white hover:text-gamer-purple transition-colors py-2 font-medium border-b border-gray-800"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
