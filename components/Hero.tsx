import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://picsum.photos/1920/1080?random=99" 
                    alt="Adventure Background" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-500 border border-brand-500/50 text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-md">
                    Khám phá giới hạn
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-xl">
                    VƯỢT QUA <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-yellow-400">
                        CHÍNH MÌNH
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 font-light max-w-2xl mx-auto">
                    Hành trình của bạn bắt đầu nơi vùng an toàn kết thúc. Tham gia cùng chúng tôi để chinh phục những địa danh hùng vĩ nhất.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#tours" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30">
                        Đặt Tour Ngay
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#about" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-full transition-all flex items-center justify-center">
                        Tìm Hiểu Thêm
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <ChevronDown className="w-8 h-8" />
            </div>
        </section>
    );
};