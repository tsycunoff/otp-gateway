import React, { useState } from 'react';
import type { FAQItem as FAQItemType } from '../types';
import { ChevronDownIcon } from './icons';

const faqData: FAQItemType[] = [
    {
        question: 'Чем Telegram OTP лучше SMS?',
        answer: 'Главные преимущества: цена (в 3-4 раза дешевле SMS), надежность (доставка 99.9%+ против потерь до 10% у SMS из-за спам-фильтров) и скорость интеграции (1 день вместо недель).'
    },
    {
        question: 'С какими системами есть готовая интеграция?',
        answer: 'У нас есть готовая "коробочная" интеграция с iikoCard. Для всех остальных CRM и систем мы предоставляем простой и понятный REST API, который ваш разработчик сможет интегрировать за 2-4 часа.'
    },
    {
        question: 'Что если у моих клиентов нет Telegram?',
        answer: 'На данный момент наше решение идеально подходит для аудиторий, где Telegram является популярным мессенджером. Мы сфокусированы на предоставлении лучшего сервиса через этот канал. В будущем мы планируем добавить резервные каналы, такие как SMS или WhatsApp.'
    },
    {
        question: 'Как происходит оплата и нужны ли договоры?',
        answer: 'Оплата происходит по ссылке, без необходимости заключать договоры и проводить сложные юридические процедуры. Мы предлагаем скидки 5% при оплате за квартал и 10% (+ бонусы) при оплате за год.'
    },
    {
        question: 'Насколько безопасен этот метод?',
        answer: 'Доставка OTP-кодов через Telegram является безопасным методом. Сообщения доставляются напрямую пользователю в его аккаунт, а сам Telegram использует сквозное шифрование для "секретных чатов" и надежное шифрование для всех остальных коммуникаций.'
    }
];

interface FAQItemProps {
    item: FAQItemType;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ item, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-700 py-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-white hover:text-blue-400 transition-colors">{item.question}</h3>
                <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pt-4 text-gray-300">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Часто задаваемые вопросы</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Есть вопросы? У нас есть ответы. Если вы не нашли то, что искали, свяжитесь с нами.
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;