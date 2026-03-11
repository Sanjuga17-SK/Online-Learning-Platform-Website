import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from './lib/api';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        if (!formData.name || !formData.email || !formData.phone) {
            setMessage({ type: 'error', text: 'Please fill in all fields' });
            return;
        }

        setIsLoading(true);
        try {
            const res = await api.post('/contact/submit', formData);
            if (res.data.success) {
                setMessage({ type: 'success', text: 'Thanks for reaching out! We will be in touch soon.' });
                setFormData({ name: '', phone: '', email: '' }); // Reset form
            }
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Something went wrong. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section className="w-full bg-gradient-to-r from-[#bc28db] to-[#ff2b5a] overflow-hidden">
            <div className="w-full bg-[#f3f4f6] rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] py-16 lg:py-24 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-[#bc28db] to-[#ff2b5a] rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Get In Touch!
                            </h2>
                            <p className="text-white/90 text-[14px] md:text-[15px] max-w-lg mx-auto leading-relaxed">
                                Subscribe Us to get in touch and to enjoy discounts, promos, and much more!
                            </p>
                        </div>

                        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
                            {message.text && (
                                <div className={`px-4 py-3 rounded-xl text-sm text-center font-medium ${message.type === 'error' ? 'bg-red-500/10 text-red-200 border border-red-500/20' : 'bg-green-500/10 text-green-200 border border-green-500/20'}`}>
                                    {message.text}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-white font-semibold text-[13px] px-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full bg-white rounded-full px-6 py-3.5 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white font-semibold text-[13px] px-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full bg-white rounded-full px-6 py-3.5 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold text-[13px] px-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email ID"
                                    className="w-full bg-white rounded-full px-6 py-3.5 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-white text-[#ff2b5a] font-bold text-[14px] rounded-full px-12 py-3.5 hover:bg-gray-50 transition-colors shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
