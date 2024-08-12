"use client";
import { useEffect, useState, useTransition } from "react";
import HangmanKeyboard from "@/app/games/hangman/_components/HangmanKeyboard";
import HangmanPuppet from "@/app/games/hangman/_components/HangmanPuppet";
import HangmanWordDisplay from "@/app/games/hangman/_components/HangmanWordDisplay";
import { getHangmanQuestions } from "@/services/hangman";
import { IHangmanQuestions } from "@/interfaces/IHangmanQuestions";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";
import { updateUser } from "@/services/users";
import IUser from "@/interfaces/IUser";

export default function HangmanGame() {
    const { data: sessionData, updateUserSession } = useSession();
    const [hangmanQuestions, setHangmanQuestions] = useState([] as IHangmanQuestions[]);
    const [currentQuestion, setCurrentQuestion] = useState({} as IHangmanQuestions);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [isPending, startTransition] = useTransition();

    const maxIncorrectGuesses = 6;
    const getRandomQuestion = (data: IHangmanQuestions[]) => data[Math.floor(Math.random() * data.length)];

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!currentQuestion?.answer.includes(letter)) {
                setIncorrectGuesses(incorrectGuesses + 1);
            }
        }
    };

    const isGameWon = currentQuestion?.answer?.split('').filter(l => l !== ' ').every((letter) => guessedLetters.includes(letter));
    const isGameLost = incorrectGuesses >= maxIncorrectGuesses;
    const isGameFinished = isGameWon || isGameLost;

    const handleReset = () => {
        setCurrentQuestion(getRandomQuestion(hangmanQuestions));
        setGuessedLetters([]);
        setIncorrectGuesses(0);
    };

    const fetchQuestions = async () => {
        const { data } = await getHangmanQuestions();

        data.forEach((question) => question.answer = question.answer.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase());

        setHangmanQuestions(data);
        setCurrentQuestion(getRandomQuestion(data));
    }

    async function updateUserPoints(points: number) {
        if (!sessionData?.user) {
            return;
        }
        
        const newUser: IUser = { 
            ...sessionData?.user,
            points: sessionData.user.points + points,
            gamesCount: sessionData.user.gamesCount + 1
        }

        await updateUser(newUser)
        await updateUserSession();
    }

    useEffect(() => {
        startTransition(() => {
            fetchQuestions();
        });
    }, [])

    useEffect(() => {
        if (isGameWon) {
            updateUserPoints(currentQuestion.points);
        }
    }, [isGameWon])

    if (isPending || !hangmanQuestions || !currentQuestion) {
        return <div>Carregando...</div>
    }

    if (!isPending && hangmanQuestions && currentQuestion) {
        return (
            <div className="p-5">
                <div>
                    <h1 className="text-2xl font-bold">Hangman Game</h1>
                    <p>Tentativas: {incorrectGuesses}/{maxIncorrectGuesses}</p>
                    <div className="flex justify-center items-center mt-5">
                        <h2 className="text-indigo-100 font-bold">Dica: {currentQuestion?.hint}</h2>
                    </div>
                    <HangmanPuppet incorrectGuesses={incorrectGuesses} />
                    <HangmanWordDisplay word={currentQuestion?.answer} guessedLetters={guessedLetters} />
                    {!isGameFinished && <HangmanKeyboard handleGuess={handleGuess} guessedLetters={guessedLetters} word={currentQuestion?.answer} />}
                    
                    {isGameFinished && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                            <div className="bg-white p-8 rounded-md">
                                <div className="space-y-8">
                                    <div className="space-y-5">
                                        {isGameWon && (
                                            <div className="space-y-5">
                                                <p className="text-green-500 text-3xl font-bold">🎉 Você Ganhou!</p>
                                                <div className="text-green-700 font-bold">Parabéns! Você acertou a palavra {currentQuestion?.answer} e ganhou {currentQuestion?.points} pontos.</div>
                                            </div>
                                        )}

                                        {isGameLost && (
                                            <div className="space-y-5">
                                                <p className="text-red-500 text-3xl font-bold">👎 Você Perdeu!</p>
                                                <div className="text-red-700 font-bold">A palavra certa era {currentQuestion?.answer}</div>
                                            </div>
                                        )}

                                        <Button className="w-full" onClick={handleReset}>Jogar de novo!</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}