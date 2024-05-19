import IUserLesson from "@/interfaces/IUserLesson";
import { IGetAllUserLessonsDataResponse } from "@/interfaces/responses/IGetAllUserLessonsResponse";
import { IGetCourseByIdDataResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { IGetUserLessonLinksDataResponse } from "@/interfaces/responses/IGetUserLessonsLinksResponse";
import { getCourseById } from "@/services/courses";
import { getAllUserLessons, getUserLessonsLinks } from "@/services/users";
import { createContext, useEffect, useState, useTransition } from "react";

export type LessonContextType = {
    lesson: IGetCourseByIdDataResponse | undefined;
    userLesson: IUserLesson | undefined;
    userLessonLinks: IGetUserLessonLinksDataResponse[] | undefined;
    isAllLessonLinksCompleted: boolean;
    isPending: boolean;
}

export const LessonContext = createContext({} as LessonContextType)

export function LessonProvider({ children, courseId }: { children: React.ReactNode, courseId: number }) {
    const [lesson, setLesson] = useState<IGetCourseByIdDataResponse>();
    const [userLesson, setUserLesson] = useState<IGetAllUserLessonsDataResponse>();
    const [userLessonLinks, setUserLessonLinks] = useState<IGetUserLessonLinksDataResponse[] | undefined>(undefined);
    const [isAllLessonLinksCompleted, setIsAllLessonLinksCompleted] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();

    async function fetchLesson() {
        return await getCourseById(courseId);
    }

    async function fetchUserLessons() {
        return await getAllUserLessons();
    }

    async function fetchUserLessonsLinks() {
        return await getUserLessonsLinks();
    }

    async function handleFetches() {
        const [lessonResponse, userLessonsResponse, userLessonsLinksResponse] = await Promise.all([ fetchLesson(), fetchUserLessons(), fetchUserLessonsLinks() ]);

        const lesson = lessonResponse.data;
        const userLessons = userLessonsResponse.data;
        const userLessonsLinks = userLessonsLinksResponse.data;

        setLesson(lesson);

        const userLesson = userLessons.find(userLesson => userLesson.lessonId === lesson.id);
        setUserLesson(userLesson);

        const userLessonLinksFromThisCourse = userLessonsLinks.filter((userLessonsLink) => lesson?.lessonLinks.findIndex(x => x.id === userLessonsLink.lessonLink.id) !== -1);
        setUserLessonLinks(userLessonLinksFromThisCourse);

        const isAllLessonLinksCompleted = lesson.lessonLinks.every(lessonLink => userLessonLinksFromThisCourse.findIndex(x => x.lessonLink.id === lessonLink.id && x.completedAt !== null) !== -1);
        setIsAllLessonLinksCompleted(isAllLessonLinksCompleted);

    }

    useEffect(() => {
        startTransition(() => {
            handleFetches();
        })
    }, [courseId]);

    return (
        <LessonContext.Provider value={{ lesson, userLesson, userLessonLinks, isAllLessonLinksCompleted, isPending }}>
            {children}
        </LessonContext.Provider>
    )
}