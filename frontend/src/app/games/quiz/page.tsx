import Quiz from '@/components/Quiz';
import React from 'react'

const challenge_question: IChallengeQuestion = {
    id: 1,
    challengeId: 1,
    statementTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
    type: QuestionType.QUIZ
};

const options: IQuestionOptions[] = [
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
];

export default function QuizGame() {
    return (
        <div>
            {/* <Quiz
                question={challenge_question}
                options={options}
            /> */}
        </div>
    )
}
