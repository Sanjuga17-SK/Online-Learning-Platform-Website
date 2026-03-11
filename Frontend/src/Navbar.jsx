import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onNavigate }) {
    return (
        <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#f3f4f6] px-4 sm:px-8 py-4 border-b border-gray-200"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div
                    className="text-2xl font-[900] text-gray-900 cursor-pointer"
                    onClick={() => onNavigate && onNavigate('home')}
                >
                    SkillGain
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Courses</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Teachers</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Offers</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Contact</a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => onNavigate && onNavigate('login')}
                        className="border-2 border-[#ec1c82] text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-[#ec1c82] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => onNavigate && onNavigate('register')}
                        className="bg-gradient-to-r from-[#ec1c82] to-[#ff2b5a] hover:from-[#d61370] hover:to-[#e4214f] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Free Trial
                    </button>
                </div>

            </div>
        </motion.nav>
    );
}
