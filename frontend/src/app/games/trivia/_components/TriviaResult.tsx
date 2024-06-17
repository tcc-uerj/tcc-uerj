import { Button } from '@/components/ui/button'
import React from 'react'

interface TriviaResultProps {
    correctAnswersQntity: number;
    maxQuestions: number;
    points: number;
    onReset: (isCorrect?: boolean, points?: number) => void;
};

export default function TriviaResult(props: TriviaResultProps) {

    function handleOnClick() {
        props.onReset();
    }

    return (
        <div className='max-w-screen-xl mx-auto p-4 space-y-5'>
            <div className="text-indigo-200 text-3xl font-bold">Jogo terminou!</div>
            <div className="text-xl font-bold">
                Você acertou {props.correctAnswersQntity} de {props.maxQuestions} questões.
            </div>
            <div className="text-xl font-bold">Recompensa: {props.points} pontos</div>

            <Button className="w-full bg-indigo-800 mt-5" onClick={handleOnClick}>Clique aqui para jogar de novo!</Button>
        </div>
    )
}
