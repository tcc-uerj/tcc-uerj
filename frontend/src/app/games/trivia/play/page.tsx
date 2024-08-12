'use client';

import React, { useEffect, useState, useTransition } from 'react'
import TriviaQuestion from '@/app/games/trivia/_components/TriviaQuestion';
import TriviaResult from '@/app/games/trivia/_components/TriviaResult';
import { getChallenges } from '@/services/challenges';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';
import { useSession } from '@/hooks/useSession';
import { updateUser } from '@/services/users';
import IUser from '@/interfaces/IUser';
import { toast } from '@/components/ui/use-toast';

interface IChallengePointsState {
    id: number,
    points: number
}

export default function TriviaGameHome() {
    const MAX_QUESTIONS = 7;
    const MAX_TIMER_SECONDS = 10;
    
    const { data: sessionData, updateUserSession } = useSession();
    const [questions, setQuestions] = useState<IChallengeQuestion[]>([]);
    const [correctAnswersQntity, setCorrectAnswersQntity] = useState(0);
    const [selectedAnswersQuantity, setSelectedAnswersQuantity] = useState(1);
    const [challengePoints, setChallengePoints] = useState<IChallengePointsState[]>([]);
    const [correctAnswersPoints, setCorrectAnswersPoints] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState<number>(MAX_TIMER_SECONDS);
    const [isPending, startTransition] = useTransition();

    const isGameFinished = selectedAnswersQuantity > MAX_QUESTIONS;

    async function fetchChallenges() {
        const { data } = await getChallenges()

        const challengeQuestions = data.flatMap(challenge => challenge.challengeQuestions);
        const challengePoints = data.map(challenge => ({ id: challenge.id, points: challenge.points }));

        setQuestions(challengeQuestions)
        setChallengePoints(challengePoints)
        setCurrentQuestion(getRandomNumber(challengeQuestions.length));
    }

    function getCurrentChallengePoints(currentQuestionIndex: number): number {
        const { challengeId } = questions[currentQuestionIndex];
        return challengePoints.find(item => item.id === challengeId)?.points ?? 0;
    }
    
    async function updateUserPoints() {
        if (correctAnswersPoints === undefined || !sessionData?.user) {
            return;
        }
        
        const newUser: IUser = { 
            ...sessionData?.user,
            points: sessionData.user.points + correctAnswersPoints,
            gamesCount: sessionData.user.gamesCount + 1
        }

        await updateUser(newUser)
        await updateUserSession();

        toast({
            variant: "success",
            title: "Jogo finalizado!",
            description: `Parabéns, você acabou de ganhar ${correctAnswersPoints} pontos! Se desejar jogar novamente, clique em 'Jogar de novo'`,
            duration: 2000
        });
    }

    function handleReset() {
        setCorrectAnswersQntity(0);
        setSelectedAnswersQuantity(1);
        setCorrectAnswersPoints(0);
        setCurrentQuestion(getRandomNumber(questions.length));
    }

    function handleOnNext(isCorrect: boolean = false, points: number = 0) {
        setSelectedAnswersQuantity(selectedAnswersQuantity + 1);
        setTimer(MAX_TIMER_SECONDS);

        if (isCorrect) {
            setCorrectAnswersQntity(correctAnswersQntity + 1);

            if (correctAnswersPoints !== undefined) {
                setCorrectAnswersPoints(correctAnswersPoints + points)
            }
        }

        const randomQuestionIndex = getRandomNumber(questions.length);
        setCurrentQuestion(randomQuestionIndex);
    }

    function getRandomNumber(max: number) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        startTransition(() => {
            fetchChallenges()
        })
    }, [])

    useEffect(() => {
        if (isGameFinished) {
            updateUserPoints();
        }
    }, [isGameFinished])

    if (isGameFinished) {
        return (
            <div>
                <div className="flex bg-indigo-500 items-center flex-col p-5 m-5 rounded-lg shadow-lg mt-[100px]">
                    <TriviaResult 
                        correctAnswersQntity={correctAnswersQntity} 
                        maxQuestions={MAX_QUESTIONS}
                        points={correctAnswersPoints}
                        onReset={handleReset}
                    />
                </div>
            </div>
        )
    }

    if (!isPending && questions && currentQuestion && selectedAnswersQuantity <= MAX_QUESTIONS) {
        return (
            <div>
                <div className="flex bg-indigo-500 items-center flex-col p-5 m-5 rounded-lg shadow-lg mt-[100px]">
                    <TriviaQuestion
                        maxQuestions={MAX_QUESTIONS}
                        correctAnswers={correctAnswersQntity}
                        selectedAnswersQuantity={selectedAnswersQuantity}
                        currentQuestion={currentQuestion}
                        questionPoints={getCurrentChallengePoints(currentQuestion)}
                        question={questions[currentQuestion]}
                        updateUserPoints={updateUserPoints}
                        onNext={handleOnNext}
                        timer={timer}
                        setTimer={setTimer}
                    />
                </div>
            </div>
        )
    }
}
