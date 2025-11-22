import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách Hàng Nói Gì?</h2>
                    <p className="text-slate-400">Niềm tin được xây dựng từ những trải nghiệm thực tế</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((review) => (
                        <div key={review.id} className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700">
                            <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-600/20" />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                                    />
                                ))}
                            </div>
                            
                            <p className="text-slate-300 mb-6 italic">"{review.comment}"</p>
                            
                            <div className="flex items-center gap-4">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-brand-500" />
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <span className="text-xs text-brand-400 uppercase tracking-wider">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};