
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gray-900 py-20 sm:py-32 lg:py-40">
       <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e62ff22,transparent)]"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            SMS устарели. Telegram — это новый стандарт OTP.
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Хватит платить 5-6₽ за каждую SMS-авторизацию. Замените их на OTP-коды в Telegram, экономьте в 3 раза и не теряйте ни одной доставки.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              Оставить заявку
            </button>
            <a
              href="#calculator"
              className="w-full sm:w-auto bg-gray-700/50 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-600/50 ring-1 ring-gray-600 transition-transform hover:scale-105"
            >
              Сравнить с SMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
