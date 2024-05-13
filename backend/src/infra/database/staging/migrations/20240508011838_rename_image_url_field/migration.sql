/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `lesson` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "imageUrl",
ADD COLUMN     "image_url" TEXT NOT NULL;
