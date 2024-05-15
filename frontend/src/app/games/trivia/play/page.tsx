'use client';

import React, { useEffect, useState } from 'react'
import TriviaQuestion from '@/app/games/trivia/_components/TriviaQuestion';
import TriviaResult from '@/app/games/trivia/_components/TriviaResult';
import { QuestionType } from '@/enums/QuestionType';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';
import ITriviaQuestion from '@/interfaces/ITriviaQuestion';
import { getChallenges } from '@/services/challenges';

export default function TriviaGameHome() {
    const [challenges, setChallenges] = useState<IChallengeQuestion[]>([]);

    const [correctAnswersQntity, setCorrectAnswersQntity] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const fetchChallenges = async () => {
        const { data } = await getChallenges()
        setChallenges(data)
        console.log('challenges: ', data);
        
    }

    useEffect(() => {
        fetchChallenges()
    }, [])

    return (
        <div className="flex bg-gray-500 items-center flex-col p-6 rounded-lg shadow-lg mt-[100px]">
            {
                currentQuestion < challenges.length ? (
                    <TriviaQuestion
                        correctAnswers={correctAnswersQntity}
                        currentQuestion={currentQuestion}
                        totalQuestions={challenges.length}
                        question={challenges[currentQuestion]}
                        onNext={(isCorrect) => {
                            if (isCorrect) {
                                setCorrectAnswersQntity(correctAnswersQntity + 1);
                            }
                            setCurrentQuestion(currentQuestion + 1);
                        }}
                    />
                ) : (
                    <TriviaResult correctAnswersQntity={correctAnswersQntity} />
                )
            }

        </div>
    )
}