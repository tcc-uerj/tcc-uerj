import IChallengeQuestion from "./IChallengeQuestion";

export default interface IChallenge {
    id: number;
    subject: SubjectType;
    level: Level;
    points: number;
    challengeQuestions: IChallengeQuestion[];
}