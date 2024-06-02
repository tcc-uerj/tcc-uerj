"use client";
import { useEffect, useState } from "react";
import HangmanKeyboard from "@/app/games/hangman/_components/HangmanKeyboard";
import HangmanPuppet from "@/app/games/hangman/_components/HangmanPuppet";
import HangmanWordDisplay from "@/app/games/hangman/_components/HangmanWordDisplay";

export default function HangmanGame() {
    const words = ['REFACTORING', 'DESIGN PATTERNS', 'UNIT TESTING', 'CLEAN CODE'];
    const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

    const [word, setWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const maxIncorrectGuesses = 6;

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!word.includes(letter)) {
                setIncorrectGuesses(incorrectGuesses + 1);
            }
        }
    };

    const isGameWon = word.split('').filter(l => l !== ' ').every((letter) => guessedLetters.includes(letter));
    const isGameLost = incorrectGuesses >= maxIncorrectGuesses;

    const handleReset = () => {
        setWord(getRandomWord());
        setGuessedLetters([]);
        setIncorrectGuesses(0);
    };

    useEffect(() => {
        handleReset();
    }, []);
    
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Hangman Game</h1>
            <p>Tentativas: {incorrectGuesses}/{maxIncorrectGuesses}</p>
            {/* <div className="flex justify-center items-center mt-5">
                <h2 className="text-xl">Frase dica</h2>
            </div> */}
            <HangmanPuppet incorrectGuesses={incorrectGuesses} />
            <HangmanWordDisplay word={word} guessedLetters={guessedLetters} />
            {!isGameWon && !isGameLost && <HangmanKeyboard handleGuess={handleGuess} guessedLetters={guessedLetters} word={word} />}
            {isGameWon && <p>Você Ganhou! <button onClick={handleReset}>Jogar de novo!</button></p>}
            {isGameLost && <p>Você Perdeu! A palavra certa era {word}. <button onClick={handleReset}>Jogar de novo!</button></p>}
        </div>
    )
}