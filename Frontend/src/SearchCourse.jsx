import React from 'react';
import student1 from './assets/student1.png';
import student2 from './assets/student2.png';
import student3 from './assets/student3.png';
import student4 from './assets/student4.png';
import { Search, GraduationCap, BookOpen, User, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SearchCourse() {
    return (
        <section className="w-full bg-[#f3f4f6] px-4 sm:px-8 py-16">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full lg:gap-16 items-center">

                    {/* Left Side: 2x2 Image Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.2}}
                        variants={{
                            hidden: {opacity:0, scale:0.5},
                            visible: {
                                opacity:1,
                                scale:1,
                                transition: {  duration: 2, ease: "easeOut" }
                            }
                        }}
                        className="grid grid-cols-2 gap-2 sm:gap-4 max-w-[500px] mx-auto w-full"
                    >

                        {
                        /* Top Left - Purple (Rounded TL, TR, BL, Sharp BR) */}
                        <div className="bg-[#bc28db] aspect-[4/5] rounded-[9rem] rounded-br-[0.5rem] relative overflow-hidden flex items-end justify-center pt-8">
                            <motion.img
                                variants={{
                                    hidden: { height: "10%" },
                                    visible: { height: "90%", transition: { duration: 2.7, ease: "easeOut" } }
                                }}
                                src={student1} alt="Student" className="object-cover w-auto object-bottom absolute bottom-0  left-3/2 -translate-x-3/2 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                        </div>
                        {/* Top Right - Red (Rounded TL, TR, BR, Sharp BL) */}
                        <div className="bg-[#ff2b5a] aspect-[4/5] rounded-[9rem] rounded-bl-[0.5rem] relative overflow-hidden flex items-end justify-center pt-8">
                            <motion.img
                                variants={{
                                    hidden: { height: "10%" },
                                    visible: { height: "110%", transition: { duration: 2.7, ease: "easeOut" } }
                                }}
                                src={student2} alt="Student" className="object-cover w-auto object-bottom absolute bottom-0 -left-1/2 translate-x-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                        </div>
                        {/* Bottom Left - Red (Rounded TL, BL, BR, Sharp TR) */}
                        <div className="bg-[#ff2b5a] aspect-[4/5] rounded-[9rem] rounded-tr-[0.5rem] relative overflow-hidden flex items-end justify-center pt-8">
                            <motion.img
                                variants={{
                                    hidden: { height: "10%" },
                                    visible: { height: "110%", transition: { duration: 2.7, ease: "easeOut" } }
                                }}
                                src={student4} alt="Student" className="object-cover w-auto object-bottom absolute top-0  left-3/2 -translate-x-3/2 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                        </div>
                        {/* Bottom Right - Purple (Rounded TR, BL, BR, Sharp TL) */}
                        <div className="bg-[#bc28db] aspect-[4/5] rounded-[9rem] rounded-tl-[0.5rem] relative overflow-hidden flex items-end justify-center pt-8">
                            <motion.img
                                variants={{
                                    hidden: { height: "10%" },
                                    visible: { height: "100%", transition: { duration: 2.7, ease: "easeOut" } }
                                }}
                                src={student3} alt="Student" className="object-cover w-auto object-bottom absolute top-0  -left-1/2 translate-x-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                        </div>
                    </motion.div>

                    {/* Right Side: Benefits List */}
                    <div className="flex flex-col space-y-8 pl-0 lg:pl-8">
                        <div className="mb-2">
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 tracking-tight">
                                <span className="text-[#b31e9a]">Benefits</span> From our Online<br className="hidden md:block" /> Learning
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {/* Benefit 1 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#ec1c82] flex items-center justify-center text-white shadow-md">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Online Degrees</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                        Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.
                                    </p>
                                </div>
                            </div>

                            {/* Benefit 2 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#ec1c82] flex items-center justify-center text-white shadow-md">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Short Courses</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                        Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.
                                    </p>
                                </div>
                            </div>

                            {/* Benefit 3 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#ec1c82] flex items-center justify-center text-white shadow-md">
                                        <User className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Training From Experts</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                        Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.
                                    </p>
                                </div>
                            </div>

                            {/* Benefit 4 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#ec1c82] flex items-center justify-center text-white shadow-md pl-0.5">
                                        <PlayCircle className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">1.5k + Video Courses</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                                        Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
