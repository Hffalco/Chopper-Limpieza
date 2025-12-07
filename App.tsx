import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Offers />
        <Clients />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;