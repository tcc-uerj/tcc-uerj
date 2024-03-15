-- CreateTable
CREATE TABLE "question_quiz" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "is_correct_answer" BOOLEAN NOT NULL,
    "challenge_question_id" INTEGER NOT NULL,

    CONSTRAINT "question_quiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "question_quiz" ADD CONSTRAINT "question_quiz_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
