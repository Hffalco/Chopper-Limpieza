import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulating submission
    setTimeout(() => {
        setFormStatus('success');
        // Reset after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contactanos</h2>
              <p className="text-gray-400">
                Estamos para asesorarte. Vení a nuestro local o escribinos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-primary mt-1" />
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p className="text-gray-400">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-primary mt-1" />
                <div>
                  <h4 className="font-bold">Horarios</h4>
                  <p className="text-gray-400">{CONTACT_INFO.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-primary mt-1" />
                <div>
                  <h4 className="font-bold">Teléfono / WhatsApp</h4>
                  <p className="text-gray-400">{CONTACT_INFO.whatsappDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-primary mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative border border-gray-700">
                <iframe 
                    title="Ubicación Chopper"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d-68.5!3d-31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiUyA2OMKwMzAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1600000000000!5m2!1ses!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Envianos tu consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                  placeholder="Tu celular"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Motivo</label>
                <select 
                  id="reason" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
                >
                  <option>Consulta General</option>
                  <option>Compra Minorista</option>
                  <option>Cotización Mayorista</option>
                  <option>Reclamo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-bold text-white transition-all ${
                    formStatus === 'success' 
                    ? 'bg-green-500' 
                    : 'bg-brand-primary hover:bg-sky-700'
                }`}
              >
                {formStatus === 'submitting' ? (
                    'Enviando...'
                ) : formStatus === 'success' ? (
                    '¡Enviado con éxito!'
                ) : (
                    <>
                        Enviar Mensaje <Send size={18} className="ml-2" />
                    </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;