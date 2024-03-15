-- CreateTable
CREATE TABLE "user_achievement" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "achievement_id" INTEGER NOT NULL,

    CONSTRAINT "user_achievement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_achievement" ADD CONSTRAINT "user_achievement_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
