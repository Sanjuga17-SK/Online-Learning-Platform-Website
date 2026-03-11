import React from 'react';
import './PartnerLogos.css';

export default function PartnerLogos() {
    return (
        
        <div className="w-full bg-gradient-to-r from-[#b31e9a] via-[#ec1c82] to-[#ff2b5a] py-6 sm:py-8 overflow-hidden relative border-t-2 border-b-2 border-dashed border-white/20">
            {/* The wrapper that will animate */}
            <div className="flex w-[200%] animate-marquee items-center">
                {/* First set of logos */}
                <div className="flex w-1/2 justify-around items-center px-4">
                    <LogoDuolingo />
                    <LogoGoogle />
                    <LogoIBM />
                    <LogoCoursera />
                </div>
                {/* Second set of logos for infinite seamless loop */}
                <div className="flex w-1/2 justify-around items-center px-4">
                    <LogoDuolingo />
                    <LogoGoogle />
                    <LogoIBM />
                    <LogoCoursera />
                </div>
            </div>
        </div>
    );
}

function LogoDuolingo() {
    return (
        <span className="text-white font-[800] text-2xl sm:text-4xl tracking-tight opacity-90 mx-8">
            duolingo
        </span>
    );
}

function LogoGoogle() {
    return (
        <span className="text-white font-serif text-2xl sm:text-4xl opacity-90 mx-8" style={{ fontFamily: '"Product Sans", serif' }}>
            Google
        </span>
    );
}

function LogoIBM() {
    return (
        <span className="text-white font-[900] text-3xl sm:text-5xl tracking-widest opacity-90 mx-8" style={{ fontFamily: '"Arial Black", sans-serif' }}>
            IBM
        </span>
    );
}

function LogoCoursera() {
    return (
        <span className="text-white font-bold text-2xl sm:text-4xl tracking-tighter opacity-90 mx-8 flex items-center gap-1">
            <span className="text-3xl sm:text-5xl">&infin;</span>coursera
        </span>
    );
}
