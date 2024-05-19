"use client"

import Quiz from "@/components/Quiz";
import { LessonContext, LessonContextType } from "@/contexts/LessonContext";
import { useContext } from "react";

export default function Challenge() {
    const { lesson, userLesson } = useContext<LessonContextType>(LessonContext);

    if (userLesson?.challengeCompleted) {
        return (
            <div className="flex">
                <div className="text-2xl ml-5 mt-5">🎉 Parabéns! Você já resolveu o teste de conhecimento e completou o curso de {lesson?.subject.split("_").join(" ").toLowerCase()} </div>
            </div>
        )
    }

    if (lesson) {
        return (
            <div className="flex">
                <div className="m-8">
                    <div className="font-bold text-4xl">Desafio de Conhecimento: A Última Prova!</div>
                    <div className="text-lg mt-5">
                        Parabéns por concluir os estudos! Agora é hora de testar seus conhecimentos. <br />
                        Este quiz abrangente apresenta perguntas sobre {lesson?.subject.split("_").join(" ").toLowerCase()}.
                        Demonstre que você aprendeu e responda corretamente a pergunta abaixo para concluir o curso. Boa sorte!
                    </div>
                    <div className="mt-5">
                        <Quiz key={lesson?.challengeQuestion.id} question={lesson?.challengeQuestion} options={lesson?.challengeQuestion.questionOptions} />
                    </div>
                </div>
            </div>
        );
    }
}