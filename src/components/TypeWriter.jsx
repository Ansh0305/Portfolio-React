import { useState, useEffect, useCallback } from 'react';

export const TypeWriter = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentWord = words[wordIndex];

        if (isPaused) return;

        if (!isDeleting) {
            // Typing
            setDisplayText(currentWord.substring(0, displayText.length + 1));

            // Finished typing the word
            if (displayText.length === currentWord.length) {
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Deleting
            setDisplayText(currentWord.substring(0, displayText.length - 1));

            // Finished deleting
            if (displayText.length === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [displayText, isDeleting, isPaused, wordIndex, words, pauseTime]);

    useEffect(() => {
        if (isPaused) return;

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(tick, speed);

        return () => clearTimeout(timer);
    }, [tick, isDeleting, isPaused, typingSpeed, deletingSpeed]);

    return (
        <span className="text-blue-400">
            {displayText}
            <span className="animate-pulse ml-0.5">|</span>
        </span>
    );
};
