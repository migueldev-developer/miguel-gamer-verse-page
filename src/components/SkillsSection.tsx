
import { useState, useEffect } from 'react';
import { Gamepad, Computer, Video, Edit } from 'lucide-react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
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
    
    const target = document.getElementById('habilidades');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const skills = [
    {
      name: 'Minecraft',
      description: 'Construções avançadas, redstone e mods',
      icon: Gamepad,
      color: 'bg-green-500/20 text-green-500 group-hover:bg-green-500/30'
    },
    {
      name: 'Roblox',
      description: 'Criação de mundos e scripts básicos',
      icon: Gamepad,
      color: 'bg-blue-500/20 text-blue-500 group-hover:bg-blue-500/30'
    },
    {
      name: 'Computação',
      description: 'Curiosidade e aprendizado sobre tecnologia',
      icon: Computer,
      color: 'bg-purple-500/20 text-purple-500 group-hover:bg-purple-500/30'
    },
    {
      name: 'Edição de Vídeo',
      description: 'Edição básica para compartilhar jogos',
      icon: Video,
      color: 'bg-red-500/20 text-red-500 group-hover:bg-red-500/30'
    },
    {
      name: 'Criatividade',
      description: 'Ideias e projetos criativos para games',
      icon: Edit,
      color: 'bg-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500/30'
    },
    {
      name: 'Jogos',
      description: 'Habilidade em diversos jogos eletrônicos',
      icon: Gamepad,
      color: 'bg-gamer-purple/20 text-gamer-purple group-hover:bg-gamer-purple/30'
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gamer-dark-blue/40">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Minhas Habilidades</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Estou sempre aprendendo novas habilidades e melhorando as que já tenho!</p>
            <button className="neon-button">
              Ver Todas as Habilidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
