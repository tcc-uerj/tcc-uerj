"use client"

import Quiz from "@/components/Quiz";
import { LessonContext, LessonContextType } from "@/contexts/LessonContext";
import { useContext } from "react";

export default function Challenge() {
    const { lesson } = useContext<LessonContextType>(LessonContext);

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
                    {lesson?.challenge.challengeQuestions.map((question, index) => (
                        <Quiz key={question.id} question={question} options={question.questionOptions} />
                    ))}
                </div>
            </div>
        </div>
    );
}