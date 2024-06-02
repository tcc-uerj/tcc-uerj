import { cn } from '@/lib/utils';
import React from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const HangmanKeyboard = ({ handleGuess, guessedLetters, word }: {
    handleGuess: (letter: string) => void;
    guessedLetters: string[];
    word: string;
}) => {

    const isLetterSelected = (letter: string) => guessedLetters.includes(letter);

    const isLetterInWord = (letter: string) => word.includes(letter);

    return (
        <div className="grid grid-cols-10 gap-4">
            {letters.map((letter) => (
                <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={isLetterSelected(letter)}
                    className={cn(
                        "border border-gray-100 rounded-md p-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
                        isLetterSelected(letter) && "bg-red-700 pointer-events-none select-none",
                        isLetterSelected(letter) && isLetterInWord(letter) && "bg-green-600 pointer-events-none select-none"
                    )}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default HangmanKeyboard;