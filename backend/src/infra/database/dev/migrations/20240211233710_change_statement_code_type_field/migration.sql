/*
  Warnings:

  - You are about to alter the column `statement_code` on the `challenge_question` table. The data in that column could be lost. The data in that column will be cast from `String` to `Binary`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_challenge_question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "challenge_id" INTEGER NOT NULL,
    "statement_title" TEXT NOT NULL,
    "statement_code" BLOB NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "challenge_question_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_challenge_question" ("challenge_id", "id", "statement_code", "statement_title", "type") SELECT "challenge_id", "id", "statement_code", "statement_title", "type" FROM "challenge_question";
DROP TABLE "challenge_question";
ALTER TABLE "new_challenge_question" RENAME TO "challenge_question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
