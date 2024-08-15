"use client"

import Quiz from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LessonContext, LessonContextType } from "@/contexts/LessonContext";
import { useSession } from "@/hooks/useSession";
import IChallengeQuestion from "@/interfaces/IChallengeQuestion";
import { updateUser, updateUserLesson } from "@/services/users";
import { useContext, useState } from "react";

export default function Challenge() {
    const { lesson, userLesson } = useContext<LessonContextType>(LessonContext);
    const [challengeQuestion, setChallengeQuestion] = useState<IChallengeQuestion | null>(null);

    const CHALLENGE_ATTEMPTS = 3;
    const [challengeQuestionAttempts, setChallengeQuestionAttempts] = useState(CHALLENGE_ATTEMPTS);
    const [isChallengeQuestionStarted, setIsChallengeQuestionStarted] = useState(false);

    const session = useSession();
    const { toast } = useToast();

    if (userLesson?.challengeCompleted) {
        return (
            <div className="flex">
                <div className="text-2xl ml-5 mt-5">🎉 Parabéns! Você já resolveu o teste de conhecimento e completou o curso de {lesson?.subject.split("_").join(" ").toLowerCase()} </div>
            </div>
        )
    }

    function handleChallengeStart() {
        setIsChallengeQuestionStarted(true);
        getRandomChallengeQuestion();
    }

    function getRandomChallengeQuestion() {
        if (!lesson?.challenge.challengeQuestions) {
            setChallengeQuestion(null);
            return;
        }

        const randomIndex = Math.floor(Math.random() * lesson?.challenge.challengeQuestions.length);
        setChallengeQuestion(lesson?.challenge.challengeQuestions[randomIndex]);
    }

    async function handleUpdateUser() {
        if (!session?.data || !lesson?.challenge) return;

        await updateUser({ points: session.data?.user.points + lesson?.challenge.points });
    }

    async function handleUpdateUserLesson() {
        if (!userLesson) return;

        await updateUserLesson(userLesson?.id, { challengeCompleted: true });
    }

    async function handleCorrectAnswer() {
        try {
            Promise.all([ handleUpdateUser(), handleUpdateUserLesson() ]);
    
            await session.updateUserSession();

            toast({
                variant: "success",
                title: `Você concluiu o curso de ${lesson?.subject.split("_").join(" ").toLowerCase()}!`,
                description: `Como recompensa desbloqueou uma nova conquista!`,
                duration: 5000, 
            })
    
            setTimeout(() => {
                location.reload();
            }, 3000);
        } catch (error) {
            throw error;
        }
    }

    async function handleWrongAnswer() {
        // setChallengeQuestionAttempts(prev => prev - 1);
        getRandomChallengeQuestion();
    }

    if (lesson) {
        return (
            <div className="flex">
                <div className="m-8">
                    <div className="font-bold text-4xl">Desafio de Conhecimento: A Última Prova!</div>
                    <div className="text-lg mt-5">
                        Parabéns por concluir os estudos! Agora é hora de testar seus conhecimentos. <br />
                        Este quiz abrangente apresenta perguntas sobre {lesson?.subject.split("_").join(" ").toLowerCase()}.
                        Demonstre que você aprendeu e responda corretamente a pergunta abaixo para concluir o curso. Boa sorte! <br />
                        <p className="text-md text-muted-foreground text-red-200">Atenção: Caso erre a questão, outra será escolhida aleatoriamente para você tentar resolver novamente.</p>
                    </div>
                    <div className="mt-5">
                        {!isChallengeQuestionStarted && challengeQuestionAttempts ? (
                            <Button onClick={() => handleChallengeStart()} className="bg-blue-500 text-white p-2 rounded"
                            >
                                Iniciar Desafio
                            </Button>
                        ) : (
                            <Quiz question={challengeQuestion} options={challengeQuestion?.questionOptions} handleCorrectAnswer={handleCorrectAnswer} handleWrongAnswer={handleWrongAnswer} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}