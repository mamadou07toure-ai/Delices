import { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare } from 'lucide-react';

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const whatsappMessage = `Bonjour Les Délices,

Je souhaite réserver une table :

👤 Nom : ${formData.name}
📱 Téléphone : ${formData.phone}
📅 Date : ${formData.date}
🕐 Heure : ${formData.time}
👥 Nombre de personnes : ${formData.guests}
${formData.message ? `💬 Message : ${formData.message}` : ''}

Merci !`;

    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/224620670758?text=${message}`, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
              Réservation
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Réservez Votre <span className="text-amber-600">Table</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Garantissez-vous une place dans notre restaurant et vivez une expérience culinaire inoubliable. 
              Notre équipe est à votre écoute pour toute demande particulière.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    Contactez-nous
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Pour toute question ou réservation urgente
                  </p>
                  <a
                    href="tel:+224620670758"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    +224 620 67 07 58
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    Horaires d'ouverture
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lundi - Vendredi : 11h00 - 23h00</p>
                    <p>Samedi - Dimanche : 10h00 - Minuit</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    Événements Privés
                  </h3>
                  <p className="text-gray-600">
                    Organisez vos événements dans notre espace privatisable. 
                    Contactez-nous pour plus d'informations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-xl border border-amber-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-gray-700 mb-2">
                  <User className="h-4 w-4 text-amber-600" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-gray-700 mb-2">
                  <Phone className="h-4 w-4 text-amber-600" />
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+224 XXX XXX XXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="flex items-center gap-2 text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 text-amber-600" />
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="flex items-center gap-2 text-gray-700 mb-2">
                    <Clock className="h-4 w-4 text-amber-600" />
                    Heure *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="flex items-center gap-2 text-gray-700 mb-2">
                  <Users className="h-4 w-4 text-amber-600" />
                  Nombre de personnes *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'personne' : 'personnes'}
                    </option>
                  ))}
                  <option value="10+">Plus de 10 personnes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-gray-700 mb-2">
                  <MessageSquare className="h-4 w-4 text-amber-600" />
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Demandes spéciales, allergies, préférences..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                Réserver via WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
