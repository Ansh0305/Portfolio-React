export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-8 mt-auto">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col items-center gap-4 text-center">
                    {/* Brand */}
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Ansh.me
                    </span>
                    <p className="text-gray-500 text-sm">
                        Building the future, one line at a time.
                    </p>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs mt-2">
                        © {currentYear} Sirigiri Sai Ansh Raj. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
