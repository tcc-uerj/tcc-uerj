-- CreateTable
CREATE TABLE "user_challenge" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    "completed_at" TIMESTAMP,

    CONSTRAINT "user_challenge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_challenge" ADD CONSTRAINT "user_challenge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_challenge" ADD CONSTRAINT "user_challenge_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
