-- CreateTable
CREATE TABLE "question_options" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "is_correct_answer" BOOLEAN NOT NULL,
    "challenge_question_id" INTEGER NOT NULL,

    CONSTRAINT "question_options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "question_options" ADD CONSTRAINT "question_options_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
