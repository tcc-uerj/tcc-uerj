interface IGetCourseBySubjectResponse {
    data: IGetCourseBySubjectDataResponse;
}

interface IGetCourseBySubjectDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}