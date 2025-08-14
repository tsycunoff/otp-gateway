
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import PartnerProgram from './components/PartnerProgram';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

function PartnersPage() {
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
          <PartnerProgram onOpenModal={openModal} />
        </main>
        <Footer onOpenModal={openModal} />
      </div>
    </>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PartnersPage />
  </React.StrictMode>
);
