"use client";

import React, { useContext } from 'react'
import { LessonContext, LessonContextType } from '@/contexts/LessonContext';

interface LectureProps {
    params: { courseId: string; }
}

export default function Lecture({ params }: LectureProps) {
    const { lesson } = useContext<LessonContextType>(LessonContext);

    return (
        <div className="flex">
            <div className="m-8">
                <h1 className="font-bold text-4xl">{lesson?.subject.split("_").join(" ")}</h1>
                <div className="text-lg mt-5">{lesson?.content}</div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-2xl">Leituras recomendadas:</h1>
                    {lesson?.lessonLinks
                        .filter(lessonLink => lessonLink.type === "WRITTEN")
                        .map((lessonLink, index) => (
                            <a className="hover:underline text-indigo-300" href={lessonLink.link} key={lessonLink.id}>{lessonLink.link}</a>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-2xl">Videos recomendados:</h1>
                    {lesson?.lessonLinks
                        .filter(lessonLink => lessonLink.type === "VIDEO")
                        .map((lessonLink, index) => (
                            <a className="hover:underline text-indigo-300" href={lessonLink.link} key={lessonLink.id}>{lessonLink.link}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
