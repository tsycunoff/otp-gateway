import React, { useState, useMemo } from 'react';
import { ShieldCheckIcon, BoltIcon, CurrencyDollarIcon, CpuChipIcon } from './icons';

const formatRubles = (value: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);
};

const plans = [
    { limit: 500, cost: 2000, name: 'Старт', pricePer: 4.00 },
    { limit: 2000, cost: 6000, name: 'Бизнес', pricePer: 3.00 },
    { limit: 5000, cost: 12500, name: 'Профи', pricePer: 2.50 },
    { limit: 15000, cost: 30000, name: 'Корпоративный', pricePer: 2.00 },
];

const Calculator = () => {
    const [messages, setMessages] = useState(5000);
    const smsPricePerMessage = 6.5;
    const smsPlatformFee = 2000;
    const senderNameFee = 3000;

    const { telegramCost, telegramPlanDescription } = useMemo(() => {
        if (messages <= plans[0].limit) {
            const smallestPlan = plans[0];
            return {
                telegramCost: smallestPlan.cost,
                telegramPlanDescription: `Тариф "${smallestPlan.name}"`
            };
        }

        for (let i = 0; i < plans.length; i++) {
            const currentPlan = plans[i];
            const nextPlan = plans[i + 1];

            if (messages > currentPlan.limit && (!nextPlan || messages <= nextPlan.limit)) {
                const overageMessages = messages - currentPlan.limit;
                const costWithOverage = currentPlan.cost + (overageMessages * currentPlan.pricePer);

                if (nextPlan && costWithOverage > nextPlan.cost) {
                    return {
                        telegramCost: nextPlan.cost,
                        telegramPlanDescription: `Тариф "${nextPlan.name}" (выгоднее доплаты за превышение)`,
                    };
                }

                return {
                    telegramCost: costWithOverage,
                    telegramPlanDescription: `Тариф "${currentPlan.name}" + ${formatRubles(overageMessages * currentPlan.pricePer)} доплата за сообщения сверх пакета`,
                };
            }
        }
        
        // Fallback for messages count greater than the largest plan
        const largestPlan = plans[plans.length - 1];
        const overageMessages = messages - largestPlan.limit;
        const costWithOverage = largestPlan.cost + (overageMessages * largestPlan.pricePer);
         return {
            telegramCost: costWithOverage,
            telegramPlanDescription: `Тариф "${largestPlan.name}" + ${formatRubles(overageMessages * largestPlan.pricePer)} доплата за сообщения сверх пакета`,
        };

    }, [messages]);

    const smsMessagesCost = messages * smsPricePerMessage;
    const smsTotalCost = smsMessagesCost + smsPlatformFee + senderNameFee;
    const savings = smsTotalCost - telegramCost;
    
    // Piecewise linear slider logic
    const minMessages = 100;
    const maxMessages = 50000;

    const messagesToSliderValue = (messagesValue: number): number => {
        const thresholdMessages = 5000;
        const sliderThreshold = 60; // First segment (up to 5k) takes 60% of slider width

        if (messagesValue <= thresholdMessages) {
            if (messagesValue <= minMessages) return 0;
            const scale = (messagesValue - minMessages) / (thresholdMessages - minMessages);
            return scale * sliderThreshold;
        } else {
            const scale = (messagesValue - thresholdMessages) / (maxMessages - thresholdMessages);
            return sliderThreshold + scale * (100 - sliderThreshold);
        }
    };

    const sliderValueToMessages = (sliderValue: number): number => {
        const threshold = 60; // 60% mark
        let newMessagesRaw: number;

        if (sliderValue <= threshold) {
            const scale = sliderValue / threshold;
            newMessagesRaw = minMessages + scale * (5000 - minMessages);
        } else {
            const scale = (sliderValue - threshold) / (100 - threshold);
            newMessagesRaw = 5000 + scale * (maxMessages - 5000);
        }
        const newMessages = Math.round(newMessagesRaw / 100) * 100;
        return Math.max(minMessages, Math.min(maxMessages, newMessages));
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sliderValue = parseFloat(e.target.value);
        setMessages(sliderValueToMessages(sliderValue));
    };
    
    const sliderValue = messagesToSliderValue(messages);

    const getPositionForLabel = (value: number) => {
        const sliderPos = messagesToSliderValue(value);
        return `${sliderPos}%`;
    };
    
    const sliderSteps = [100, 2000, 5000, 15000, 30000, 50000];

    return (
        <section id="calculator" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Калькулятор вашей выгоды</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Передвиньте ползунок, чтобы увидеть, сколько вы переплачиваете за SMS. Расчёты включают скрытые платежи, о которых SMS-агрегаторы часто умалчивают.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <label htmlFor="messages-range" className="block text-lg font-medium text-white mb-2">Количество сообщений в месяц: <span className="text-blue-400 font-bold">{messages.toLocaleString('ru-RU')}</span></label>
                        <div className="relative pt-8">
                            <input
                                id="messages-range"
                                type="range"
                                min="0"
                                max="100"
                                step="0.1"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
                            />
                             <div className="w-full absolute top-6">
                                {sliderSteps.map(step => (
                                    <div 
                                        key={step}
                                        className="absolute text-xs text-gray-400 text-center"
                                        style={{ left: getPositionForLabel(step), transform: 'translateX(-50%)' }}
                                    >
                                       <div className="h-2 w-px bg-gray-600"></div>
                                       <div className="mt-1">{step.toLocaleString('ru-RU')}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-20">
                        <div className="bg-red-900/30 p-6 rounded-xl ring-1 ring-red-500/50">
                            <h3 className="font-semibold text-white text-xl">Расходы на SMS</h3>
                            <p className="text-4xl font-extrabold text-red-400 mt-2">{formatRubles(smsTotalCost)}</p>
                            <p className="text-xs text-red-200 mt-2">{formatRubles(smsMessagesCost)} (сообщения) + {formatRubles(smsPlatformFee)} (платформа) + {formatRubles(senderNameFee)} (имя)</p>
                        </div>
                        <div className="bg-blue-900/30 p-6 rounded-xl ring-1 ring-blue-500/50">
                            <h3 className="font-semibold text-white text-xl">Расходы на Telegram OTP</h3>
                            <p className="text-4xl font-extrabold text-blue-400 mt-2">{formatRubles(telegramCost)}</p>
                            <p className="text-xs text-blue-200 mt-2">{telegramPlanDescription}</p>
                        </div>
                        <div className="bg-green-900/30 p-6 rounded-xl ring-1 ring-green-500/50 md:col-span-2 lg:col-span-1">
                            <h3 className="font-semibold text-white text-xl">Ваша экономия</h3>
                            <p className="text-4xl font-extrabold text-green-400 mt-2">{formatRubles(savings)}</p>
                            <p className="text-xs text-green-200 mt-2">в месяц</p>
                        </div>
                    </div>
                </div>

                 <div className="mt-20 max-w-4xl mx-auto">
                     <h3 className="text-2xl font-bold text-center text-white">Детальное сравнение</h3>
                     <div className="mt-8 border border-gray-700 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3">
                           <div className="py-3 px-4 bg-gray-800 font-bold text-sm text-gray-300">Параметр</div>
                           <div className="py-3 px-4 bg-gray-800 font-bold text-sm text-gray-300 text-center">SMS</div>
                           <div className="py-3 px-4 bg-gray-800 font-bold text-sm text-gray-300 text-center">Telegram OTP</div>
                        </div>
                         {[
                            { icon: <CurrencyDollarIcon className="h-6 w-6 text-blue-400"/>, feature: 'Цена', sms: 'от 6.5 ₽ + доп. сборы', telegram: 'от 2 ₽' },
                            { icon: <ShieldCheckIcon className="h-6 w-6 text-blue-400"/>, feature: 'Надёжность', sms: 'Потери до 10%', telegram: '99.9%+ доставка' },
                            { icon: <BoltIcon className="h-6 w-6 text-blue-400"/>, feature: 'Внедрение', sms: 'От 2 недель', telegram: '1 день (iiko/API)' },
                            { icon: <CpuChipIcon className="h-6 w-6 text-blue-400"/>, feature: 'Управление', sms: 'Ручной отчёт', telegram: 'Web-интерфейс + бот' }
                         ].map(row => (
                             <div key={row.feature} className="grid grid-cols-3 border-t border-gray-700 items-center">
                                 <div className="py-4 px-4 font-semibold text-white flex items-center gap-3">{row.icon} {row.feature}</div>
                                 <div className="py-4 px-4 text-gray-400 text-center">{row.sms}</div>
                                 <div className="py-4 px-4 text-green-400 font-bold text-center">{row.telegram}</div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;