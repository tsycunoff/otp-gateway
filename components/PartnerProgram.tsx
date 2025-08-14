
import React from 'react';

interface PartnerProgramProps {
    onOpenModal: () => void;
}

const lifetimeData = [
    { tariff: 'S', commission: '20%', inMoney: '400₽', weKeep: '~830₽' },
    { tariff: 'M', commission: '15%', inMoney: '900₽', weKeep: '~2140₽' },
    { tariff: 'L', commission: '12%', inMoney: '1500₽', weKeep: '~3750₽' },
];

const onetimeData = [
    { tariff: 'S', commission: '30%', inMoney: '600₽' },
    { tariff: 'M', commission: '25%', inMoney: '1500₽' },
    { tariff: 'L', commission: '20%', inMoney: '2500₽' },
];

const CommissionTable = ({ data, headers }: { data: any[], headers: string[] }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left">
            <thead>
                <tr>
                    {headers.map(header => (
                         <th key={header} className="py-3 px-4 bg-gray-700/50 font-semibold text-sm text-gray-300 uppercase">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="border-t border-gray-700">
                        {Object.values(row).map((cell: any, cellIndex: number) => (
                             <td key={cellIndex} className={`py-3 px-4 text-gray-200 ${cellIndex === 0 ? 'font-bold' : ''}`}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


const PartnerProgram = ({ onOpenModal }: PartnerProgramProps) => {
    return (
        <section id="partners" className="py-20 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Партнёрская программа для дилеров</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Зарабатывайте вместе с нами, предлагая клиентам современное и выгодное решение для OTP-авторизаций. Идеально для дилеров iiko и CRM-интеграторов.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="bg-gray-800/50 p-8 rounded-xl ring-1 ring-white/10 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-blue-400">Модель А — Lifetime комиссия</h3>
                        <p className="mt-2 text-gray-400 flex-grow">Получайте процент с каждого платежа клиента на протяжении всего времени его использования сервиса. Стабильный пассивный доход.</p>
                        <div className="mt-6">
                            <CommissionTable data={lifetimeData} headers={['Тариф', 'Комиссия', 'В деньгах', 'У нас после налога']} />
                        </div>
                         <p className="mt-4 text-sm text-gray-500">Выплаты производятся каждый раз, когда клиент совершает платёж.</p>
                    </div>

                    <div className="bg-gray-800/50 p-8 rounded-xl ring-1 ring-white/10 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-green-400">Модель B — One-time комиссия</h3>
                        <p className="mt-2 text-gray-400 flex-grow">Получите высокую единовременную выплату за каждого приведённого клиента. Идеально для тех, кто не хочет зависеть от регулярных начислений.</p>
                         <div className="mt-6">
                            <CommissionTable data={onetimeData} headers={['Тариф', 'Комиссия', 'В деньгах']} />
                        </div>
                        <p className="mt-4 text-sm text-gray-500">Выплата один раз, но выше. Отличный вариант для партнёров, нацеленных на быстрый результат.</p>
                    </div>
                </div>

                 <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Готовы стать партнёром?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        Это просто. Свяжитесь с нами, чтобы получить реферальную ссылку и все необходимые материалы для начала работы.
                    </p>
                    <div className="mt-8">
                        <button onClick={onOpenModal} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-600/20">
                           Стать партнёром
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PartnerProgram;
