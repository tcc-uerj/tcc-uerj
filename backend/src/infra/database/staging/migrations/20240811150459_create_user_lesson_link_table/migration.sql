-- CreateTable
CREATE TABLE "user_lesson_link" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lesson_link_id" INTEGER NOT NULL,
    "completed_at" TIMESTAMP,

    CONSTRAINT "user_lesson_link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_lesson_link" ADD CONSTRAINT "user_lesson_link_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_lesson_link" ADD CONSTRAINT "user_lesson_link_lesson_link_id_fkey" FOREIGN KEY ("lesson_link_id") REFERENCES "lesson_link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
