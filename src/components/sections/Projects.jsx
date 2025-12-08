import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">IndiCamp</h3>
                        <p className="text-gray-400 mb-4">A full-stack campground discovery platform where users can create, explore, and review camping sites. Features interactive maps, secure authentication, cloud image storage, and community reviews. Built with Node.js, Express, MongoDB, and modern web technologies.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "Node.js", "MongoDB"].map((skills, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Ansh0305/CampGround" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code →</a>
                            <a href="https://indicamp.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">MovieHuby</h3>
                        <p className="text-gray-400 mb-4">MovieHub was built to provide a hassle-free movie discovery experience. The app uses the TMDB API to fetch popular and searched movies, showing movie posters, rankings, and handling loading and error states seamlessly. It also incorporates debounced search input and backend analytics integration (Appwrite).</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Vite + React", "CSS", "JavaScript", "Appwrite", "TMDB-API"].map((skills, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Ansh0305/MovieHub" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code →</a>
                            <a href="https://moviehuby.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">AI-EmailGenerator</h3>
                        <p className="text-gray-400 mb-4">The AI-EmailGenerator is a powerful, intelligent web application designed to streamline and automate the process of writing professional emails. Built with React and bundled using Vite for a fast development experience and dynamic user interface, it leverages cutting-edge Large Language Models (LLMs) to generate email drafts from simple user prompts.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "TailwindCSS"].map((skills, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Ansh0305/AI-EmailGenerator" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Spotify Clone</h3>
                        <p className="text-gray-400 mb-4">This project is a Spotify-inspired music streaming clone developed using only HTML, CSS, and vanilla JavaScript. It replicates the core interface and functionalities of the Spotify platform while operating entirely in the browser. All songs are stored locally, enabling fast playback without external APIs or databases.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((skills, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Ansh0305/Projects/tree/main/Spotify" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code →</a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}