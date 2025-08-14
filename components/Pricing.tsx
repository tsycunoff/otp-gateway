
import React from 'react';
import type { PricingPlan } from '../types';

interface PricingProps {
  onOpenModal: () => void;
}

const plans: PricingPlan[] = [
  {
    name: 'Старт',
    price: '2 000 ₽',
    pricePer: '/ мес',
    messages: '500 сообщений',
    pricePerMessage: '4.00 ₽ / сообщ.',
    features: ['Для тестирования и пилотных проектов'],
    isRecommended: false,
  },
  {
    name: 'Бизнес',
    price: '6 000 ₽',
    pricePer: '/ мес',
    messages: '2 000 сообщений',
    pricePerMessage: '3.00 ₽ / сообщ.',
    features: ['Лучший выбор для малого и среднего бизнеса'],
    isRecommended: true,
  },
  {
    name: 'Профи',
    price: '12 500 ₽',
    pricePer: '/ мес',
    messages: '5 000 сообщений',
    pricePerMessage: '2.50 ₽ / сообщ.',
    features: ['Для растущих компаний с большим потоком клиентов'],
    isRecommended: false,
  },
  {
    name: 'Корпоративный',
    price: '30 000 ₽',
    pricePer: '/ мес',
    messages: '15 000 сообщений',
    pricePerMessage: '2.00 ₽ / сообщ.',
    features: ['Максимальная выгода для крупных проектов и сетей'],
    isRecommended: false,
  },
];

const CheckIcon = () => (
    <svg className="h-6 w-6 text-blue-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

interface PricingCardProps {
    plan: PricingPlan;
    onOpenModal: () => void;
}

const PricingCard = ({ plan, onOpenModal }: PricingCardProps) => {
    const cardClasses = plan.isRecommended ? 'border-2 border-blue-500 bg-gray-800' : 'border border-gray-700 bg-gray-800/50';
    const buttonClasses = plan.isRecommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-500';

    return (
        <div className={`rounded-xl p-8 h-full flex flex-col ${cardClasses} relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-blue-400`}>
            {plan.isRecommended && (
                <div className="absolute top-0 right-0 text-xs font-semibold bg-blue-500 text-white px-3 py-1 rounded-bl-lg">РЕКОМЕНДУЕМ</div>
            )}
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-gray-400">{plan.messages}</p>
            <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-base font-medium text-gray-400 ml-1">{plan.pricePer}</span>
            </div>
            <div className="mt-2 text-lg font-semibold text-blue-400">{plan.pricePerMessage}</div>
            
            <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3">{feature}</span>
                    </li>
                ))}
                 <li className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3">API и интеграция с iikoCard</span>
                </li>
                 <li className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3">Поддержка по email и в чате</span>
                </li>
            </ul>
            <button onClick={onOpenModal} className={`block w-full text-center mt-8 rounded-lg py-3 font-semibold text-white transition-colors ${buttonClasses}`}>
                Оставить заявку
            </button>
        </div>
    );
};

const Pricing = ({ onOpenModal }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Гибкие тарифы для вашего бизнеса</h2>
          <p className="mt-4 text-lg text-gray-300">
            Выберите тариф, который идеально подходит для вашего объема авторизаций. Все тарифы включают доступ к API, веб-интерфейсу и полную поддержку.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} onOpenModal={onOpenModal} />
          ))}
        </div>
        <div className="mt-12 text-center text-gray-300 bg-gray-800/50 p-6 rounded-lg max-w-3xl mx-auto">
            <h4 className="font-bold text-xl text-white">Больше отправляете — больше экономите!</h4>
            <p className="mt-2">✨ Оплатите за <span className="font-bold">квартал</span> и получите <span className="text-green-400 font-bold">скидку 5%</span>.</p>
            <p className="mt-1">⭐️ Оплатите за <span className="font-bold">год</span> и получите <span className="text-green-400 font-bold">скидку 10%</span> + бонус-функции.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
