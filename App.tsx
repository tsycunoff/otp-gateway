
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
      <div className="bg-gray-900 min-h-screen">
        <Header onOpenModal={openModal} />
        <main>
          <Hero onOpenModal={openModal} />
          <Calculator />
          <HowItWorks />
          <Features />
          <Pricing onOpenModal={openModal} />
          <FAQ />
        </main>
        <Footer onOpenModal={openModal} />
      </div>
    </>
  );
}

export default App;
