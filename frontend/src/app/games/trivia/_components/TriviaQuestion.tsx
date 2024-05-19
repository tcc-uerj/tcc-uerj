import React, { useEffect } from 'react'
import { useInterval } from 'usehooks-ts';
import TriviaQuestionItem from './TriviaQuestionItem';
import { Progress } from '@/components/ui/progress';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';

interface TriviaQuestionProps {
    correctAnswers: number;
    currentQuestion: number;
    questionPoints: number;
    question: IChallengeQuestion;
    updateUserPoints: () => void;
    onNext: (isCorrect: boolean, points: number) => void;
}

export default function TriviaQuestion(props: TriviaQuestionProps) {
    const TOTAL_QUESTIONS = 7;
    const [seconds, setSeconds] = React.useState(0);

    useInterval(
        () => {
        setSeconds(seconds + 1);
        },
        props.correctAnswers < TOTAL_QUESTIONS ? 1000 : null
    );

    useEffect(() => {
        if (props.correctAnswers === TOTAL_QUESTIONS) {
            props.updateUserPoints();
        }
    }, [props.correctAnswers])
    
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
                    value={(props.correctAnswers * 100) / TOTAL_QUESTIONS}
                />
            </div>
            <TriviaQuestionItem
                key={props.question.id}
                triviaQuestion={props.question}
                questionPoints={props.questionPoints}
                onNext={props.onNext}
            />
        </div>
    )
}
