import React from "react";
import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import useScrolled from "../hooks/useScrolled";

function About() {
    const scrolled = useScrolled();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
            {/* Animated Background */}
            <PageBackground />

            {/* Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10" : "py-5"
            }`}>
                <div className="w-[90%] max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="group relative">
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#dac5a7] to-[#f0e6d2] bg-clip-text text-transparent">
                                Portfolio
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#dac5a7] to-transparent group-hover:w-full transition-all duration-500" />
                        </Link>
                        
                        <div className="flex gap-2 md:gap-4 text-sm md:text-base">
                            <Link to="/" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </Link>
                            <Link to="/skills" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 7h14M5 17h14M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                                </svg>
                                Skills
                            </Link>
                            <Link to="/projects" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative pt-16 pb-20">
                <div className="w-[90%] max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#dac5a7] via-[#e8d9c0] to-[#f0e6d2] bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h1>
                        <p className="text-[#dac5a7]/60 text-lg md:text-xl max-w-2xl mx-auto">
                            Get to know the person behind the code
                        </p>
                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col lg:flex-row gap-12 mb-16">
                        {/* Profile Image Placeholder */}
                        <div className="lg:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 md:w-65 md:h-65 rounded-lg  bg-gradient-to-br overflow-hidden from-[#dac5a7]/20 to-[#f0e6d2]/10 flex items-center justify-center border-4 border-[#dac5a7]/30">
                                    {/* <img className="w-78 h-78 object-cover" src="/src/assets/Images/profile.jpg" alt="Profile" /> */}
                                    <span className="text-9xl md:text-[10vw]">👩‍💻</span>
                                </div>
                                {/* <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-[#dac5a7] to-[#f0e6d2] rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl">✨</span>
                                </div> */}
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="lg:w-2/3 space-y-6">
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                <h2 className="text-2xl font-bold text-[#dac5a7] mb-4 flex items-center gap-2">
                                    <span>👋</span> Hi, I'm Anshika Malpani
                                </h2>
                                <p className="text-[#dac5a7]/70 leading-relaxed mb-4">
                                    I'm a passionate web developer with a love for creating beautiful, functional, 
                                    and user-friendly websites. My journey in web development started 2 years ago, 
                                    and since then, I've been constantly learning and evolving with the ever-changing 
                                    tech landscape.
                                </p>
                                <p className="text-[#dac5a7]/70 leading-relaxed">
                                    I believe that great websites are more than just code — they're experiences that 
                                    connect people, solve problems, and bring ideas to life. When I'm not coding, 
                                    you can find me exploring new technologies, contributing to open source, or 
                                    sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#dac5a7]/30 transition-all duration-500">
                            <h3 className="text-xl font-bold text-[#dac5a7] mb-4 flex items-center gap-2">
                                <span>📋</span> Personal Info
                            </h3>
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[#dac5a7]/50 w-28">Name:</span>
                                    <span className="text-[#dac5a7]/80">Anshika Malpani</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[#dac5a7]/50 w-28">Location:</span>
                                    <span className="text-[#dac5a7]/80">Jaipur, Rajasthan</span>
                                </div>

                                
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[#dac5a7]/50 w-28">Email:</span>
                                    <span className="text-[#dac5a7]/80">malpanianshi@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#dac5a7]/30 transition-all duration-500">
                            <h3 className="text-xl font-bold text-[#dac5a7] mb-4 flex items-center gap-2">
                                <span>🎯</span> Interests & Hobbies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/80 text-sm">💻 Coding</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/80 text-sm">📚 Learning New Technologies</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/80 text-sm">🎮 Gaming</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/80 text-sm">🎵 Music</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/80 text-sm">💃🏿 Dancing</span>
                               
                            </div>
                        </div>
                    </div>

                    
                    {/* Connect Section */}
                    <div className="text-center py-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#dac5a7] mb-6">Let's Connect!</h2>
                        <p className="text-[#dac5a7]/60 mb-8 max-w-lg mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="https://github.com/Anshika-Malpani" target="_blank" className="group px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[#dac5a7] hover:bg-white/10 hover:border-[#dac5a7]/30 transition-all duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.765-1.587 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/anshika-malpani-4b5288221/" target="_blank" className="group px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[#dac5a7] hover:bg-white/10 hover:border-[#dac5a7]/30 transition-all duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                                </svg>
                                LinkedIn
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
