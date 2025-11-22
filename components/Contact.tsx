import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Liên Hệ Với Chúng Tôi</h2>
                        <p className="text-slate-600 mb-8">
                            Bạn đã sẵn sàng cho chuyến phiêu lưu tiếp theo? Hãy để lại thông tin, đội ngũ chuyên gia của Adrenaline Expeditions sẽ liên hệ tư vấn ngay.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Điện thoại</h3>
                                    <p className="text-slate-600">+84 909 123 456</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Email</h3>
                                    <p className="text-slate-600">explore@adrenaline-expeditions.vn</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Văn phòng</h3>
                                    <p className="text-slate-600">123 Đường Leo Núi, Quận 1, TP. Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
                        {success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-700">Gửi Thành Công!</h3>
                                <p className="text-slate-600 mt-2">Chúng tôi sẽ liên hệ lại sớm nhất.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Họ tên</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                        placeholder="Nguyễn Văn A"
                                        value={formState.name}
                                        onChange={e => setFormState({...formState, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                        placeholder="email@example.com"
                                        value={formState.email}
                                        onChange={e => setFormState({...formState, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Tin nhắn / Yêu cầu</label>
                                    <textarea 
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                                        placeholder="Tôi muốn tư vấn về tour..."
                                        value={formState.message}
                                        onChange={e => setFormState({...formState, message: e.target.value})}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand-500/30"
                                >
                                    {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};