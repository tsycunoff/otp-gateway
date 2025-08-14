
import React from 'react';
import { LogoIcon, TwitterIcon, GithubIcon, LinkedinIcon } from './icons';

interface FooterProps {
    onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
    return (
        <footer className="bg-gray-800/50 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="/" className="inline-flex items-center space-x-2">
                            <LogoIcon className="h-10 w-10 text-blue-500" />
                            <span className="text-2xl font-bold text-white">OTP Gateway</span>
                        </a>
                        <p className="mt-4 text-gray-400 max-w-xs">
                           Простое и эффективное SaaS-решение для доставки OTP-сообщений через Telegram.
                        </p>
                         <div className="mt-6">
                             <button onClick={onOpenModal} className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
                                Связаться с нами
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Продукт</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#calculator" className="text-gray-400 hover:text-white transition-colors">Калькулятор</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Тарифы</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Компания</h3>
                        <ul className="mt-4 space-y-3">
                           <li><a href="/partners.html" className="text-gray-400 hover:text-white transition-colors">Партнёрам</a></li>
                           {/*<li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>*/}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Правовая информация</h3>
                        <ul className="mt-4 space-y-3">
                           <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
                           <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row-reverse justify-between items-center text-sm text-gray-400">
                     <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><GithubIcon className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><LinkedinIcon className="h-5 w-5" /></a>
                    </div>
                    <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} OTP Gateway. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
