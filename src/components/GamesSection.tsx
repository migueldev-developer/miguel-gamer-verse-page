
import { useState, useEffect } from 'react';
import GameCard from './GameCard';

const GamesSection = () => {
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
    
    const target = document.getElementById('meus-jogos-favoritos');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const games = [
    {
      name: 'Minecraft',
      imagePath: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?w=800&auto=format&fit=crop',
      description: 'Construir mundos e explorar dimensões infinitas'
    },
    {
      name: 'Roblox',
      imagePath: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop',
      description: 'Criar jogos próprios e jogar criações da comunidade'
    },
    {
      name: 'Fortnite',
      imagePath: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=800&auto=format&fit=crop',
      description: 'Batalhas emocionantes e construções estratégicas'
    },
    {
      name: 'Among Us',
      imagePath: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=800&auto=format&fit=crop',
      description: 'Encontrar os impostores com amigos'
    },
    {
      name: 'Pokémon',
      imagePath: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=800&auto=format&fit=crop',
      description: 'Coletar e treinar os melhores pokémons'
    },
    {
      name: 'Super Mario',
      imagePath: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&auto=format&fit=crop',
      description: 'Aventuras divertidas com o encanador mais famoso'
    }
  ];

  return (
    <section id="meus-jogos-favoritos" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Meus Jogos Favoritos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <div key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="neon-button">
              Ver Mais Jogos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
