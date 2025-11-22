import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TourList } from './components/TourList';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TourList />
        
        {/* FAQ Section Mini - Integrated here for flow */}
        <section className="py-16 bg-brand-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Bạn Còn Thắc Mắc?</h2>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                    Đừng ngần ngại. Đội ngũ tư vấn của chúng tôi sẵn sàng giải đáp mọi câu hỏi về lịch trình, thiết bị và mức độ an toàn.
                </p>
                <a href="#contact" className="inline-block px-8 py-3 bg-white border border-brand-500 text-brand-600 font-bold rounded-full hover:bg-brand-500 hover:text-white transition-all">
                    Liên Hệ Tư Vấn Ngay
                </a>
            </div>
        </section>

        <Reviews />
        
        <div id="gallery" className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
            <img src="https://picsum.photos/600/600?random=20" alt="Gallery 1" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://picsum.photos/600/600?random=21" alt="Gallery 2" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://picsum.photos/600/600?random=22" alt="Gallery 3" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://picsum.photos/600/600?random=23" alt="Gallery 4" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;