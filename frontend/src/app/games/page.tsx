import Quiz from "@/components/Quiz";

const challenge_question: IChallengeQuestion = {
  id: 1,
  challenge_id: 1,
  statement_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, eros eu blandit gravida, lectus tortor condimentum eros, in pellentesque quam ex sit amet risus. Nam ullamcorper euismod magna eget posuere. Aliquam aliquam leo ac mauris finibus ornare. Donec lacinia eget odio id accumsan. Fusce dignissim vel lacus at egestas. Vestibulum posuere accumsan placerat. Pellentesque sed scelerisque est, commodo consequat eros. Nam erat mauris, volutpat eget congue ut, sodales vitae diam. Sed maximus nunc sem, sit amet auctor est volutpat sed. Cras ac lorem eu lorem fermentum efficitur ac at eros. Sed fringilla dapibus urna, id imperdiet ante hendrerit sit amet.?",
  type: ""
};

const options: IQuestionQuiz[] = [
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

export default function Games() {
    
  return (
    <div className="flex justify-center items-center">
      <div className="w-2/3">
        <Quiz
            question={challenge_question}
            options={options}
        />
      </div>
    </div>
  )
}
