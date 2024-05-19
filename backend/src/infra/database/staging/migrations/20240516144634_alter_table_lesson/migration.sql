/*
  Warnings:

  - You are about to drop the column `challenge_id` on the `lesson` table. All the data in the column will be lost.
  - Added the required column `challenge_question_id` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_challenge_id_fkey";

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "challenge_id",
ADD COLUMN     "challenge_question_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_challenge_question_id_fkey" FOREIGN KEY ("challenge_question_id") REFERENCES "challenge_question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
