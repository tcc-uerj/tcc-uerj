import { IGetCourseByIdDataResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { IGetUserLessonLinksDataResponse } from "@/interfaces/responses/IGetUserLessonLinksResponse";
import { getCourseById } from "@/services/courses";
import { getUserLessonLinks } from "@/services/users";
import { createContext, useEffect, useState, useTransition } from "react";

export type LessonContextType = {
    lesson: IGetCourseByIdDataResponse | undefined;
    userLessonLinks: IGetUserLessonLinksDataResponse[] | undefined;
    isAllLessonLinksCompleted: boolean;
    isPending: boolean;
}

export const LessonContext = createContext({} as LessonContextType)

export function LessonProvider({ children, courseId }: { children: React.ReactNode, courseId: number }) {
    const [lesson, setLesson] = useState<IGetCourseByIdDataResponse>();
    const [userLessonLinks, setUserLessonLinks] = useState<IGetUserLessonLinksDataResponse[] | undefined>(undefined);
    const [isAllLessonLinksCompleted, setIsAllLessonLinksCompleted] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();

    async function handleLesson() {
        startTransition(async () => {
            const response = await getCourseById(courseId);
            setLesson(response.data);

            const userLessonLinks = await handleUserLessonLinks(response.data);
            handleIsAllLessonLinksCompleted(response.data, userLessonLinks)
        });
    }

    async function handleUserLessonLinks(lesson: IGetCourseByIdDataResponse | undefined): Promise<IGetUserLessonLinksDataResponse[] | undefined> {
        const { data } = await getUserLessonLinks();
        if (data) {
            const dataFiltered = data.filter((userLessonLink) => lesson?.lessonLinks.findIndex(x => x.id === userLessonLink.lessonLink.id) !== -1);
            setUserLessonLinks(dataFiltered);
            return dataFiltered;
        }
        return undefined;
    }

    async function handleIsAllLessonLinksCompleted(lesson: IGetCourseByIdDataResponse | undefined, userLessonLinks: IGetUserLessonLinksDataResponse[] | undefined) {
        if (!lesson || !userLessonLinks) {
            setIsAllLessonLinksCompleted(false);
            return false;
        };
        const isAllLessonLinksCompleted = lesson.lessonLinks.every(lessonLink => userLessonLinks.findIndex(x => x.lessonLink.id === lessonLink.id && x.completedAt !== null) !== -1);
        setIsAllLessonLinksCompleted(isAllLessonLinksCompleted);
    }

    useEffect(() => {
        handleLesson();
    }, [courseId]);

    return (
        <LessonContext.Provider value={{ lesson, userLessonLinks, isAllLessonLinksCompleted, isPending }}>
            {children}
        </LessonContext.Provider>
    )
}