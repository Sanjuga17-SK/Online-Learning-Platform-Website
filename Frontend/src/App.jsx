import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import './App.css'
import Login from './Login'
import Register from './Register'
import Forgot from './Forgot'
import Hero from './Hero'
import Navbar from './Navbar'
import PartnerLogos from './PartnerLogos'
import SearchCourse from './SearchCourse'
import PopularCourses from './PopularCourses'
import CertifiedTeacher from './CertifiedTeacher'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './home'

// Extracted Landing Page component
const Landing = () => {
  const navigate = useNavigate();
  // Pass navigate to components that expect onNavigate
  const handleNavigate = (path) => navigate(`/${path}`);

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <PartnerLogos />
      <SearchCourse />
      <PopularCourses />
      <CertifiedTeacher />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="animate-spin rounded-full h-12 w-12 border-4 border-[#ff2b5a] border-t-transparent"></div></div>;
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" replace /> : <Landing />} />
      <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/home" replace /> : <Register />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App

