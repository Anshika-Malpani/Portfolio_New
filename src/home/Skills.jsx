import React from "react";
import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import useScrolled from "../hooks/useScrolled";

const skillCategories = [
    {
        name: "Frontend",
        icon: "🎨",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", ]
    },
    {
        name: "Backend & Database",
        icon: "⚙️",
        skills: ["Node.js", "Express.js","MongoDB", "MySQL" ]
    },
    {
        name: "Additional",
        icon: "🗄️",
        skills: ["GSAP", "REST APIs", "WebSockets (familiar)", "WebRTC (familiar)"]
    },
    {
        name: "Tools & Others",
        icon: "🛠️",
        skills: ["Git", "Postman", "VS Code", "Docker"]
    }
];

function Skills() {
    const scrolled = useScrolled();

    return (
        <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
            {/* Animated Background */}
            <PageBackground />

            {/* Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10" : "py-5"
            }`}>
                <div className="w-[90%] max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="group relative">
                            <span className="text-2xl font-bold bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] bg-clip-text text-transparent">
                                Portfolio
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#dac5a7] to-transparent group-hover:w-full transition-all duration-500" />
                        </Link>
                        
                        <div className="flex gap-2  md:gap-4 text-sm md:text-base">
                            <Link to="/" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </Link>
                            <Link to="/projects" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                Projects
                            </Link>
                            <Link to="/about" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
                                About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative pt-32 pb-20">
                <div className="w-[90%] max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-linear-to-r from-[#dac5a7] via-[#e8d9c0] to-[#f0e6d2] bg-clip-text text-transparent">
                                My Skills
                            </span>
                        </h1>
                        <p className="text-[#dac5a7]/60 text-lg md:text-xl max-w-2xl mx-auto">
                            Technologies and tools I work with
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#dac5a7]/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">{category.icon}</span>
                                    <h2 className="text-2xl font-bold text-[#dac5a7]">{category.name}</h2>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-white/10 rounded-full text-[#dac5a7]/90 text-sm font-medium border border-white/5 hover:bg-white/20 hover:border-[#dac5a7]/30 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center py-16 mt-8">
                        <p className="text-[#dac5a7]/60 mb-6">Always learning and exploring new technologies</p>
                        <Link to="/projects">
                            <button className="group relative px-8 py-3 rounded-full bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] text-[#0a0a0a] font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#dac5a7]/25">
                                <span className="relative z-10">View My Projects</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-[#f0e6d2] to-[#dac5a7] transition-transform duration-500" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
