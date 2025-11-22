import React from 'react';
import { HISTORY } from '../constants';
import { Flag, Shield, Heart } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Câu Chuyện Của Chúng Tôi</h2>
                    <div className="w-20 h-1 bg-brand-500 mx-auto"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Hơn cả một chuyến đi, Adrenaline Expeditions mang đến cơ hội để bạn tái khám phá bản thân giữa thiên nhiên hùng vĩ.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Flag className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Tiên Phong</h3>
                        <p className="text-slate-600">Luôn tìm kiếm những cung đường mới lạ, độc đáo chưa từng có dấu chân du khách.</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">An Toàn Tuyệt Đối</h3>
                        <p className="text-slate-600">Quy trình an toàn chuẩn quốc tế với trang thiết bị hiện đại và đội ngũ chuyên gia.</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Đam Mê</h3>
                        <p className="text-slate-600">Chúng tôi không chỉ bán tour, chúng tôi truyền cảm hứng yêu thiên nhiên.</p>
                    </div>
                </div>

                {/* Interactive Timeline */}
                <div className="relative py-10">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>
                    <h3 className="text-2xl font-bold text-center mb-12">Hành Trình Phát Triển</h3>
                    
                    <div className="space-y-12 relative">
                        {HISTORY.map((milestone, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 w-full md:w-1/2 p-6">
                                    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${index % 2 === 0 ? 'border-brand-500 text-left' : 'border-blue-500 text-right md:text-left'} hover:scale-105 transition-transform duration-300`}>
                                        <span className="text-4xl font-black text-slate-100 absolute top-4 right-4 z-0">{milestone.year}</span>
                                        <div className="relative z-10">
                                            <span className="text-brand-600 font-bold text-lg block mb-1">{milestone.year}</span>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h4>
                                            <p className="text-slate-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-slate-300 rounded-full hidden md:block"></div>
                                <div className="flex-1 w-full md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};