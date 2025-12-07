import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};

export default WhatsAppFloat;