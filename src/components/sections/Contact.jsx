import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                toast.success("Message sent successfully! 🎉");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                toast.error("Oops! Something went wrong. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <RevealOnScroll>
                <div className="px-4 max-w-md w-full mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name"
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message.."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                    <div className="mt-10 flex justify-center gap-10 text-white">
                        <a
                            href="https://github.com/Ansh0305"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-gray-300"
                            aria-label="GitHub"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.21 11.386c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.088-.745.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.776.418-1.303.76-1.603-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.405c1.02.005 2.047.137 3.002.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.922.43.368.814 1.096.814 2.213v3.287c0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/anshsirigiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.938v5.669H9.354V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.27 2.368 4.27 5.455v6.286zM5.337 7.433c-1.144 0-2.072-.93-2.072-2.077 0-1.15.928-2.08 2.072-2.08 1.15 0 2.076.93 2.076 2.08 0 1.145-.927 2.076-2.076 2.076zm1.777 13.02H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .782 0 1.748v20.504C0 23.215.792 24 1.771 24h20.451C23.2 24 24 23.215 24 22.252V1.749C24 .782 23.2 0 22.225 0z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
