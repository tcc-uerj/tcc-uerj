interface IGetCourseByIdResponse {
    data: IGetCourseByIdDataResponse;
}

interface IGetCourseByIdDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}