-- CreateTable
CREATE TABLE "lesson" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "challenge_id" INTEGER NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);
