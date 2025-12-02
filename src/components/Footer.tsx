import { ChefHat, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export function Footer({ setActiveSection }: FooterProps) {
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-amber-600 rounded-full">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl">Les Délices</span>
            </div>
            <p className="text-gray-400 mb-6">
              Restaurant africain moderne offrant une expérience culinaire authentique et raffinée au c��ur de Conakry.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Réserver
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" />
              Horaires
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="text-white">11h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="text-white">10h - 00h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-white">10h - 00h</span>
              </li>
              <li className="pt-3 border-t border-gray-800">
                <span className="text-amber-500">Service continu</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+224620670758"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    +224 620 67 07 58
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:contact@lesdelices.gn"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    contact@lesdelices.gn
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  Quartier Madina<br />
                  Conakry, Guinée
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Les Délices. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
