import React from 'react';
import { Facebook, Instagram, Youtube, Compass } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6 text-white">
                            <Compass className="w-8 h-8 text-brand-500" />
                            <span className="text-xl font-bold">ADRENALINE</span>
                        </a>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Khơi dậy niềm đam mê khám phá. Chúng tôi mang đến những hành trình an toàn, đẳng cấp và đầy cảm xúc.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-4">Khám Phá</h4>
                        <ul className="space-y-3 text-sm">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}><a href={link.href} className="hover:text-brand-500 transition-colors">{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Hỗ Trợ</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Câu hỏi thường gặp</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Điều khoản dịch vụ</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Chính sách bảo mật</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Hướng dẫn thanh toán</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Kết Nối</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Adrenaline Expeditions. All rights reserved.
                </div>
            </div>
        </footer>
    );
};