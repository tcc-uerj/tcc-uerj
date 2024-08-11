-- CreateTable
CREATE TABLE "user_lesson" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "challenge_completed" BOOLEAN NOT NULL,

    CONSTRAINT "user_lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_lesson" ADD CONSTRAINT "user_lesson_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_lesson" ADD CONSTRAINT "user_lesson_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
