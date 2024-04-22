-- CreateTable
CREATE TABLE "challenge_question" (
    "id" SERIAL NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    "statement_title" TEXT NOT NULL,
    "statement_code" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "challenge_question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "challenge_question" ADD CONSTRAINT "challenge_question_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;