-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);
