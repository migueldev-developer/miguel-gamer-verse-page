
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const target = document.getElementById('contato');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato, responderemos em breve!",
      variant: "default",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-gamer-dark-blue/40">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Entre em Contato</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-russo text-gamer-purple">Me mande uma mensagem!</h3>
              <p className="text-lg">
                Tem alguma dica de jogo? Quer conversar sobre Minecraft ou Roblox? 
                Ou só quer dizer oi? Mande uma mensagem!
              </p>
              
              <div className="neon-border p-6 mt-8">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gamer-blue font-russo text-lg mb-2">PLAYER</p>
                    <h3 className="text-3xl font-russo text-gamer-purple">MIGUEL</h3>
                    <p className="mt-4 text-gray-300">Nível 11 • Gamer Experiente</p>
                    <div className="mt-4 bg-gamer-dark rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-gamer-blue to-gamer-purple h-full w-3/4"></div>
                    </div>
                    <p className="text-xs mt-1 text-gray-400">XP: 750/1000</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gamer-dark border border-gamer-purple/30 focus:border-gamer-purple rounded-md p-3 text-white"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gamer-dark border border-gamer-purple/30 focus:border-gamer-purple rounded-md p-3 text-white"
                    placeholder="Onde posso te responder?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gamer-dark border border-gamer-purple/30 focus:border-gamer-purple rounded-md p-3 text-white"
                    placeholder="O que você quer me contar?"
                  ></textarea>
                </div>
                
                <button type="submit" className="neon-button w-full">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
