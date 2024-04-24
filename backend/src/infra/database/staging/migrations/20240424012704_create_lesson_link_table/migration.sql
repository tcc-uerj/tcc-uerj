-- CreateTable
CREATE TABLE "lesson_link" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "order" SMALLINT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "lesson_link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lesson_link" ADD CONSTRAINT "lesson_link_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
