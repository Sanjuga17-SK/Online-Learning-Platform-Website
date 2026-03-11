import React from 'react'
import Hero from './Hero'
import Navbar from './Navbarmain'
import PartnerLogos from './PartnerLogos'
import SearchCourse from './SearchCourse'
import PopularCourses from './PopularCourses'
import CertifiedTeacher from './CertifiedTeacher'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function home() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <Hero />
            <PartnerLogos />
            <SearchCourse />
            <PopularCourses />
            <CertifiedTeacher />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default home

