"use client"

import { useState } from "react";
import { Button } from "./ui/button";

export default function Quiz({ question, options }: {
    question: IChallengeQuestion,
    options: IQuestionQuiz[]
}) {
    const [showModal, setShowModal] = useState(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionSelect = (index: number | null, isCorrectAnwer: boolean | null) => {
        setSelectedOption(index);
        setShowModal(true);
        setIsCorrectAnswer(isCorrectAnwer);
    };

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
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Quiz:</h1>
            <h2 className="text-1xl font-bold mb-4">{question.statement_title}</h2>
            <h1 className="text-3xl font-bold mb-4">Selecione a resposta correta:</h1>
            <div className="grid grid-cols-1 gap-4">
                {options && options.map((option, index) => (
                    <Button
                        key={index}
                        className={`bg-blue-500 text-white p-2 rounded ${selectedOption === index ? 'selected ' + getOptionBackgroundColor() : ''} `}
                        onClick={() => handleOptionSelect(index, option.is_correct_answer)}
                    >
                        {option.quiz}
                    </Button>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        {isCorrectAnswer ? (
                            <p className="text-green-500 font-bold">Resposta Certa!</p>
                        ) : (
                            <p className="text-red-500 font-bold">Resposta Errada!</p>
                        )}
                        
                        <Button
                            onClick={closeModal}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}