import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './lib/api';

export default function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Validation State
    const [emailErr, setEmailErr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setEmailErr('');

        if (!email.trim()) {
            setEmailErr('Please fill out this field.');
            return;
        }

        setIsLoading(true);

        try {
            const res = await api.post('/auth/forgotpassword', { email });
            if (res.data.success) {
                // Testing UI: Alert the token so the user can easily copy/paste to test the Reset URL!
                console.log("Reset Token:", res.data.resetToken);
                alert(`Dev Mode: Reset Token is ${res.data.resetToken}`);
                setIsSubmitted(true);
            }
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Error sending recovery email.");
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
                    <h1 className="text-3xl font-medium mb-2 tracking-tight">Reset Password</h1>
                    <p className="text-white/70 text-sm max-w-[280px] mx-auto leading-relaxed">
                        {!isSubmitted ? "Enter your email address and we'll send you a link to reset your password" : "Check your email for the recovery link!"}
                    </p>
                </div>

                {/* Form */}
                {!isSubmitted ? (
                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                        {errorMsg && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-200 text-xs px-4 py-2 rounded-lg text-center">
                                {errorMsg}
                            </div>
                        )}
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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#f4f4f5] hover:bg-white text-indigo-950 font-semibold py-3 flex text-sm justify-center rounded-2xl transition-all mt-6 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center py-4 space-y-6">
                        <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-2 border border-indigo-400/30">
                            <svg className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 flex text-sm justify-center rounded-2xl transition-all mt-6 transform active:scale-[0.98]"
                        >
                            Try another email
                        </button>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-white/70">
                    Remember your password? <button onClick={() => navigate('/login')} type="button" className="text-white/70 hover:text-white transition-colors flex items-center justify-center space-x-2">Log In</button>
                </div>
            </div>
        </div>
    );
}
