import React, { useEffect } from 'react'
import TriviaQuestionItem from './TriviaQuestionItem';
import { Progress } from '@/components/ui/progress';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';

interface TriviaQuestionProps {
    correctAnswers: number;
    selectedAnswersQuantity: number;
    maxQuestions: number;
    currentQuestion: number;
    questionPoints: number;
    question: IChallengeQuestion;
    updateUserPoints: () => void;
    onNext: (isCorrect?: boolean, points?: number) => void;
    timer: number;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
}

export default function TriviaQuestion(props: TriviaQuestionProps) {
    useEffect(() => {
        if (props.timer === 0) {
            props.onNext();
        }

        const timer = setInterval(() => { props.setTimer(prev => prev - 1) }, 1000);

        return () => clearInterval(timer);
    }, [props.timer]);
    
    return (
        <div className='max-w-screen-xl mx-auto p-5'>
            <div className='flex flex-row justify-between w-full text-xl font-semibold'>
                <div className='flex-1 mr-5'>
                    <div>
                        Questão: {props.selectedAnswersQuantity}/{props.maxQuestions}
                    </div>
                </div>
                <div className='flex-1 text-right'>
                    <div className="text-md"> 
                        Pontuação: {props.correctAnswers}
                    </div>
                    <div>
                        Tempo: {new Date(props.timer * 1000).toISOString().substring(14, 19)}
                    </div>
                </div>
            </div>
            <div></div>
            <div className='flex flex-row justify-between w-full pt-5 pb-5'>
                <Progress
                    value={(props.selectedAnswersQuantity * 100) / props.maxQuestions}
                    indicatorColor='bg-indigo-100'
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
