import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Phone } from 'lucide-react';
import { images } from '../config/images';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Bonjour Les Délices, je souhaite obtenir plus d'informations.");
    window.open(`https://wa.me/224620670758?text=${message}`, '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={images.hero.main}
          alt="Restaurant Les Délices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-block px-4 py-2 bg-amber-600/90 rounded-full mb-6">
            <span className="text-sm">Restaurant Africain Moderne</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6">
            Bienvenue à<br />
            <span className="text-amber-500">Les Délices</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Découvrez une expérience culinaire authentique au cœur de la Guinée. 
            Des saveurs africaines traditionnelles revisitées avec passion et modernité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('reservation')}
              className="group inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Réserver une table
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleWhatsAppContact}
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full border-2 border-white/30 transition-all"
            >
              <Phone className="h-5 w-5" />
              Nous contacter
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}