import React from 'react';
import './Hero.css';
import heroStudent from './assets/hero-student.png';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onNavigate }) {
    return (
        <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 40}}
                    transition={{ duration: 1.2, delay: 0.2,ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 z-10"
                >
                    <h1 className="text-5xl md:text-[64px] font-[800] text-gray-900 leading-[1.1] tracking-tight">
                        Develop Your <br />
                        Skills in a new <br />
                        and unique way
                    </h1>
                    <p className="text-gray-600 text-[18px] md:text-[20px] max-w-lg leading-[1.6]">
                        Explore the transformative approach to skill development on our online learning Platform.
                        Uncover the new learning experiences and elevate your expertise in unique ways.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <button
                            onClick={() => onNavigate && onNavigate('register')}
                            className="flex items-center gap-[10px] bg-gradient-to-r from-[#ec1c82] to-[#ff2b5a] hover:from-[#d61370] hover:to-[#e4214f] text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>

                            <span>Enroll Now</span>
                        </button>
                    </div>
                </motion.div>

                {/* Right Column Image and Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex justify-center items-center h-[500px] sm:h-[600px]"
                >
                    {/* Glowing Background Blob */}
                    <div className="absolute w-[345px] h-[345px] sm:w-[500px] sm:h-[500px] bg-[#ec1c82] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>

                    <img
                        src={heroStudent}
                        alt="Student holding a book"
                        className="relative z-10 w-full max-w-[400px] sm:max-w-md object-contain drop-shadow-2xl"
                    />

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ x: [-15, 0, -15] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute left-[-10px] sm:left-[-20px] top-[250px] glass-badge z-20 flex items-center gap-3"
                    >
                        <div className="bg-[#ec1c82] rounded-full p-2 text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M200.49,200.49a12,12,0,0,1-17,0L76,93V168a12,12,0,0,1-24,0V64A12,12,0,0,1,64,52H168a12,12,0,0,1,0,24H93L200.49,183.51A12,12,0,0,1,200.49,200.49Z"></path></svg>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-[800] text-gray-800 text-sm">50+</div>
                            <div className="text-[#ec1c82] text-xs font-bold">Online Courses</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [-15, 0, -15] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
                        className="absolute right-[10px] sm:right-[-5px] bottom-1/3 glass-badge z-20 text-center py-2 px-4"
                    >
                        <div className="font-[800] text-gray-800 text-sm">10K+</div>
                        <div className="text-[#ec1c82] text-xs font-semibold">Online Student</div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [-15, 0, -15] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
                        className="absolute left-4 sm:left-10 bottom-4 sm:bottom-10 glass-badge z-20 flex flex-col items-center"
                    >
                        <div className="text-[#ec1c82] text-sm font-semibold mb-2">UI Design Classes</div>
                        <button
                            onClick={() => onNavigate && onNavigate('register')}
                            className="bg-gradient-to-r from-[#ec1c82] to-[#ff2b5a] text-white text-[11px] font-bold py-1.5 px-6 rounded-md shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
                        >
                            Join Now
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
