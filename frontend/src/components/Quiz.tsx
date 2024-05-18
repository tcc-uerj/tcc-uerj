"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import IChallengeQuestion from "@/interfaces/IChallengeQuestion";
import IQuestionOptions from "@/interfaces/IQuestionQuiz";

export default function Quiz({ question, options, handleCorrectAnswer, handleWrongAnswer }: {
    question: IChallengeQuestion | undefined,
    options: IQuestionOptions[] | undefined,
    handleCorrectAnswer?: () => void,
    handleWrongAnswer?: () => void,
}) {
    const [showModal, setShowModal] = useState(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionSelect = (index: number | null, isCorrectAnwer: boolean | null) => {
        setSelectedOption(index);
        setShowModal(true);
        setIsCorrectAnswer(isCorrectAnwer);
    };

    const handleQuizCorrectAnswer = () => {
        if (handleCorrectAnswer) {
            handleCorrectAnswer();
        }
        closeModal();
    }

    const handleQuizWrongAnswer = () => {
        if (handleWrongAnswer) {
            handleWrongAnswer();
        }
        closeModal();
    }

    const closeModal = () => {
        setShowModal(false);
        setIsCorrectAnswer(null);
    };

    const getOptionBackgroundColor = () => {
        if (isCorrectAnswer == null) return '';

        if (isCorrectAnswer) return 'bg-green-700';

        return 'bg-red-700';
    }

    return (
        <div className="border border-gray-700 rounded p-5">
            <h1 className="text-3xl font-bold mb-4">Questão</h1>
            <h2 className="text-1xl font-bold mb-4">Objetivo: {question?.statementTitle}</h2>
            <h2 className="text-1xl font-bold mb-4">Pergunta: {String(question?.statementCode)}</h2>
            <h1 className="text-2xl font-bold mb-4">Selecione a resposta correta:</h1>
            <div className="grid grid-cols-1 gap-4">
                {options && options.map((option, index) => (
                    <Button
                        key={index}
                        className={`bg-blue-500 text-white p-2 rounded ${selectedOption === index ? 'selected ' + getOptionBackgroundColor() : ''} `}
                        onClick={() => handleOptionSelect(index, option.isCorrectAnswer)}
                    >
                        {option.quiz}
                    </Button>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white p-5 rounded-md">
                        <div>
                            {isCorrectAnswer ? (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-green-500 text-3xl font-bold">Resposta Certa!</p>
                                        <div className="text-green-700 font-bold">Q: {String(question?.statementCode)}</div>
                                        <div className="text-green-700 font-bold">R: "{selectedOption != null ? options?.at(selectedOption)?.quiz : ''}"</div>
                                        <div className="text-gray-500 text-2xl">Parabéns! Você acertou! Agora você demonstrou que aprendeu e pode concluir o curso!</div>
                                    </div>
                                    <Button
                                        onClick={handleQuizCorrectAnswer}
                                    >
                                        Concluir curso
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-red-500 text-3xl font-bold">Resposta Errada!</p>
                                        <div className="text-red-700 font-bold">Q: {String(question?.statementCode)}</div>
                                        <div className="text-red-700 font-bold">R: "{selectedOption != null ? options?.at(selectedOption)?.quiz : ''}"</div>
                                        <div className="text-gray-500 text-2xl">Essa não é a resposta correta. Não desanime, tente novamente!</div>
                                    </div>
                                    <Button
                                        onClick={handleQuizWrongAnswer}
                                    >
                                        Tentar novamente
                                    </Button>
                                </div>
                            )}
                        </div>
                        

                    </div>
                </div>
            )}
        </div>
    )
}