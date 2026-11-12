"use client";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export default function Typewriter({
    words,
    typingSpeed = 120,
    deletingSpeed = 70,
    pauseDuration = 1500,
    className = "",
}: TypewriterTextProps) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing forward
                    setText(currentWord.slice(0, text.length + 1));

                    if (text.length + 1 === currentWord.length) {
                        setTimeout(() => setIsDeleting(true), pauseDuration);
                    }
                } else {
                    // Untyping (deleting)
                    setText(currentWord.slice(0, text.length - 1));

                    if (text.length - 1 === 0) {
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <h1 className={`inline-flex items-center ${className}`}>
            <span>{text || "\u200B"}</span>
            {/* <span className="ml-1 inline-block w-[3px] h-[1em] bg-current animate-pulse" /> */}
        </h1>
    );
}
