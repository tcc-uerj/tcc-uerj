-- CreateTable
CREATE TABLE "hangman_questions" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "hint" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "points" SMALLINT NOT NULL,

    CONSTRAINT "hangman_questions_pkey" PRIMARY KEY ("id")
);
