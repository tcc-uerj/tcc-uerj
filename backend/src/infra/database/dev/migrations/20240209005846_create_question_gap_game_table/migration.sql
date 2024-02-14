-- CreateTable
CREATE TABLE "question_gap_game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "challenge_question_id" INTEGER NOT NULL,
    CONSTRAINT "question_gap_game_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
