
import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Имя обязательно для заполнения';
        if (!formData.email) {
            newErrors.email = 'Email обязателен для заполнения';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Некорректный формат email';
        }
        if (!formData.message) newErrors.message = 'Сообщение не может быть пустым';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitted(false);
        } else {
            setErrors({});
            // Тут могла бы быть логика отправки данных на сервер
            console.log('Form data submitted:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if(errors[name]) {
            const newErrors = {...errors};
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    return (
        <footer id="contact" className="bg-gray-800/50 border-t border-gray-800 py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Готовы сэкономить?</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Оставьте заявку, и мы свяжемся с вами в ближайшее время, чтобы обсудить детали и помочь с интеграцией. Подключение занимает всего 1 день!
                        </p>
                         <div className="mt-8">
                            <a href="/" className="inline-flex items-center space-x-2">
                                <LogoIcon className="h-10 w-10 text-blue-500" />
                                <span className="text-2xl font-bold text-white">OTP Gateway</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        {isSubmitted ? (
                            <div className="bg-green-900/50 border border-green-500 text-green-300 p-8 rounded-lg text-center h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold">Спасибо!</h3>
                                <p className="mt-2 text-lg">Ваша заявка успешно отправлена. Мы скоро с вами свяжемся.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Имя</label>
                                    <input type="text" name="name" id="name" placeholder="Ваше имя" required value={formData.name} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" required value={formData.email} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                     {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Телефон (необязательно)</label>
                                    <input type="tel" name="phone" id="phone" placeholder="Телефон (необязательно)" value={formData.phone} onChange={handleChange} className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Сообщение</label>
                                    <textarea name="message" id="message" rows={4} placeholder="Ваше сообщение" required value={formData.message} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Отправить заявку
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} OTP Gateway. Все права защищены.</p>
                     <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="/partners.html" className="hover:text-white transition-colors">Партнёрам</a>
                        <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
