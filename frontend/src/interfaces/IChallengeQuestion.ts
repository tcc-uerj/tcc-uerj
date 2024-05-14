interface IChallengeQuestion {
    id: number;
    challengeId: number;
    statementTitle?: string;
    statementCode?: Blob;
    type: QuestionType;
    questionOptions: IQuestionOptions[];
};