import { useState } from 'react';
import { ShoppingCart, Wine, Coffee, Salad, X, Phone, User, MapPin, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('entrees');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderFormData, setOrderFormData] = useState({
    name: '',
    phone: '',
    address: '',
    order: '',
  });

  const categories = [
    { 
      id: 'entrees', 
      label: 'Entrées', 
      icon: Salad,
      image: 'https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXBwZXRpemVyJTIwc3RhcnRlcnN8ZW58MXx8fHwxNzY0NjcwMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      id: 'plats', 
      label: 'Plats Principaux', 
      icon: ShoppingCart,
      image: 'https://images.unsplash.com/photo-1647998270792-69ac80570183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFpbiUyMGRpc2glMjBmb29kfGVufDF8fHx8MTc2NDY3MDI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      id: 'desserts', 
      label: 'Desserts', 
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1762380832541-ddc6eb529345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZGVzc2VydCUyMHN3ZWV0fGVufDF8fHx8MTc2NDY3MDI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      id: 'boissons', 
      label: 'Boissons', 
      icon: Wine,
      image: 'https://images.unsplash.com/photo-1664993119473-013502f1e3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRyaW5rcyUyMGJldmVyYWdlc3xlbnwxfHx8fDE3NjQ2NzAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const menuItems = {
    entrees: [
      { 
        name: 'Salade César', 
        description: 'Laitue romaine croquante, parmesan, croûtons et sauce César maison', 
        price: '8,000 GNF',
        image: 'https://images.unsplash.com/photo-1747016538279-de25b466b79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGFwcGV0aXplcnxlbnwxfHx8fDE3NjQ2NzA3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Soupe à l\'Oignon Gratinée', 
        description: 'Soupe française traditionnelle avec oignons caramélisés et gruyère fondu', 
        price: '7,500 GNF',
        image: 'https://images.unsplash.com/photo-1549203438-a7696aed4dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBvbmlvbiUyMHNvdXB8ZW58MXx8fHwxNzY0NjUxNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Bruschetta Italienne', 
        description: 'Pain grillé avec tomates fraîches, basilic, ail et huile d\'olive', 
        price: '6,500 GNF',
        image: 'https://images.unsplash.com/photo-1536739782508-c2388552aad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwYXBwZXRpemVyfGVufDF8fHx8MTc2NDY3MDgwMHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Ailes de Poulet BBQ', 
        description: 'Ailes de poulet croustillantes avec sauce barbecue épicée', 
        price: '9,000 GNF',
        image: 'https://images.unsplash.com/photo-1600891964532-839fb6407dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd2luZ3MlMjBhcHBldGl6ZXJ8ZW58MXx8fHwxNzY0NjcwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
    ],
    plats: [
      { 
        name: 'Burger Gourmet', 
        description: 'Burger de bœuf premium avec cheddar, bacon, laitue et sauce maison', 
        price: '38,000 GNF',
        image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwYmVlZnxlbnwxfHx8fDE3NjQ2NzA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Steak Grillé', 
        description: 'Entrecôte de bœuf grillée, servie avec légumes de saison et pommes de terre', 
        price: '45,000 GNF',
        image: 'https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBtZWF0fGVufDF8fHx8MTc2NDU4MzQzNnww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Pâtes Carbonara', 
        description: 'Spaghetti crémeux avec pancetta, œuf et parmesan à l\'italienne', 
        price: '32,000 GNF',
        image: 'https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGl0YWxpYW58ZW58MXx8fHwxNzY0NjYwMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Pizza Margherita', 
        description: 'Pizza italienne classique avec mozzarella, tomates et basilic frais', 
        price: '28,000 GNF',
        image: 'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG1hcmdoZXJpdGElMjBpdGFsaWFufGVufDF8fHx8MTc2NDU5MzIyOXww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Saumon Grillé', 
        description: 'Filet de saumon grillé avec sauce citron et asperges', 
        price: '42,000 GNF',
        image: 'https://images.unsplash.com/photo-1641898378716-1f38ec04bb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBncmlsbGVkJTIwZmlzaHxlbnwxfHx8fDE3NjQ2MzY2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Côtes de Porc BBQ', 
        description: 'Travers de porc marinés et grillés avec sauce barbecue américaine', 
        price: '40,000 GNF',
        image: 'https://images.unsplash.com/photo-1723437395525-77b08e41e53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwYW1lcmljYW58ZW58MXx8fHwxNzY0NjcwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
    ],
    desserts: [
      { 
        name: 'Gâteau au Chocolat', 
        description: 'Fondant au chocolat noir avec crème anglaise vanille', 
        price: '9,500 GNF',
        image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjQ2NjY5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Tiramisu', 
        description: 'Dessert italien classique au café, mascarpone et cacao', 
        price: '8,500 GNF',
        image: 'https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGl0YWxpYW4lMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDY3MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Cheesecake New-Yorkais', 
        description: 'Cheesecake crémeux sur base de biscuit avec coulis de fruits rouges', 
        price: '10,000 GNF',
        image: 'https://images.unsplash.com/photo-1673551494394-23b13e77e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjQ2MzY5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Tarte aux Pommes', 
        description: 'Tarte américaine traditionnelle aux pommes avec glace vanille', 
        price: '8,000 GNF',
        image: 'https://images.unsplash.com/photo-1601000937971-d464714b9e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBpZSUyMGFtZXJpY2FufGVufDF8fHx8MTc2NDY3MDgwNHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
    ],
    boissons: [
      { 
        name: 'Jus Frais & Smoothies', 
        description: 'Sélection de jus de fruits frais et smoothies vitaminés', 
        price: '5,000 GNF',
        image: 'https://images.unsplash.com/photo-1641893754790-99d96ac55745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwc21vb3RoaWV8ZW58MXx8fHwxNzY0NTg0MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Mojito Classic', 
        description: 'Cocktail rafraîchissant à la menthe, citron vert et rhum (avec ou sans alcool)', 
        price: '6,500 GNF',
        image: 'https://images.unsplash.com/photo-1724155331840-263a0454d8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMG1vaml0byUyMGRyaW5rfGVufDF8fHx8MTc2NDY3MDgwNXww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Café Glacé Latte', 
        description: 'Espresso avec lait mousseux sur glace', 
        price: '4,500 GNF',
        image: 'https://images.unsplash.com/photo-1683649197410-c58e48ce4d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzY0NjcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Citronnade Maison', 
        description: 'Limonade fraîche préparée avec citrons pressés et menthe', 
        price: '3,500 GNF',
        image: 'https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9uYWRlJTIwZHJpbmt8ZW58MXx8fHwxNzY0NjA5OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Sodas Variés', 
        description: 'Coca-Cola, Sprite, Fanta et autres boissons gazeuses', 
        price: '2,500 GNF',
        image: 'https://images.unsplash.com/photo-1664993119473-013502f1e3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRyaW5rcyUyMGJldmVyYWdlc3xlbnwxfHx8fDE3NjQ2NzAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Thé Glacé', 
        description: 'Thé noir ou vert glacé avec citron et menthe', 
        price: '3,000 GNF',
        image: 'https://images.unsplash.com/photo-1641893754790-99d96ac55745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwc21vb3RoaWV8ZW58MXx8fHwxNzY0NTg0MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
    ],
  };

  const handleOpenOrderModal = () => {
    setShowOrderModal(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderFormData.name || !orderFormData.phone || !orderFormData.order) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const whatsappMessage = `Bonjour Les Délices,

📝 NOUVELLE COMMANDE EN LIGNE

👤 Nom : ${orderFormData.name}
📱 Téléphone : ${orderFormData.phone}
${orderFormData.address ? `📍 Adresse de livraison : ${orderFormData.address}` : ''}

🍽️ COMMANDE :
${orderFormData.order}

Merci !`;

    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/224620670758?text=${message}`, '_blank');

    setOrderFormData({
      name: '',
      phone: '',
      address: '',
      order: '',
    });
    setShowOrderModal(false);
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
            Notre Carte
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Menu <span className="text-amber-600">Les Délices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de plats savoureux inspirés des meilleures cuisines américaines et européennes.
          </p>
        </div>

        {/* Category Tabs with Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'ring-4 ring-amber-500 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image de fond */}
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-t from-amber-900/90 via-amber-700/70 to-amber-500/50'
                      : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-amber-900/80 group-hover:via-amber-700/60'
                  }`}></div>
                  
                  {/* Contenu */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <div className={`mb-3 p-3 rounded-full transition-all ${
                      activeCategory === category.id
                        ? 'bg-amber-500 scale-110'
                        : 'bg-white/20 backdrop-blur-sm group-hover:bg-amber-500 group-hover:scale-110'
                    }`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg text-center">
                      {category.label}
                    </h3>
                  </div>

                  {/* Indicateur actif */}
                  {activeCategory === category.id && (
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                      ✓
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-amber-200 hover:shadow-xl transition-all group"
            >
              {/* Image du plat */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Prix badge */}
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h4 className="text-xl text-gray-900 mb-3">
                  {item.name}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Order Button */}
        <div className="text-center">
          <button
            onClick={handleOpenOrderModal}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xl">Commander en ligne</span>
          </button>
          <p className="text-gray-500 mt-4">
            Passez votre commande facilement via WhatsApp
          </p>
        </div>

        {/* Order Modal */}
        {showOrderModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 my-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl text-gray-900">
                    🛒 Commander en ligne
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Remplissez le formulaire et nous vous contacterons sur WhatsApp
                  </p>
                </div>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleOrderSubmit} className="space-y-5">
                <div>
                  <label htmlFor="order-name" className="flex items-center gap-2 text-gray-700 mb-2">
                    <User className="h-4 w-4 text-amber-600" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="order-name"
                    value={orderFormData.name}
                    onChange={(e) => setOrderFormData({ ...orderFormData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="order-phone" className="flex items-center gap-2 text-gray-700 mb-2">
                    <Phone className="h-4 w-4 text-amber-600" />
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    id="order-phone"
                    value={orderFormData.phone}
                    onChange={(e) => setOrderFormData({ ...orderFormData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+224 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="order-address" className="flex items-center gap-2 text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    Adresse de livraison (optionnel)
                  </label>
                  <input
                    type="text"
                    id="order-address"
                    value={orderFormData.address}
                    onChange={(e) => setOrderFormData({ ...orderFormData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Quartier, rue, indication..."
                  />
                </div>

                <div>
                  <label htmlFor="order-details" className="flex items-center gap-2 text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 text-amber-600" />
                    Détails de votre commande *
                  </label>
                  <textarea
                    id="order-details"
                    value={orderFormData.order}
                    onChange={(e) => setOrderFormData({ ...orderFormData, order: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Exemple :&#10;- 2x Burger Gourmet&#10;- 1x Pizza Margherita&#10;- 3x Coca-Cola&#10;&#10;Précisez les quantités et tout autre détail..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    💡 Consultez le menu ci-dessus et notez ce que vous souhaitez commander
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Envoyer la commande via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOrderModal(false)}
                    className="px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    Annuler
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
