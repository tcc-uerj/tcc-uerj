import React from 'react'

const HangmanWordDisplay = ({ word, guessedLetters }: {
    word: string;
    guessedLetters: string[];
}) => {
    return (
        <div className="flex justify-center items-center mb-10 space-x-2 text-4xl font-bold pointer-events-none select-none">
            {word?.split('').map((letter, index) => (
                <div key={index}>
                    {letter == ' ' ? (<div className="mr-4" />) : (guessedLetters.includes(letter) ? letter : '_')}
                </div>
            ))}
        </div>
    );
};

export default HangmanWordDisplay;