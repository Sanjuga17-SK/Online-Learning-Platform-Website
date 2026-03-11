import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export default function Navbarmain({ onNavigate }) {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
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
                    onClick={() => {
                        if (onNavigate) {
                            onNavigate('home');
                        } else {
                            navigate('/');
                        }
                    }}
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
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-gray-700 hidden sm:block">Hello, {user.name}</span>
                            <button
                                onClick={logout}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                if (onNavigate) onNavigate('register');
                                else navigate('/register');
                            }}
                            className="bg-gradient-to-r from-[#ec1c82] to-[#ff2b5a] hover:from-[#d61370] hover:to-[#e4214f] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Free Trial
                        </button>
                    )}
                </div>

            </div>
        </motion.nav>
    );
}
