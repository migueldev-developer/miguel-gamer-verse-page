
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const target = document.getElementById('sobre-mim');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="sobre-mim" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Sobre Mim</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                E aí! <span className="text-gamer-green">👋</span> Meu nome é <span className="text-gamer-purple font-bold">Miguel</span> e tenho 11 anos. 
                Sou apaixonado por jogos, tecnologia e sempre estou querendo aprender coisas novas!
              </p>
              
              <p className="text-lg leading-relaxed">
                Quando não estou na escola, você vai me encontrar construindo mundos incríveis no 
                <span className="text-gamer-blue font-bold"> Minecraft</span>, 
                criando projetos legais no <span className="text-gamer-purple font-bold">Roblox</span> ou 
                treinando minhas habilidades em outros jogos.
              </p>
              
              <p className="text-lg leading-relaxed">
                No futuro, quero ser um <span className="text-gamer-green font-bold">programador de jogos</span> ou 
                um <span className="text-gamer-blue font-bold">youtuber de games</span>. 
                Já estou aprendendo algumas coisas sobre edição de vídeo e como os jogos funcionam!
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="neon-button">
                  Meus Projetos
                </button>
                <button className="neon-button">
                  Minha História
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gamer-purple to-gamer-blue opacity-20 animate-pulse-soft"></div>
                <div className="absolute inset-2 rounded-full bg-gamer-dark-blue border-4 border-gamer-purple animate-glow"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gamer-dark flex items-center justify-center">
                  <div className="text-9xl font-russo text-gamer-purple animate-float">M</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gamer-dark-blue p-4 rounded-lg border border-gamer-purple shadow-lg">
              <h3 className="font-russo text-gamer-purple text-2xl">11</h3>
              <p className="text-sm">Anos de Idade</p>
            </div>
            <div className="bg-gamer-dark-blue p-4 rounded-lg border border-gamer-blue shadow-lg">
              <h3 className="font-russo text-gamer-blue text-2xl">3+</h3>
              <p className="text-sm">Anos Jogando</p>
            </div>
            <div className="bg-gamer-dark-blue p-4 rounded-lg border border-gamer-green shadow-lg">
              <h3 className="font-russo text-gamer-green text-2xl">10+</h3>
              <p className="text-sm">Jogos Favoritos</p>
            </div>
            <div className="bg-gamer-dark-blue p-4 rounded-lg border border-gamer-purple-glow shadow-lg">
              <h3 className="font-russo text-gamer-purple-glow text-2xl">∞</h3>
              <p className="text-sm">Criatividade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
