import { useState, useRef, useEffect } from 'react';
import { useGeminiChat } from '../hooks/useGeminiChat';
import emailjs from '@emailjs/browser';
import './ChatWidget.css';


// Chat bubble icon for the button
const ChatIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
    </svg>
);

// X icon for close button
const CloseIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Send icon for submit button
const SendIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
    </svg>
);

// Sparkle icon for AI badge
const SparkleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
);

export const ChatWidget = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isClosing, setIsClosing] = useState(false); // For exit animation

    // Get everything from our custom hook
    const {
        messages,
        isLoading,
        sendMessage,
        clearChat,
        contactState,
        contactInfo,
        updateContactInfo,
        resetContactFlow
    } = useGeminiChat();

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        // Auto-scroll to bottom when new messages appear
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        if (!inputValue.trim() || isLoading) return;

        // If in contact flow, handle differently
        if (contactState) {
            handleContactInput(inputValue);
        } else {
            await sendMessage(inputValue);
        }

        setInputValue('');
    };

    const handleContactInput = async (value) => {
        if (contactState === 'name') {
            updateContactInfo('name', value);
            await sendMessage(`My name is ${value}`);
        } else if (contactState === 'email') {
            updateContactInfo('email', value);
            await sendMessage(`My email is ${value}`);
        } else if (contactState === 'message') {
            updateContactInfo('message', value);
            await sendMessage(`My message is: ${value}`);

            // Send via EmailJS
            sendContactEmail({
                name: contactInfo.name,
                email: contactInfo.email,
                message: value
            });
        }
    };

    // Send contact info via EmailJS
    const sendContactEmail = async (data) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    message: `[From AI Chatbot]\n\n${data.message}`
                },
                import.meta.env.VITE_PUBLIC_KEY
            );
            resetContactFlow();
        } catch (err) {
        }
    };

    // Handle Enter key to submit
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    // Toggle chat open/closed with animation
    const toggleChat = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 200); // Match animation duration
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
            {/*FLOATING BUTTON*/}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="chat-bubble-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                     bg-gradient-to-r from-blue-500 to-cyan-500 text-white
                     flex items-center justify-center shadow-lg
                     hover:scale-110 transition-transform duration-200"
                    aria-label="Open chat"
                >
                    <ChatIcon />
                </button>
            )}

            {/*CHAT WINDOW*/}
            {(isOpen || isClosing) && (
                <div
                    className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] 
                      h-[500px] max-h-[calc(100vh-100px)] rounded-2xl
                      glass-effect flex flex-col overflow-hidden shadow-2xl
                      ${isClosing ? 'chat-window-exit' : 'chat-window-enter'}`}
                >
                    {/*HEADER */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 
                              flex items-center justify-center">
                                <SparkleIcon />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">Ansh's AI Assistant</h3>
                                <p className="text-xs text-gray-400">Ask me anything!</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                            aria-label="Close chat"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* MESSAGES AREA*/}
                    <div className="chat-messages-container flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Welcome message */}
                        {messages.length === 0 && (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                                flex items-center justify-center">
                                    <SparkleIcon />
                                </div>
                                <h4 className="text-white font-medium mb-2">Hey there! 👋</h4>
                                <p className="text-gray-400 text-sm">
                                    I'm Ansh's AI assistant. Ask me about his skills, projects, or experience!
                                </p>

                                {/* Quick prompts */}
                                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                    {['What are your skills?', 'Tell me about your projects', 'I want to contact Ansh'].map((prompt) => (
                                        <button
                                            key={prompt}
                                            onClick={() => sendMessage(prompt)}
                                            className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 
                                 text-blue-400 hover:bg-blue-500/10 transition"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Message list */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm
                    ${msg.role === 'user'
                                            ? 'message-user bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                                            : 'message-assistant bg-white/5 text-gray-200 rounded-bl-md'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-md flex gap-1">
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                </div>
                            </div>
                        )}

                        {/* Auto-scroll anchor */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* INPUT AREA*/}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                        <div className="chat-input-wrapper flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={
                                    contactState === 'name' ? "What's your name?" :
                                        contactState === 'email' ? "What's your email?" :
                                            contactState === 'message' ? "What message would you like to send?" :
                                                "Ask me anything..."
                                }
                                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 
                           focus:outline-none"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="p-2 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-white/5 
                           transition disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Send message"
                            >
                                <SendIcon />
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </>
    );
};
