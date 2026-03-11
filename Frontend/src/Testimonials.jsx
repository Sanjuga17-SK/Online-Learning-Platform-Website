import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Taylor Rayan",
        role: "Web Developer",
        content: "Enrolling in courses in elearning Platform was a game-changer for me. Absolutely transformative Experiences !",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 4
    },
    {
        id: 2,
        name: "Taylor Rayan",
        role: "Web Developer",
        content: "Enrolling in courses in elearning Platform was a game-changer for me. Absolutely transformative Experiences !",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
        rating: 4
    },
    {
        id: 3,
        name: "Taylor Rayan",
        role: "Web Developer",
        content: "Enrolling in courses in elearning Platform was a game-changer for me. Absolutely transformative Experiences !",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <section className="w-full bg-gradient-to-r from-[#bc28db] to-[#ff2b5a] px-4 sm:px-8 py-16 lg:py-20 overflow-hidden">
            <div className="max-w-0xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Student's Testimonials
                    </h2>
                    <p className="text-white/90 text-sm md:text-[15px] leading-relaxed">
                        Here's What our student have to say about their Transformative learning
                        experiences: Real Stories, Real Growth. Discover firsthand the impact our
                        courses have had on their lives.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="relative w-full overflow-hidden">

  {/* Left Gradient */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>

  {/* Right Gradient */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

  {/* Scrolling Testimonials */}
  <motion.div
    className="flex gap-6 lg:gap-8"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      ease: "linear",
      duration: 25,
      repeat: Infinity
    }}
  >
    {[...testimonials, ...testimonials].map((testimonial, index) => (
      <div
        key={index}
        className="min-w-[320px] bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col"
      >
        {/* Profile */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h4 className="text-[#e91e63] font-semibold text-[15px]">
              {testimonial.name}
            </h4>

            <p className="text-gray-500 text-[11px] font-medium">
              {testimonial.role}
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed">
          {testimonial.content}
        </p>
      </div>
    ))}
  </motion.div>

</div>
       

            </div>
        </section>
    );
}
