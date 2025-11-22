import React, { useState } from 'react';
import { TOURS, CATEGORY_ICONS } from '../constants';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

export const TourList: React.FC = () => {
    const [filter, setFilter] = useState<string>('All');

    const filteredTours = filter === 'All' 
        ? TOURS 
        : TOURS.filter(tour => tour.category === filter);

    const categories = ['All', 'Mountain', 'Water', 'Jungle', 'Air'];

    return (
        <section id="tours" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Các Tour Nổi Bật</h2>
                    <p className="text-slate-600">Chọn thử thách tiếp theo của bạn</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                filter === cat 
                                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                                : 'bg-white text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {cat === 'All' ? 'Tất cả' : cat}
                        </button>
                    ))}
                </div>

                {/* Tour Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTours.map((tour) => {
                        const Icon = CATEGORY_ICONS[tour.category as keyof typeof CATEGORY_ICONS];
                        return (
                            <div key={tour.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={tour.image} 
                                        alt={tour.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-slate-900">
                                        {tour.category}
                                    </div>
                                    {Icon && (
                                        <div className="absolute top-4 left-4 text-white drop-shadow-md">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{tour.title}</h3>
                                    </div>
                                    
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{tour.description}</p>
                                    
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {tour.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BarChart className="w-4 h-4" />
                                            <span className={
                                                tour.difficulty === 'Easy' ? 'text-green-500' :
                                                tour.difficulty === 'Medium' ? 'text-yellow-500' :
                                                tour.difficulty === 'Hard' ? 'text-orange-500' : 'text-red-600 font-bold'
                                            }>{tour.difficulty}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                                        <span className="text-lg font-bold text-brand-600">{tour.price}</span>
                                        <button className="text-slate-900 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Xem chi tiết <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};