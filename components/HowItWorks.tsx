import React from 'react';
import { CodeBracketIcon, PaperAirplaneIcon, ShieldCheckIcon } from './icons';

const steps = [
  {
    icon: <CodeBracketIcon className="h-10 w-10 text-blue-400" />,
    title: '1. Пришлите API-ключ',
    description: 'Свяжитесь с нами, чтобы получить ваш уникальный API-ключ для интеграции.',
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-400" />,
    title: '2. Быстрая интеграция',
    description: 'Мы подключаем Telegram и веб-интерфейс. Интеграция с iiko или CRM занимает всего 1 рабочий день.',
  },
  {
    icon: <PaperAirplaneIcon className="h-10 w-10 text-blue-400" />,
    title: '3. Выберите тариф и начните',
    description: 'Получите ссылку на оплату, выберите подходящий тариф и начинайте экономить.',
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Как начать</h2>
          <p className="mt-4 text-lg text-gray-300">
            Запустите отправку OTP-кодов через Telegram всего за 3 простых шага.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-gray-700/50 rounded-full ring-2 ring-blue-500/30">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;