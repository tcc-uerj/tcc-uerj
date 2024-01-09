-- CreateTable
CREATE TABLE "lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "lesson_content_link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "lesson_content_link_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
