export interface ILesson {
    id: number;
    subject: SubjectType;
    content: string;
    description: string;
    challengeId: number;
    imageUrl: string;
}