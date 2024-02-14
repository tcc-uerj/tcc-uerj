-- CreateTable
CREATE TABLE "user_challenge" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    "completed_at" DATETIME,
    CONSTRAINT "user_challenge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_challenge_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
