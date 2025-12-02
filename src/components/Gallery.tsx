import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera } from 'lucide-react';
import { images } from '../config/images';

export function Gallery() {
  return (
    <div className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
            <Camera className="inline-block h-4 w-4 mr-2" />
            Galerie Photos
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Découvrez <span className="text-amber-600">Notre Univers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plongez dans l'ambiance chaleureuse de notre restaurant et découvrez la beauté de nos créations culinaires.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.gallery.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-600 rounded-full text-sm mb-2">
                    {image.category}
                  </span>
                  <p className="text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Suivez-nous sur les réseaux sociaux pour plus de photos et d'actualités
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
              Instagram
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}