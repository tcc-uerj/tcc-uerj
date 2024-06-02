import React, { useEffect, useState } from 'react';

const HangmanPuppet = ({ incorrectGuesses, width = 320, height = 320, color="rgb(165 180 252)" }: {
    incorrectGuesses: number;
    width?: number;
    height?: number;
    color?: string;
}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => { setIsClient(true); }, []);

    const dynamicStages = [
        <div key="none"></div>, // 0 incorrect guesses: nothing
        <circle key="head" cx={width * 0.6} cy={height * 0.25} r={width * 0.1} stroke={color} strokeWidth="4" fill="none" />, // 1 incorrect guess: head
        <line key="body" x1={width * 0.6} y1={height * 0.35} x2={width * 0.6} y2={height * 0.65} stroke={color} strokeWidth="4" />, // 2 incorrect guesses: body
        <line key="left-arm" x1={width * 0.6} y1={height * 0.45} x2={width * 0.45} y2={height * 0.55} stroke={color} strokeWidth="4" />, // 3 incorrect guesses: left arm
        <line key="right-arm" x1={width * 0.6} y1={height * 0.45} x2={width * 0.75} y2={height * 0.55} stroke={color} strokeWidth="4" />, // 4 incorrect guesses: right arm
        <line key="left-leg" x1={width * 0.6} y1={height * 0.65} x2={width * 0.5} y2={height * 0.85} stroke={color} strokeWidth="4" />, // 5 incorrect guesses: left leg
        <line key="right-leg" x1={width * 0.6} y1={height * 0.65} x2={width * 0.7} y2={height * 0.85} stroke={color} strokeWidth="4" /> // 6 incorrect guesses: right leg
    ];

    return (
        <div className="flex justify-center items-center mt-10 mb-7">
            <svg height={height} width={width}>
                <line x1={width * 0.05} y1={height - 10} x2={width * 0.95} y2={height - 10} stroke={color} strokeWidth="4" /> {/* base */}
                <line x1={width * 0.35} y1={height - 10} x2={width * 0.35} y2={height * 0.05} stroke={color} strokeWidth="4" /> {/* pole */}
                <line x1={width * 0.35} y1={height * 0.05} x2={width * 0.6} y2={height * 0.05} stroke={color} strokeWidth="4" /> {/* top */}
                <line x1={width * 0.6} y1={height * 0.05} x2={width * 0.6} y2={height * 0.15} stroke={color} strokeWidth="4" /> {/* noose */}

                {isClient && dynamicStages.slice(0, incorrectGuesses + 1)}
            </svg>
        </div>
    );
};

export default HangmanPuppet;