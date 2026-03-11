import React from 'react';
import { motion } from 'framer-motion';
import student3 from './assets/student3.png';

export default function CertifiedTeacher() {
    return (
        <section className="w-full bg-[#f3f4f6] px-4 sm:px-8 py-16 lg:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex flex-col"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        A Certified Teacher
                    </h2>
                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-10">
                        in our company possess exceptional skills in <span className="text-[#ff2b5a] font-medium">communication, curriculum development, and instructional design.</span> They are experts at creating engaging learning experiences, explaining complex topics clearly, and adapting their methods to diverse audiences.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Enjoy Many Perks
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {/* Perks List */}
                        {[
                            "Global Impact",
                            "Monetize Your Expertise",
                            "Flexible Schedule",
                            "Professional Development",
                            "Innovative Teaching Tools",
                            "Networking Opportunities",
                            "Recognition And Reputation",
                            "Creative Freedom"
                        ].map((perk, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#ff2b5a] flex-shrink-0"></span>
                                <span className="text-gray-700 text-sm md:text-[15px] font-medium">{perk}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                >
                    {/* Container with dashed border */}
                    <div className="relative p-3 w-[280px] sm:w-[360px] md:w-[400px]">
                        {/* Dashed Border Shape */}
                        <div className="absolute inset-0 border-2 border-dashed border-[#ff2b5a] rounded-t-2xl rounded-b-[180px]"></div>

                        {/* Gradient Background and Image Container */}
                        <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#bc28db] to-[#ff2b5a] rounded-t-xl rounded-b-[180px] overflow-hidden flex items-end justify-center pt-8">
                            <img
                                src={student3}
                                className="w-[90%] object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
