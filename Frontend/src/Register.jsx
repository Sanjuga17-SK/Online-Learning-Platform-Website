import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import api from './lib/api';

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Validation States
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setNameErr('');
        setEmailErr('');
        setPassErr('');

        let isValid = true;
        if (!name.trim()) {
            setNameErr('Please fill out this field.');
            isValid = false;
        }
        if (!email.trim()) {
            setEmailErr('Please fill out this field.');
            isValid = false;
        }
        if (!password) {
            setPassErr('Please fill out this field.');
            isValid = false;
        } else if (password.length < 6) {
            setPassErr('Password must be at least 6 characters.');
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true);

        try {
            const res = await api.post('/auth/register', { name, email, password });
            if (res.data.success) {
                alert(`Account created successfully for ${res.data.user.name}!`);
                navigate('/login');
            }
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "An error occurred during registration.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 relative"
            style={{
                backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1669668198820-d3948237663e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay to balance contrast */}
            <div className="absolute inset-0 bg-indigo-950/30 mix-blend-multiply"></div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white">

                {/* Header */}
                <div className="flex flex-col items-center mb-8 text-center">

                    <h1 className="text-3xl font-medium mb-2 tracking-tight">Create an account</h1>
                    <p className="text-white/70 text-sm max-w-[280px] mx-auto leading-relaxed">
                        Sign up to start your guided meditations, daily practices, and personal journey
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleRegister} noValidate>
                    {errorMsg && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-200 text-xs px-4 py-2 rounded-lg text-center">
                            {errorMsg}
                        </div>
                    )}
                    <div className="space-y-1.5">
                        <label className="text-xs text-white/80 font-medium ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (nameErr) setNameErr('');
                            }}
                            className={`w-full bg-white/5 border ${nameErr ? 'border-red-400 focus:ring-red-400/50' : 'border-white/20 focus:ring-indigo-400/50'} text-white placeholder:text-white/40 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                        />
                        {nameErr && <p className="text-red-400 text-xs ml-1 mt-1">{nameErr}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs text-white/80 font-medium ml-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (emailErr) setEmailErr('');
                            }}
                            className={`w-full bg-white/5 border ${emailErr ? 'border-red-400 focus:ring-red-400/50' : 'border-white/20 focus:ring-indigo-400/50'} text-white placeholder:text-white/40 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                        />
                        {emailErr && <p className="text-red-400 text-xs ml-1 mt-1">{emailErr}</p>}
                    </div>

                    <div className="space-y-1.5 relative">
                        <label className="text-xs text-white/80 font-medium ml-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter strong password'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (passErr) setPassErr('');
                                }}
                                className={`w-full bg-white/5 border ${passErr ? 'border-red-400 focus:ring-red-400/50' : 'border-indigo-400/50 focus:ring-indigo-400/50'} text-white placeholder:text-white/40 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {passErr && <p className="text-red-400 text-xs ml-1 mt-1">{passErr}</p>}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <div
                                onClick={() => setAgreed(!agreed)}
                                className={`relative flex items-center justify-center w-4 h-4 rounded border transition-all group-active:scale-95 ${agreed ? 'bg-indigo-500 border-indigo-500' : 'bg-white/5 border-white/30'}`}
                            >
                                {agreed && (
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-xs text-white/90 group-hover:text-white transition-colors" onClick={() => setAgreed(!agreed)}>I agree to the Terms & Conditions</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!agreed || isLoading}
                        className={`w-full font-semibold py-3 flex text-sm justify-center rounded-2xl transition-all mt-6 transform active:scale-[0.98] ${(agreed && !isLoading) ? 'bg-[#f4f4f5] hover:bg-white text-indigo-950' : 'bg-white/20 text-white/50 cursor-not-allowed'}`}
                    >
                        {isLoading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="px-3 text-[10px] text-white/50 uppercase tracking-widest">Or</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>

                {/* Google Sign In */}
                <button type="button" className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium py-2.5 text-sm rounded-2xl transition-all flex items-center justify-center space-x-2 backdrop-blur-sm active:scale-[0.98]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>Sign Up with Google</span>
                </button>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-white/70">
                    Already have an account? <button onClick={() => navigate('/login')} type="button" className="text-white font-medium hover:underline">Log In</button>
                </div>
            </div>
        </div>
    );
}
