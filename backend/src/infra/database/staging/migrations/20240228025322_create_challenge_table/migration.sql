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

insert into challenge (id, subject, level, points)
values 
    ((select nextval('challenge_id_seq')), 'CLEAN_CODE', 'LEVEL_1', 5),
    ((select nextval('challenge_id_seq')), 'CLEAN_CODE', 'LEVEL_1', 5),
    ((select nextval('challenge_id_seq')), 'CLEAN_CODE', 'LEVEL_2', 10),
    ((select nextval('challenge_id_seq')), 'CLEAN_CODE', 'LEVEL_3', 15),
    ((select nextval('challenge_id_seq')), 'DESIGN_PATTERN', 'LEVEL_1', 5),
    ((select nextval('challenge_id_seq')), 'DESIGN_PATTERN', 'LEVEL_2', 10),
    ((select nextval('challenge_id_seq')), 'DESIGN_PATTERN', 'LEVEL_3', 15),
