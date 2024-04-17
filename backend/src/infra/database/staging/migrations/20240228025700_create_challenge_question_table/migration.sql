-- CreateTable
CREATE TABLE "challenge_question" (
    "id" SERIAL NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    "statement_title" TEXT NOT NULL,
    "statement_code" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "challenge_question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "challenge_question" ADD CONSTRAINT "challenge_question_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

insert into challenge_question (id, challenge_id, statement_title, statement_code, type)
values 
    ((select nextval('challenge_question_id_seq')), 1, 'Titulo', 'codigo', 'QUIZ'),
    ((select nextval('challenge_question_id_seq')), 2, 'Titulo', 'codigo', 'GAP_GAME'),