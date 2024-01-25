-- CreateTable
CREATE TABLE "lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

INSERT INTO 
    lesson (subject, content) 
values ("CLEAN_CODE", ""), ("DESIGN_PATTERN", "");
