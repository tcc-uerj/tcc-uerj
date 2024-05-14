interface IGetAllCoursesResponse {
    data: IGetAllCoursesDataResponse[];
}

interface IGetAllCoursesDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}