
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gamer-dark-blue text-white/70">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-md bg-gamer-purple flex items-center justify-center mb-4">
            <span className="font-russo text-xl">M</span>
          </div>
          
          <h3 className="text-xl font-russo mb-4">
            <span className="text-white">Miguel</span>
            <span className="text-gamer-purple"> – </span>
            <span className="text-gamer-blue">Gamer e Criador</span>
          </h3>
          
          <p className="mb-4">
            "Cada jogo é uma nova aventura" 🎮
          </p>
          
          <div className="flex gap-4 my-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gamer-dark flex items-center justify-center border border-gamer-purple hover:bg-gamer-purple/20 transition-colors">
              <span className="text-xl">💻</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gamer-dark flex items-center justify-center border border-gamer-blue hover:bg-gamer-blue/20 transition-colors">
              <span className="text-xl">🎮</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gamer-dark flex items-center justify-center border border-gamer-green hover:bg-gamer-green/20 transition-colors">
              <span className="text-xl">📹</span>
            </a>
          </div>
          
          <p className="text-sm">
            &copy; {currentYear} - Portfólio de Miguel | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
