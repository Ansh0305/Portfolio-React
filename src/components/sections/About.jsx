import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI"];
    const backendSkills = ["Node.js", "Express.js", "Rest API's"];
    const databaseSkills = ["MySQL", "MongoDB", "PostgreSQL", "Redis"];
    const languages = ["Java", "JavaScript", "TypeScript", "Python"];
    const tools = ["Git", "GitHub", "Gitlab", "Postman"];

    return (
        <section
            id="about"
            className="min-h-screen flex justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Hello! I'm <span className="text-white font-bold">Sirigiri Sai Ansh Raj</span>, a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> pursuing my B.Tech at Swami Vivekananda Institute of Technology.
                        </p>
                        <p className="text-gray-300 mb-6">
                            I specialize in the <span className="text-blue-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node) and enjoy building scalable web applications. My interests also extend to <span className="text-blue-400 font-semibold">IoT</span>, bridging the gap between software and hardware to create real-world solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🛠️ Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                            hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🎨 Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">⚙️ Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 
                                            hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">💾 Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                            hover:shadow-[0_2px_8px_rgba(20,184,166,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🔧 Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-gray-500/10 text-gray-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 
                                            hover:shadow-[0_2px_8px_rgba(107,114,128,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all h-max">
                            <h3 className="text-xl font-bold mb-6">🏫 Education</h3>
                            <div className="space-y-6 text-gray-300">
                                {/* B.Tech */}
                                <div className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Swami Vivekananda Institute of Technology</h4>
                                        <p className="text-cyan-400 font-medium">B.Tech in Computer Science</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                                                📅 2022 - 2026
                                            </span>
                                            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                                                📊 CGPA: 8.01
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Intermediate */}
                                <div className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Sri Chaitanya Junior College</h4>
                                        <p className="text-cyan-400 font-medium">Intermediate in MPC</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                                                📅 2020 - 2022
                                            </span>
                                            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                                                📊 75%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* High School */}
                                <div className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Sankara Vidyalaya</h4>
                                        <p className="text-cyan-400 font-medium">High School</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                                                📅 2020
                                            </span>
                                            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                                                📊 90%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Relevant Courses */}
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-sm text-gray-400 mb-2">📚 Relevant Courses</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Data Structures & Algorithms</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Database Management</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">System Design</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">OOPS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all h-max">
                            <h3 className="text-xl font-bold mb-6">💼 Work Experience</h3>
                            <div className="space-y-6 text-gray-300">

                                {/* Murb */}
                                <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Murb</h4>
                                        <p className="text-blue-400 font-medium">Tech Developer Intern</p>
                                        <span className="inline-block mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                                            📅 Nov 2025 - Present
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Collaborated in a 5-member team to build frontend features supporting MURB’s expansion into the
                                                e-commerce/merchandise domain.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Replicated 6+ UI sections of MURB’s official website, focusing on visual consistency and reusable components</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Integrated 10+ form fields using React Hook Form and Zod for type-safe validation.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Delivered responsive UI components compatible across desktop and mobile devices using React, TypeScript,
                                                Tailwind CSS, and Lucide icons.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Motion Cut */}
                                <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Motion Cut</h4>
                                        <p className="text-blue-400 font-medium">Frontend Web Development Intern</p>
                                        <span className="inline-block mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                                            📅 Oct 2024 - Nov 2024
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Built user-focused web applications with emphasis on performance and UX optimization</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Developed responsive web interfaces using modern frontend technologies and frameworks</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Delivered outstanding project results through dedicated commitment to web development excellence</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Swecha Telangana */}
                                <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="mb-2">
                                        <h4 className="text-lg font-bold text-white">Swecha Telangana</h4>
                                        <p className="text-blue-400 font-medium">Software Development Intern</p>
                                        <span className="inline-block mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                                            📅 May 2024 - Jun 2024
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Developed local language-to-English translation system using Python, NumPy, and AI/ML algorithms</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Collected and processed real-time local language datasets to train machine learning models</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>Contributed to open-source language technology project at Swecha organization</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
