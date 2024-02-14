interface IChallengeQuestion {
    id: number,
    challenge_id: number,
    statement_title?: string,
    statement_code?: Blob,
    type: string,
};