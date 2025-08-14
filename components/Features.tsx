import React from 'react';
import type { Feature } from '../types';
import { CodeBracketIcon, GlobeAltIcon, BoltIcon, LifebuoyIcon, ShieldCheckIcon, CpuChipIcon } from './icons';

const featuresData: Feature[] = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-blue-400" />,
    title: 'Готовая интеграция',
    description: 'Быстрое подключение к iikoCard или использование нашего стандартного API для любой CRM-системы.',
  },
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-blue-400" />,
    title: 'История отправок',
    description: 'Отслеживайте статус каждого сообщения в реальном времени: когда, куда и был ли код доставлен.',
  },
  {
    icon: <BoltIcon className="h-8 w-8 text-blue-400" />,
    title: 'Баланс в реальном времени',
    description: 'Контролируйте расход сообщений и пополняйте баланс через удобный веб-интерфейс.',
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-blue-400" />,
    title: 'Telegram-бот',
    description: 'Получайте отчёты и напоминания о низком балансе прямо в Telegram.',
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-blue-400" />,
    title: 'Простота использования',
    description: 'Никаких сложных настроек. Подключили, и всё уже работает "из коробки".',
  },
  {
    icon: <LifebuoyIcon className="h-8 w-8 text-blue-400" />,
    title: 'Поддержка и материалы',
    description: 'Мы предоставляем готовые материалы для быстрого старта и оказываем полную поддержку.',
  },
];

interface FeatureCardProps {
    feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
    <div className="bg-gray-800/50 p-6 rounded-lg ring-1 ring-white/10 hover:ring-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700">
            {feature.icon}
        </div>
        <h3 className="mt-5 text-lg font-medium text-white">{feature.title}</h3>
        <p className="mt-2 text-base text-gray-400">{feature.description}</p>
    </div>
);


const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Готовое SaaS-решение — подключили и работает</h2>
          <p className="mt-4 text-lg text-gray-300">
            Все, что нужно для быстрой интеграции и стабильной работы. Без сложных настроек и долгого ожидания.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;