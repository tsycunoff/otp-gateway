
import React, { useState } from 'react';

interface ContactFormProps {
    onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
    const [formData, setFormData] = useState({ name: '', telegram: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Имя обязательно для заполнения';
        if (!formData.telegram.trim()) {
            newErrors.telegram = 'Ник в Telegram обязателен для связи';
        } else if (!/^[a-zA-Z0-9_]{5,32}$/.test(formData.telegram.replace('@', ''))) {
            newErrors.telegram = 'Некорректный формат ника в Telegram';
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Некорректный формат email';
        }
        if (!formData.message.trim()) newErrors.message = 'Сообщение не может быть пустым';
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
            console.log('Form data submitted:', formData);
            setIsSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    if (isSubmitted) {
        return (
            <div className="p-8 sm:p-12 text-center">
                <h3 className="text-2xl font-bold text-white">Спасибо!</h3>
                <p className="mt-2 text-lg text-gray-300">Ваша заявка успешно отправлена. Мы скоро с вами свяжемся в Telegram.</p>
                <button onClick={onClose} className="mt-6 w-full bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                    Закрыть
                </button>
            </div>
        );
    }
    
    return (
        <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Оставить заявку</h2>
            <p className="mt-2 text-gray-400">
                Мы свяжемся с вами в Telegram, чтобы помочь с интеграцией.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                 <div>
                    <label htmlFor="name" className="sr-only">Имя</label>
                    <input type="text" name="name" id="name" placeholder="Ваше имя *" required value={formData.name} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="telegram" className="sr-only">Ник в Telegram</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">@</span>
                        <input type="text" name="telegram" id="telegram" placeholder="Ник в Telegram *" required value={formData.telegram} onChange={handleChange} className={`w-full pl-8 bg-gray-700/50 border ${errors.telegram ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    </div>
                     {errors.telegram && <p className="mt-1 text-sm text-red-400">{errors.telegram}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email (необязательно)</label>
                    <input type="email" name="email" id="email" placeholder="Email (необязательно)" value={formData.email} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                     {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Сообщение</label>
                    <textarea name="message" id="message" rows={4} placeholder="Ваше сообщение *" required value={formData.message} onChange={handleChange} className={`w-full bg-gray-700/50 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                        Отправить заявку
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
