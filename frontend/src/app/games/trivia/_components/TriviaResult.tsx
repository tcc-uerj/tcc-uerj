import React from 'react'

interface TriviaResultProps {
    correctAnswersQntity: number
};

export default function TriviaResult(props: TriviaResultProps) {
    return (
        <div className='max-w-screen-xl mx-auto p-4'>
            Você acertou o total de {props.correctAnswersQntity} questões!!
        </div>
    )
}
