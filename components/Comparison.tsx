import React from 'react';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-green-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const XIcon = () => (
    <svg className="h-6 w-6 text-red-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


const comparisonData = [
    {
        feature: 'Цена',
        sms: '5–6 ₽',
        telegram: 'от 2 ₽',
        icon: '💸'
    },
    {
        feature: 'Надёжность',
        sms: 'Потери до 10%',
        telegram: '99.9%+ доставка',
        icon: '🛡️'
    },
    {
        feature: 'Внедрение',
        sms: 'От 2 недель',
        telegram: '1 день (iikoCard/API)',
        icon: '⚡️'
    },
    {
        feature: 'Управление',
        sms: 'Ручной отчёт',
        telegram: 'Web-интерфейс + бот',
        icon: '📊'
    }
];

const smsCons = [
    'Стоимость до 100 000₽/мес в расход',
    'Sender ID ≠ 100% доставка (спам-фильтры)',
    'Растущий отказ клиентов от SMS',
    'Сложная интеграция, медленный запуск'
];

const telegramPros = [
    'Экономия от 15 000₽ в месяц (на 5000 SMS)',
    'Готовая интеграция с iikoCard',
    'История отправок и баланс в реальном времени',
    'Никаких сложных настроек — всё работает'
];

const Comparison = () => {
    return (
        <section id="comparison" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Telegram OTP против SMS: очевидная выгода</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Посмотрите, почему переход на Telegram для доставки OTP-кодов — это не просто тренд, а умное бизнес-решение.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                     <div className="bg-gray-900/50 p-6 rounded-xl ring-1 ring-red-500/30">
                        <h3 className="text-2xl font-semibold text-white flex items-center"><XIcon /> <span className="ml-2">Что не так с SMS</span></h3>
                        <ul className="mt-6 space-y-4 text-gray-300">
                            {smsCons.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <XIcon />
                                    <span className="ml-3">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="bg-gray-900/50 p-6 rounded-xl ring-1 ring-green-500/30">
                        <h3 className="text-2xl font-semibold text-white flex items-center"><CheckIcon /> <span className="ml-2">Что даёт Telegram OTP</span></h3>
                        <ul className="mt-6 space-y-4 text-gray-300">
                            {telegramPros.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="ml-3">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-300 border-b border-gray-700">Параметр</th>
                                    <th className="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-300 border-b border-gray-700">SMS</th>
                                    <th className="py-4 px-6 bg-gray-800 font-bold uppercase text-sm text-gray-300 border-b border-gray-700">Telegram OTP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-800/50">
                                        <td className="py-4 px-6 border-b border-gray-700 font-semibold text-white flex items-center"><span className="text-2xl mr-3">{row.icon}</span> {row.feature}</td>
                                        <td className="py-4 px-6 border-b border-gray-700 text-gray-400">{row.sms}</td>
                                        <td className="py-4 px-6 border-b border-gray-700 text-green-400 font-bold">{row.telegram}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <p className="mt-6 text-center text-lg text-gray-300 bg-gray-800/50 p-4 rounded-lg">
                        <span className="font-bold">Пример:</span> Если у вас 5000 сообщений в месяц — Telegram экономит от <span className="text-green-400 font-bold">15 000₽</span> ежемесячно.
                        <br/>И при этом вы ничем не рискуете.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comparison;