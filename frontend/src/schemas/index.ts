import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const SignUpSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não são iguais",
        path: ["confirmPassword"],
    });

export const QuestionQuizSchema = z.array(
    z.object({
        id: z.number(),
        challengeQuestionId: z.number(),
        quiz: z.string(),
        isCorrectAnswer: z.boolean(),
    })
);

export const ChallengeQuestionSchema = z.array(
    z.object({
        id: z.number(),
        challengeId: z.number(),
        statementTitle: z.string(),
        statementCode: z.string(),
        type: z.string(),
        challengeQuiz: QuestionQuizSchema,
    })
);

export const ChallengeSchema = z.array(
    z.object({
        id: z.number(),
        level: z.string(),
        subject: z.string(),
        points: z.number(),
        challengeQuestion: ChallengeQuestionSchema,
    })
);
