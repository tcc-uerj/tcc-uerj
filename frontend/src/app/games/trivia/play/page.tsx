'use client';

import React, { useEffect, useState } from 'react'
import TriviaQuestion from '@/app/games/trivia/_components/TriviaQuestion';
import TriviaResult from '@/app/games/trivia/_components/TriviaResult';
import { getChallenges } from '@/services/challenges';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';
import { useSession } from '@/hooks/useSession';
import { updateUser } from '@/services/users';
import IUser from '@/interfaces/IUser';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import { toast } from '@/components/ui/use-toast';

interface IChallengePointsState {
    id: number,
    points: number
}

export default function TriviaGameHome() {
    const router = useRouter();
    const session = useSession();

    const { data: sessionData, update: sessionUpdate } = session

    const [questions, setQuestions] = useState<IChallengeQuestion[]>([]);
    const [correctAnswersQntity, setCorrectAnswersQntity] = useState(0);
    const [challengePoints, setChallengePoints] = useState<IChallengePointsState[]>([]);
    const [correctAnswersPoints, setCorrectAnswersPoints] = useState(sessionData?.user?.points);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    async function fetchChallenges() {
        const { data } = await getChallenges()

        const challengeQuestions = data.flatMap(challenge => challenge.challengeQuestions);
        const challengePoints = data.map(challenge => ({ id: challenge.id, points: challenge.points }));

        setQuestions(challengeQuestions)
        setChallengePoints(challengePoints)
        setCurrentQuestion(getRandomNumber(0,challengeQuestions.length));
    }

    function getCurrentChallengePoints(currentQuestionIndex: number): number {
        const { challengeId } = questions[currentQuestionIndex];
        return challengePoints.find(item => item.id === challengeId)?.points ?? 0;
    }
    
    async function updateUserPoints() {
        if(correctAnswersPoints === undefined || !sessionData?.user) {
            return;
        }
        
        const newUser: IUser = { 
            ...sessionData?.user,
            points: correctAnswersPoints,
            gamesCount: sessionData.user.gamesCount + correctAnswersQntity
        }

        await updateUser(newUser)
        await sessionUpdate((data: Session) => ({ ...data, user: newUser}))

        router.push('/');

        toast({
            variant: "success",
            title: "Desafios finalizados.",
            description: "Parabéns, você completou os desafios! Se desejar enfrentar novos desafios, clique em 'Jogar' novamente",
            forceMount: true,
            duration: 2000
        });
    }

    function handleOnNext(isCorrect: boolean, points: number) {
        if (isCorrect) {
            setCorrectAnswersQntity(correctAnswersQntity + 1);

            if (correctAnswersPoints !== undefined) {
                setCorrectAnswersPoints(correctAnswersPoints + points)
            }
        }

        setCurrentQuestion(getRandomNumber(0, questions.length));
    }

    function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        fetchChallenges()
    }, [])

    return (
        <div>
            <div className="flex bg-gray-500 items-center flex-col p-6 rounded-lg shadow-lg mt-[100px]">
                {
                    currentQuestion < questions.length ? (
                        <TriviaQuestion
                        correctAnswers={correctAnswersQntity}
                        currentQuestion={currentQuestion}
                        questionPoints={getCurrentChallengePoints(currentQuestion)}
                        question={questions[currentQuestion]}
                        updateUserPoints={updateUserPoints}
                        onNext={handleOnNext}
                        />
                    ) : (
                        <TriviaResult correctAnswersQntity={correctAnswersQntity} />
                    )
                }
            </div>
        </div>
    )
}
