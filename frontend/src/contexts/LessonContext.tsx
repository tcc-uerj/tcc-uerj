import { IGetCourseByIdDataResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { getCourseById } from "@/services/courses";
import { createContext, useEffect, useState } from "react";

export type LessonContextType = {
    lesson: IGetCourseByIdDataResponse | undefined;
}

export const LessonContext = createContext({} as LessonContextType)

export function LessonProvider({ children, courseId }: { children: React.ReactNode, courseId: number }) {
    const [lesson, setLesson] = useState<IGetCourseByIdDataResponse>();

    async function fetchAndSetLesson() {
        const response = await getCourseById(courseId);
        setLesson(response.data);
    }

    useEffect(() => {
        fetchAndSetLesson();
    }, [courseId]);

    return (
        <LessonContext.Provider value={{ lesson }}>
            {children}
        </LessonContext.Provider>
    )
}