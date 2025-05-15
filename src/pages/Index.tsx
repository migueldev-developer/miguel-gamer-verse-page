
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import GamesSection from '@/components/GamesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gamer-dark text-white">
      <Header />
      
      <main>
        <AboutSection />
        <SkillsSection />
        <GamesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
