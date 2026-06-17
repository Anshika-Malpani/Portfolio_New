import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassBox from "../components/GlassBox";
import PageBackground from "../components/PageBackground";
import useScrolled from "../hooks/useScrolled";

const navLinks = [
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
];

const projects = [
    {
        id: 1,
        title: "Ashok Boutique",
        description: "A full-stack e-commerce platform for a boutique business featuring order management, measurement management, invoice creation, user authentication,  order management, and secure image storage using Cloudinary.",
        image: "Images/Ashok_Boutique.png",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
        demoLink: "https://ashok-boutique-frontend.onrender.com",
        githubLink: "https://github.com/Anshika-Malpani/Ashok_Boutique-",
        featured: true,
        category: "fullstack"
    },
    {
        id: 2,
        title: "Scatch",
        description: "A responsive backpack e-commerce website with product filtering, collection categorization, discount sections, and a modern user interface built for seamless shopping experiences.",
        image: "Images/Scatch.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
        demoLink: "https://scatch-five.vercel.app/",
        githubLink: "https://github.com/Anshika-Malpani/Scatch",
        featured: true,
        category: "frontend"
    },
    {
        id: 3,
        title: "StudentProjectHub",
        description: "A collaborative platform where universities and students can upload, explore, review, comment on, and collaborate on academic projects, promoting knowledge sharing and innovation.",
        image: "Images/SPH.png",
        tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
        demoLink: "https://sph-1.onrender.com/",
        githubLink: "https://github.com/Vishakha-Kayal/StudentProjectHub",
        featured: false,
        category: "fullstack"
    },
    {
        id: 4,
        title: "Printify Recreated",
        description: "A pixel-perfect recreation of the Printify homepage featuring responsive layouts, modern UI design, smooth user interactions, and optimized performance across devices.",
        image: "Images/Printify.png",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        demoLink: "https://printify-recreated-ocg9.vercel.app/",
        githubLink: "https://github.com/Anshika-Malpani/Printify_Recreated",
        featured: false,
        category: "frontend"
    },
    {
        id: 5,
        title: "Leaderboard System",
        description: "A dynamic leaderboard application where users can claim random points, view real-time rankings, track claim history, and experience interactive updates with a responsive interface.",
        image: "Images/Leaderboard.png",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        demoLink: "https://leaderboard-frontend-3l5a.onrender.com/",
        githubLink: "https://github.com/Anshika-Malpani/Leaderboard",
        featured: true,
        category: "fullstack"
    },
    {
        id: 6,
        title: "Chess Game",
        description: "An interactive online chess game featuring real-time gameplay, move validation, and a responsive user interface for an engaging multiplayer experience.",
        image: "Images/Chess.png",
        tags: ["JavaScript", "Socket.IO", "Node.js", "HTML", "CSS"],
        demoLink: "https://example.com",
        githubLink: "https://github.com",
        featured: false,
        category: "fullstack"
    }
];

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

const categories = ["all", "frontend", "fullstack"];

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrolled = useScrolled();

    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    // Handle smooth scroll for anchor links
    const handleSmoothScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            setIsMenuOpen(false);
        }
    };

    const filteredProjects = useMemo(() => (
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter)
    ), [filter]);

    return (
        <div className="w-full min-h-screen relative bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
            {/* Animated Background Elements */}
            <PageBackground />

            {/* Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? "py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10" : "py-4"
            }`}>
                <div className="w-[90%] max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="group relative">
                            <span className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] bg-clip-text text-transparent">
                                Portfolio
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#dac5a7] to-transparent group-hover:w-full transition-all duration-500" />
                        </Link>

                        <div className="hidden md:flex items-center gap-8 lg:gap-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-[#dac5a7]/80 text-sm lg:text-base font-medium uppercase tracking-wider relative group py-2 hover:text-[#dac5a7] transition-colors duration-300"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] group-hover:w-full transition-all duration-500" />
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-[#dac5a7] hover:bg-white/10 rounded-xl transition-all duration-100 backdrop-blur-sm"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`md:hidden  overflow-hidden ${
                            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="py-4 space-y-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, link.href);
                                        setIsMenuOpen(false);
                                    }}
                                    className="block px-6 py-3 text-[#dac5a7]/80 text-center text-lg uppercase tracking-wider hover:bg-white/10 hover:text-[#dac5a7] transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative  pt-24 md:pt-40 lg:pt-32 min-h-screen flex items-center">
                <div className="w-[90%] max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                    </span>
                                    <span className="text-xs text-[#dac5a7]/70 uppercase tracking-wider">Available for work</span>
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                <span className="bg-linear-to-r from-[#dac5a7] via-[#e8d9c0] to-[#f0e6d2] bg-clip-text text-transparent">
                                    Web Developer
                                </span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#dac5a7]/80">
                                Creative Coder
                            </h2>

                            <p className="text-lg md:text-xl text-[#dac5a7]/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Turning Ideas into interactive digital experiences that captivate and inspire.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link to="/projects">
                                    <button className="group relative px-8 py-3 rounded-full bg-linear-to-r from-[#dac5a7] to-[#f0e6d2] text-[#0a0a0a] font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#dac5a7]/25">
                                        <span className="relative z-10">View Projects</span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-[#f0e6d2] to-[#dac5a7] transition-transform duration-500" />
                                    </button>
                                </Link>
                               <Link to="/about">
                               <button className="px-8 py-3 rounded-full border-2 border-[#dac5a7]/30 text-[#dac5a7] font-semibold hover:bg-[#dac5a7]/10 hover:border-[#dac5a7]/50 transition-all duration-300">
                                    Contact Me
                                </button>
                               </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center items-center">
                                <GlassBox image={"Images/HTML.png"} />
                                <GlassBox image={"Images/CSS.png"} />
                                <GlassBox image={"Images/JS.png"} />
                                <GlassBox image={"Images/React.png"} />
                                <GlassBox image={"Images/Tailwind.png"} />
                                <GlassBox image={"Images/Node.png"} />
                                <GlassBox image={"Images/MongoDB.png"} />
                                <GlassBox image={"Images/Express.png"} />
                                <GlassBox image={"Images/Github.png"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:block md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-[#dac5a7]/30 flex justify-center">
                    <div className="w-1 h-3 bg-[#dac5a7]/50 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
            </div>

           
            {/* Projects Section */}
            <div>
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
                                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                                    filter === category
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

            {/* Skills Section */}
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

            {/* About Section */}
            <div className="relative pt-16 pb-20">
                <div className="w-[90%] max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-linear-to-r from-[#dac5a7] via-[#e8d9c0] to-[#f0e6d2] bg-clip-text text-transparent">
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
                                <div className="w-64 h-64 md:w-65 md:h-65 rounded-lg  bg-linear-to-br overflow-hidden from-[#dac5a7]/20 to-[#f0e6d2]/10 flex items-center justify-center border-4 border-[#dac5a7]/30">
                                    {/* <img className="w-78 h-78 object-cover" src="Images/profile.jpg" alt="Profile" /> */}
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

export default Home;
