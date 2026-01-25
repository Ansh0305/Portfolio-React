import { RevealOnScroll } from "../RevealOnScroll";
import { TypeWriter } from "../TypeWriter";

export const Home = () => {
    const roles = ["Aspiring Full Stack Developer", "Frontend Developer", "React Enthusiast", "Problem Solver"];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Ansh
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
                        <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} pauseTime={1500} />
                    </p>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        A passionate full stack developer specializing in React and modern web tech. I love building sleek, responsive apps and solving challenging problems through clean code and smart algorithms.
                    </p>

                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/Ansh0305"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.21 11.386c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.088-.745.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.776.418-1.303.76-1.603-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.405c1.02.005 2.047.137 3.002.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.922.43.368.814 1.096.814 2.213v3.287c0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/anshsirigiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.938v5.669H9.354V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.27 2.368 4.27 5.455v6.286zM5.337 7.433c-1.144 0-2.072-.93-2.072-2.077 0-1.15.928-2.08 2.072-2.08 1.15 0 2.076.93 2.076 2.08 0 1.145-.927 2.076-2.076 2.076zm1.777 13.02H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .782 0 1.748v20.504C0 23.215.792 24 1.771 24h20.451C23.2 24 24 23.215 24 22.252V1.749C24 .782 23.2 0 22.225 0z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:saiansh2016@gmail.com"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                            aria-label="Email"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
