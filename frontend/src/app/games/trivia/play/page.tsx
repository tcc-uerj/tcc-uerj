'use client';

import React, { useState } from 'react'
import TriviaQuestion from '../_components/TriviaQuestion';
import TriviaResult from '../_components/TriviaResult';

const question1: IChallengeQuestion = {
    id: 1,
    challenge_id: 1,
    statement_title: "Questao 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
    type: ""
};

const question1_options: IQuestionQuiz[] = [
    {
        id: 1,
        quiz: "Lorem",
        challenge_question_id: 1,
        is_correct_answer: false,
    },
    {
        id: 2,
        quiz: "ipsum",
        challenge_question_id: 1,
        is_correct_answer: false,
    },
    {
        id: 3,
        quiz: "dolor",
        challenge_question_id: 1,
        is_correct_answer: true,
    },
    {
        id: 4,
        quiz: "sit",
        challenge_question_id: 1,
        is_correct_answer: false,
    }
];

const question2: IChallengeQuestion = {
    id: 2,
    challenge_id: 2,
    statement_title: "Questao 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
    type: ""
};

const question2_options: IQuestionQuiz[] = [
    {
        id: 5,
        quiz: "Lorem",
        challenge_question_id: 2,
        is_correct_answer: false,
    },
    {
        id: 6,
        quiz: "ipsum",
        challenge_question_id: 2,
        is_correct_answer: false,
    },
    {
        id: 7,
        quiz: "dolor",
        challenge_question_id: 2,
        is_correct_answer: false,
    },
    {
        id: 8,
        quiz: "sit",
        challenge_question_id: 2,
        is_correct_answer: true,
    }
];

const data: ITriviaQuestion[] = [
    {
        question: question1,
        options: question1_options
    },
    {
        question: question2,
        options: question2_options
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
