import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    const projects = [
        {
            name: "Velox - Real-Time Chat Application",
            description: "Velox is a secure realtime chat application with ephemeral rooms, instant messaging, and live event streaming. Built using Next.js, Elysia, and Redis, it leverages Redis pub/sub and TTL-based storage to deliver fast, scalable, and reliable realtime communication., showing movie posters, rankings, and handling loading and error states seamlessly.",
            skills: ["Next.js", "TailwindCSS", "ElysiaJS", "Redis(upstash)", "Zod"],
            github: "https://github.com/Ansh0305/Velox",
            live: "https://velox-chat.vercel.app/",
            image: "/projects/velox.png",
        },
        {
            name: "IndiCamp",
            description: "A full-stack campground discovery platform where users can create, explore, and review camping sites. Features interactive maps, secure authentication, cloud image storage, and community reviews.",
            skills: ["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "Node.js", "MongoDB"],
            github: "https://github.com/Ansh0305/CampGround",
            live: "https://indicamp.onrender.com/",
            image: "/projects/indicamp.png", // TODO: Add project screenshot
        },
        {
            name: "AI-EmailGenerator",
            description: "A powerful, intelligent web application designed to streamline and automate the process of writing professional emails. Leverages cutting-edge Large Language Models (LLMs) to generate email drafts from simple user prompts.",
            skills: ["React", "Node.js", "TailwindCSS", "OpenAI-API"],
            github: "https://github.com/Ansh0305/AI-EmailGenerator",
            live: "https://ai-emailgenerator.netlify.app/",
            image: "/projects/ai-email.png",
        },
        {
            name: "Buyza - Ecommerce Web Application",
            description: "A full-stack e-commerce web application designed to deliver a smooth and user-friendly online shopping experience. Features product browsing, filtering, cart management, and secure checkout.",
            skills: ["Next.js", "React", "Node.js", "TailwindCSS", "PostgreSQL", "Stripe"],
            github: "https://github.com/Ansh0305/Buyza",
            live: null, // Under construction
            image: "/projects/buyza.jpg",
            underConstruction: true,
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all relative"
                            >

                                {/* Project Image */}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white/30">
                                            {project.name.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        View Code →
                                    </a>
                                    {project.underConstruction ? (
                                        <span className="text-yellow-500">Under Construction 🚧</span>
                                    ) : (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};