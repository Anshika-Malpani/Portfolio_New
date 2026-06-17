import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import useScrolled from "../hooks/useScrolled";

const projects = [
    {
        id: 1,
        title: "Ashok Boutique",
        description: "A full-featured online store with cart, wishlist, and secure checkout. Built with modern web technologies for optimal performance.",
        image: "Images/Ashok_Boutique.png",
        tags: ["React", "Node.js", "MongoDB", "Tailwind"],
        demoLink: "https://ashok-boutique-frontend.onrender.com",
        githubLink: "https://github.com/Anshika-Malpani/Ashok_Boutique-",
        featured: true,
        category: "fullstack"
    },
    {
        id: 2,
        title: "Scatch",
        description: "Interactive dashboard for creatives to showcase their work with smooth animations and responsive design.",
        image: "Images/Scatch.png",
        tags: ["React", "Framer Motion", "CSS3", "Vite"],
        demoLink: "https://scatch-five.vercel.app/",
        githubLink: "https://github.com/Anshika-Malpani/Scatch",
        featured: true,
        category: "frontend"
    },
    {
        id: 3,
        title: "StudentProjectHub",
        description: "Productivity tool for teams to manage projects, assign tasks, and track progress in real-time.",
        image: "Images/SPH.png",
        tags: ["React", "Express", "PostgreSQL", "Socket.io"],
        demoLink: "https://sph-1.onrender.com/",
        githubLink: "https://github.com/Vishakha-Kayal/StudentProjectHub",
        featured: false,
        category: "fullstack"
    },
    {
        id: 4,
        title: "Printiy Recreated",
        description: "Real-time weather application with interactive maps and 7-day forecast predictions.",
        image: "Images/Printify.png",
        tags: ["JavaScript", "API", "CSS3", "Chart.js"],
        demoLink: "https://printify-recreated-ocg9.vercel.app/",
        githubLink: "https://github.com/Anshika-Malpani/Printify_Recreated",
        featured: false,
        category: "frontend"
    },
    {
        id: 5,
        title: "LeaderBoard System ",
        description: "Analytics dashboard for social media managers with insights and engagement metrics.",
        image: "Images/Leaderboard.png",
        tags: ["React", "D3.js", "Tailwind", "Firebase"],
        demoLink: "https://leaderboard-frontend-3l5a.onrender.com/",
        githubLink: "https://github.com/Anshika-Malpani/Leaderboard",
        featured: true,
        category: "fullstack"
    },
    {
        id: 6,
        title: "Chess Game",
        description: "Full-stack blogging platform with markdown support, comments, and user authentication.",
        image: "Images/Chess.png",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
        demoLink: "https://example.com",
        githubLink: "https://github.com",
        featured: false,
        category: "fullstack"
    }
];

const categories = ["all", "frontend", "fullstack"];

function Projects() {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);
    const scrolled = useScrolled();

    const filteredProjects = useMemo(() => (
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter)
    ), [filter]);

    return (
        <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
            {/* Animated Background */}
            <PageBackground />

            {/* Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10" : "py-5"
                }`}>
                <div className="w-[90%] max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <a href="/" className="group relative">
                            <span className="text-2xl font-bold bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] bg-clip-text text-transparent">
                                Portfolio
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#dac5a7] to-transparent group-hover:w-full transition-all duration-500" />
                        </a>

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
                            <Link to="/about" className="text-[#dac5a7]/80 hover:text-[#dac5a7] transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative pt-28 pb-20">
                <div className="w-[90%] max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-linear-to-r from-[#dac5a7] via-[#e8d9c0] to-[#f0e6d2] bg-clip-text text-transparent">
                                My Projects
                            </span>
                        </h1>
                        <p className="text-[#dac5a7]/60 text-lg md:text-xl max-w-2xl mx-auto">
                            Explore a collection of my finest work, blending creativity with cutting-edge technology
                        </p>
                    </div>



                    {/* Filter Buttons */}
                    <div className="flex justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${filter === category
                                        ? "bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] text-[#0a0a0a] font-semibold shadow-lg shadow-[#dac5a7]/25"
                                        : "bg-white/5 text-[#dac5a7]/70 hover:bg-white/10 border border-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-[#dac5a7]/30 transition-all duration-500 hover:transform hover:-translate-y-2 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-[#dac5a7] text-sm font-semibold">Quick View</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-[#dac5a7] mb-2">{project.title}</h3>
                                    <p className="text-[#dac5a7]/50 text-sm line-clamp-2 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-[#dac5a7]/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-[#dac5a7]/60">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-[#dac5a7]/60 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/20 shadow-2xl transform transition-all duration-300 animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative h-64 md:h-96">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                loading="eager"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#dac5a7] mb-3">{selectedProject.title}</h3>
                            <p className="text-[#dac5a7]/70 text-base md:text-lg leading-relaxed mb-4">
                                {selectedProject.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-white/10 rounded-full text-[#dac5a7]/80"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-full bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] text-[#0a0a0a] font-semibold hover:shadow-lg hover:shadow-[#dac5a7]/25 transition-all duration-300"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-full border border-[#dac5a7]/30 text-[#dac5a7] font-semibold hover:bg-[#dac5a7]/10 transition-all duration-300"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Projects;
