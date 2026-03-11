import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, User as UserIcon } from 'lucide-react';
import webDesignImage from "./assets/webdesign-image.png";
import wireframeImage from "./assets/wireframe-image.png";
import pythonImage from "./assets/python-image.png";

const courses = [
    {
        id: 1,
        title: "Web Design &\nDevelopment",
        category: "Web Design",
        rating: "4.5",
        classes: 25,
        students: 143,
        price: 360,
        author: "J.Mohan",
        image: webDesignImage,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
    },
    {
        id: 2,
        title: "Wireframe &\nPrototyping",
        category: "UI/UX Design",
        rating: "5.0",
        classes: 8,
        students: 400,
        price: 160,
        author: "Jorden Ree",
        image: wireframeImage,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 3,
        title: "Python for\nData Science",
        category: "Data Science",
        rating: "4.9",
        classes: 18,
        students: 150,
        price: 432,
        author: "Alex Taylor",
        image: pythonImage,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    }
];

export default function PopularCourses() {
    return (
        <section className="w-full bg-gradient-to-r from-[#bc28db] to-[#ff2b5a] px-4 sm:px-8 py-16 lg:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 max-w-2xl px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Popular Courses
                    </h2>
                    <p className="text-white/90 text-[13px] md:text-sm leading-relaxed px-4">
                        Discover our most sought-after courses, carefully curated to meet the demands of today's learners. Dive into engaging content crafted for success in every step of your educational journey
                    </p>
                </motion.div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="bg-white rounded-3xl p-4 shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Badges */}
                            <div className="flex justify-between items-center mb-4 px-1">
                                <span className="bg-[#fce4ec] text-[#f06292] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                                    {course.category}
                                </span>
                                <span className="flex items-center gap-1 bg-[#bc28db] text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md">
                                    <Star className="w-3 h-3 fill-white" /> {course.rating}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[1.1rem] sm:text-xl font-bold text-gray-900 mb-5 px-1 leading-tight whitespace-pre-line">
                                {course.title}
                            </h3>

                            {/* Stats */}
                            <div className="flex items-center gap-4 sm:gap-6 mt-auto mb-4 px-1">
                                <div className="flex items-center gap-2 text-gray-500 text-[11px] sm:text-xs font-semibold">
                                    <BookOpen className="w-[14px] h-[14px]" />
                                    <span>{course.classes} Classes</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-[11px] sm:text-xs font-semibold">
                                    <UserIcon className="w-[14px] h-[14px]" />
                                    <span>{course.students} Students</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gray-200 mb-4 mt-1"></div>

                            {/* Footer */}
                            <div className="flex justify-between items-center px-1 pb-1">
                                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                                    ${course.price}
                                </span>
                                <div className="flex items-center gap-2">
                                    <img src={course.avatar} alt={course.author} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" />
                                    <span className="text-[11px] sm:text-xs font-semibold text-gray-600">{course.author}</span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
