import React from 'react'
import { useInterval } from 'usehooks-ts';
import TriviaQuestionItem from './TriviaQuestionItem';
import { Progress } from '@/components/ui/progress';
import ITriviaQuestion from '@/interfaces/ITriviaQuestion';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';

interface TriviaQuestionProps {
    correctAnswers: number;
    currentQuestion: number;
    totalQuestions: number;
    question: IChallengeQuestion;
    onNext: (isCorrect: boolean) => void;
}

export default function TriviaQuestion(props: TriviaQuestionProps) {
    const [seconds, setSeconds] = React.useState(0);
    useInterval(
        () => {
        setSeconds(seconds + 1);
        },
        props.currentQuestion < props.totalQuestions ? 1000 : null
    );
    
    return (
        <div className='max-w-screen-xl mx-auto p-4'>
            <div className='flex flex-row justify-between w-full text-xl font-semibold'>
                <div className='flex-1 mr-5'>
                    Pontuação: {props.correctAnswers}
                </div>
                <div className='flex-1 text-right'>
                    Tempo: {new Date(seconds * 1000).toISOString().substring(14, 19)}
                </div>
            </div>
            <div className='flex flex-row justify-between w-full pt-5 pb-5'>
                <Progress
                    value={(props.currentQuestion * 100) / props.totalQuestions}
                />
            </div>
            <TriviaQuestionItem
                key={props.question.id}
                triviaQuestion={props.question}
                onNext={props.onNext}
            />
        </div>
    )
}
