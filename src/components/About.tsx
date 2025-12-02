import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Heart, Users, Clock } from 'lucide-react';
import { images } from '../config/images';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Excellence Culinaire',
      description: 'Des plats préparés avec les meilleurs ingrédients locaux et internationaux.',
    },
    {
      icon: Heart,
      title: 'Passion & Tradition',
      description: 'Un savoir-faire transmis de génération en génération, sublimé par la créativité.',
    },
    {
      icon: Users,
      title: 'Ambiance Chaleureuse',
      description: 'Un cadre élégant et convivial pour tous vos moments en famille ou entre amis.',
    },
    {
      icon: Clock,
      title: 'Service Impeccable',
      description: 'Une équipe dévouée à votre service pour une expérience mémorable.',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
            Notre Histoire
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            À Propos de <span className="text-amber-600">Les Délices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis notre création, nous nous engageons à offrir une expérience gastronomique unique, 
            mêlant authenticité africaine et innovation culinaire.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={images.about.chef}
                alt="Chef Les Délices"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-gray-900 mb-6">
              Une Cuisine qui Raconte une Histoire
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Les Délices est né d'une passion profonde pour la cuisine africaine et d'un désir de 
              partager les richesses gastronomiques de notre continent avec le monde. Chaque plat 
              que nous servons est une célébration de notre héritage culturel.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe de chefs talentueux travaille avec dévouement pour créer des expériences 
              culinaires qui éveillent les sens et réchauffent les cœurs. Nous utilisons des 
              ingrédients frais et locaux, sélectionnés avec soin pour garantir la qualité et 
              l'authenticité de chaque création.
            </p>
            <p className="text-lg text-gray-600">
              Que vous veniez pour un déjeuner d'affaires, un dîner en famille ou une célébration 
              spéciale, Les Délices vous accueille dans un cadre raffiné où tradition et modernité 
              se rencontrent harmonieusement.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h4 className="text-xl text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}