-- CreateTable
CREATE TABLE "challenge_question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "challenge_id" INTEGER NOT NULL,
    "statement_title" TEXT NOT NULL,
    "statement_code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "challenge_question_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
