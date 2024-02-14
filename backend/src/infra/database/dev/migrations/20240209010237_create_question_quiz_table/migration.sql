-- CreateTable
CREATE TABLE "question_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quiz" BLOB NOT NULL,
    "is_correct_answer" BOOLEAN NOT NULL,
    "challenge_question_id" INTEGER NOT NULL,
    CONSTRAINT "question_quiz_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
