/*
  Warnings:

  - Added the required column `challenge_id` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "challenge" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "points" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    CONSTRAINT "lesson_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_lesson" ("content", "description", "id", "imageUrl", "subject") SELECT "content", "description", "id", "imageUrl", "subject" FROM "lesson";
DROP TABLE "lesson";
ALTER TABLE "new_lesson" RENAME TO "lesson";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
