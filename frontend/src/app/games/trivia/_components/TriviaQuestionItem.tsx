import IChallengeQuestion from '@/interfaces/IChallengeQuestion';
import IQuestionOptions from '@/interfaces/IQuestionQuiz';
import React from 'react'

interface TriviaQuestionItemProps {
    triviaQuestion: IChallengeQuestion,
    questionPoints: number;
    onNext: (isCorrect: boolean, points: number) => void;
}

export default function TriviaQuestionItem({ triviaQuestion, questionPoints ,onNext }: TriviaQuestionItemProps) {
    const [selectedAnswer, setSelectedAnswer] = React.useState<IQuestionOptions | null>(null);

    function submitAnswer(answer: IQuestionOptions) {
        setSelectedAnswer(answer);
    }

    React.useEffect(() => {
        if (selectedAnswer) {
            const interval = setInterval(() => {
                onNext(selectedAnswer.isCorrectAnswer, questionPoints);
            }, 1000);
            return () => { clearInterval(interval); };
        }
    }, [onNext, triviaQuestion, selectedAnswer]);

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>
            <div
                className='font-medium lg:text-xl md:text-lg sm:text-base'
            >
                <p className="text-justify mt-3">
                    {triviaQuestion.statementCode}
                </p>
            </div>
            <div className='flex flex-col gap-5'>
            {triviaQuestion.questionOptions.map((option) => (
                <button
                    key={option.id}
                    className={`bg-gray-200 p-5 text-black font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-1000 ${
                        selectedAnswer && selectedAnswer === option
                        ? selectedAnswer.isCorrectAnswer
                            ? 'bg-green-400'
                            : 'bg-red-400'
                        : selectedAnswer && option.isCorrectAnswer
                        ? 'bg-green-400'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => submitAnswer(option)}
                >
                    {option.quiz}
                </button>
            ))}
            </div>
        </div>
    )
}
