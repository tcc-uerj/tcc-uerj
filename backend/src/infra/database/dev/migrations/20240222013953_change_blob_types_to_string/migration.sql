-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_question_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quiz" TEXT NOT NULL,
    "is_correct_answer" BOOLEAN NOT NULL,
    "challenge_question_id" INTEGER NOT NULL,
    CONSTRAINT "question_quiz_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_question_quiz" ("challenge_question_id", "id", "is_correct_answer", "quiz") SELECT "challenge_question_id", "id", "is_correct_answer", "quiz" FROM "question_quiz";
DROP TABLE "question_quiz";
ALTER TABLE "new_question_quiz" RENAME TO "question_quiz";
CREATE TABLE "new_challenge_question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "challenge_id" INTEGER NOT NULL,
    "statement_title" TEXT NOT NULL,
    "statement_code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "challenge_question_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_challenge_question" ("challenge_id", "id", "statement_code", "statement_title", "type") SELECT "challenge_id", "id", "statement_code", "statement_title", "type" FROM "challenge_question";
DROP TABLE "challenge_question";
ALTER TABLE "new_challenge_question" RENAME TO "challenge_question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
