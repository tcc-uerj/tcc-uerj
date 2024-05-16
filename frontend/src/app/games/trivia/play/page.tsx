'use client';

import React, { useEffect, useState } from 'react'
import TriviaQuestion from '@/app/games/trivia/_components/TriviaQuestion';
import TriviaResult from '@/app/games/trivia/_components/TriviaResult';
import { getChallenges } from '@/services/challenges';
import IChallenge from '@/interfaces/IChallenge';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';

export default function TriviaGameHome() {
    const [questions, setQuestions] = useState<IChallengeQuestion[]>([]);

    const [correctAnswersQntity, setCorrectAnswersQntity] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    async function fetchChallenges() {
        const { data } = await getChallenges()
        const challengeQuestions = data.flatMap(challenge => challenge.challengeQuestions);        
        setQuestions(challengeQuestions)
    }

    function getRandomQuestionIndex(currentIndex: number) {
        let newIndex;

        do {
            newIndex = Math.floor(Math.random() * questions.length);
        } while (newIndex === currentIndex);

        return newIndex;
    }

    useEffect(() => {
        fetchChallenges()
    }, [])

    return (
        <div className="flex bg-gray-500 items-center flex-col p-6 rounded-lg shadow-lg mt-[100px]">
            {
                currentQuestion < questions.length ? (
                    <TriviaQuestion
                        correctAnswers={correctAnswersQntity}
                        currentQuestion={currentQuestion}
                        totalQuestions={questions.length}
                        question={questions[currentQuestion]}
                        onNext={(isCorrect) => {
                            if (isCorrect) {
                                setCorrectAnswersQntity(correctAnswersQntity + 1);
                            }
                            setCurrentQuestion(getRandomQuestionIndex(currentQuestion));
                        }}
                    />
                ) : (
                    <TriviaResult correctAnswersQntity={correctAnswersQntity} />
                )
            }
        </div>
    )
}
