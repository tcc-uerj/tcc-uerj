-- CreateTable
CREATE TABLE "challenge" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "points" SMALLINT NOT NULL,

    CONSTRAINT "challenge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
