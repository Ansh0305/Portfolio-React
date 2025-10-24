import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const programmingLanguages = ["C/C++", "Java", "Python", "JavaScript"];
    const webDevelopment = ["React.js","Next.js", "JavaScript",  "Express.js", "Node.js", "REST API's", "Tailwind CSS", "Bootstrap", "Material UI"];
    const databases = ["MySQL", "MongoDB", "PostgreSQL", "Redis"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Hello, I am Sirigiri Sai Ansh Raj, pursuing my B.Tech degree from Swami Vivekananda Institute of Technology.
                            I am passionate about becoming a Full Stack Developer, with core skills in the MERN stack (MongoDB, Express.js, React.js, Node.js) and programming languages like Java. I also have an interest in IoT, where I enjoy bridging software with hardware to solve real-world problems.
                        </p>

                        {/* New Skills Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {programmingLanguages.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webDevelopment.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databases.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rest of your existing Education and Work Experience sections here */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.Tech in Computer Science </strong> -Swami Vivekananda
                                    Institute Of Technology, Hyderabad (2022-2026)
                                    <div> <strong>CGPA:</strong> 8.01 (currently) </div>
                                </li>
                                <li>
                                    <strong>Intermediate in MPC </strong> -Sri Chaitanya Junior College, Hyderabad (2020-2022)
                                    <div> <strong>Percentage:</strong> 75% </div>
                                </li>
                                <li>
                                    <strong>High School</strong> -Sankara Vidyalaya, Hyderabad (2020)
                                    <div> <strong>Percentage:</strong> 90% </div>
                                </li>

                                <li>Relevant courses: <strong>Data Structures & Algorithms, Database Management, System Design, OOPS</strong> </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Software Development Intern at Swecha Telangana (May 2024 - June 2024)
                                    </h4>
                                    <br />
                                    <p>
                                        Developed local language-to-English translation system using Python, NumPy, and AI/ML algorithms.
                                        Collected and processed real-time local language datasets to train machine learning models.
                                        Contributed to open-source language technology project at Swecha organization.

                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                    Frontend Web Development Intern at Motion cut (October 2024 - November 2024)
                                    </h4>
                                    <br />
                                    <p>
                                        Built user-focused web applications with emphasis on performance and user experience optimization.
                                        Developed responsive web interfaces using modern frontend technologies and frameworks.
                                        Demonstrated exceptional technical aptitude in frontend development practices and methodologies.
                                        Delivered outstanding project results through dedicated commitment to web development excellence.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
