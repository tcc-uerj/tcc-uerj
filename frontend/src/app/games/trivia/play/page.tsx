'use client';

import React, { useState } from 'react'
import TriviaQuestion from '@/app/games/trivia/_components/TriviaQuestion';
import TriviaResult from '@/app/games/trivia/_components/TriviaResult';
import { QuestionType } from '@/enums/QuestionType';
import IChallengeQuestion from '@/interfaces/IChallengeQuestion';
import ITriviaQuestion from '@/interfaces/ITriviaQuestion';

const question1: IChallengeQuestion = {
    id: 1,
    challengeId: 1,
    statementTitle: "Questao 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
    type: QuestionType.QUIZ,
    questionOptions: [
        {
            id: 1,
            quiz: "Lorem",
            challengeQuestionId: 1,
            isCorrectAnswer: false,
        },
        {
            id: 2,
            quiz: "ipsum",
            challengeQuestionId: 1,
            isCorrectAnswer: false,
        },
        {
            id: 3,
            quiz: "dolor",
            challengeQuestionId: 1,
            isCorrectAnswer: true,
        },
        {
            id: 4,
            quiz: "sit",
            challengeQuestionId: 1,
            isCorrectAnswer: false,
        }
    ]
};

const question2: IChallengeQuestion = {
    id: 2,
    challengeId: 2,
    statementTitle: "Questao 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
    type: QuestionType.QUIZ,
    questionOptions: [
        {
            id: 5,
            quiz: "Lorem",
            challengeQuestionId: 2,
            isCorrectAnswer: false,
        },
        {
            id: 6,
            quiz: "ipsum",
            challengeQuestionId: 2,
            isCorrectAnswer: false,
        },
        {
            id: 7,
            quiz: "dolor",
            challengeQuestionId: 2,
            isCorrectAnswer: false,
        },
        {
            id: 8,
            quiz: "sit",
            challengeQuestionId: 2,
            isCorrectAnswer: true,
        }
    ]
};

const data: ITriviaQuestion[] = [
    {
        question: question1
    },
    {
        question: question2
    }
];

export default function TriviaGameHome() {
    const [correctAnswersQntity, setCorrectAnswersQntity] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div className="flex bg-gray-500 items-center flex-col p-6 rounded-lg shadow-lg mt-[100px]">
            {
                currentQuestion < data.length ? (
                    <TriviaQuestion
                        correctAnswers={correctAnswersQntity}
                        currentQuestion={currentQuestion}
                        totalQuestions={data.length}
                        question={data[currentQuestion]}
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