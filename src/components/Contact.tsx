import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const whatsappMessage = `Bonjour Les Délices,

📝 NOUVEAU MESSAGE DE CONTACT

👤 Nom : ${formData.name}
${formData.email ? `📧 Email : ${formData.email}` : ''}
📱 Téléphone : ${formData.phone}
${formData.subject ? `📌 Sujet : ${formData.subject}` : ''}

💬 Message :
${formData.message}

---
Envoyé depuis le site web Les Délices`;

    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/224620670758?text=${message}`, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent("Bonjour Les Délices, j'aimerais obtenir plus d'informations.");
    window.open(`https://wa.me/224620670758?text=${message}`, '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Contactez <span className="text-amber-600">Les Délices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et demandes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">
              Téléphone
            </h3>
            <a
              href="tel:+224620670758"
              className="text-lg text-amber-600 hover:text-amber-700"
            >
              +224 620 67 07 58
            </a>
            <p className="text-sm text-gray-500 mt-2">Lun - Dim : 11h00 - 23h00</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">
              Email
            </h3>
            <a
              href="mailto:contact@lesdelices.gn"
              className="text-lg text-amber-600 hover:text-amber-700"
            >
              contact@lesdelices.gn
            </a>
            <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">
              Adresse
            </h3>
            <p className="text-gray-600">
              Quartier Madina<br />
              Conakry, Guinée
            </p>
            <p className="text-sm text-gray-500 mt-2">Parking disponible</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100">
            <h3 className="text-2xl text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+224 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-gray-700 mb-2">
                  Sujet
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Réservation">Réservation</option>
                  <option value="Information">Information générale</option>
                  <option value="Événement">Organisation d'événement</option>
                  <option value="Réclamation">Réclamation</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                Envoyer via WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>

          {/* Map & Quick Contact */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 h-[400px]">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl text-gray-900 mb-2">
                    Notre Localisation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Quartier Madina, Conakry
                  </p>
                  <p className="text-sm text-gray-500">
                    Facilement accessible en voiture ou en transport public
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900">
                    Contact WhatsApp
                  </h3>
                  <p className="text-gray-600">Réponse rapide garantie</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Besoin d'une réponse immédiate ? Contactez-nous directement sur WhatsApp 
                pour un service client rapide et personnalisé.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Ouvrir WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
