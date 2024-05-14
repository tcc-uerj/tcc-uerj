"use client";

import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '@/app/courses/_components/Sidebar'
import { useSession } from '@/hooks/useSession';
import { redirect } from 'next/navigation';
import { ILesson } from '@/interfaces/ILesson';
import { getCourseById } from '@/services/courses';
import { LessonContext, LessonContextType } from '@/contexts/LessonContext';

const data = [
    {
        title: "Clean Code",
        content: "",
        links: []
    },
    {
        title: "Teste seus conhecimentos"
    },
]

const courseNames = [
    "Clean Code", "Design Patterns"
]

interface LectureProps {
    params: { courseId: string; }
}

export default function Lecture({ params }: LectureProps) {
    const { isAuthenticated } = useSession();
    const { lesson } = useContext<LessonContextType>(LessonContext);

    if (!isAuthenticated) {
        redirect('/account/login')
    }

    return (
        <div className="flex">
            <div className="m-8">
                <h1 className="font-bold text-4xl">{lesson?.subject.split("_").join(" ")}</h1>
                <div className="text-lg mt-5">{lesson?.content}</div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-2xl">Leituras recomendadas:</h1>
                    {lesson?.LessonLink
                        .filter(lessonLink => lessonLink.type === "WRITTEN")
                        .map((lessonLink, index) => (
                            <a className="hover:underline text-indigo-300" href={lessonLink.link} key={lessonLink.id}>{lessonLink.link}</a>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-2xl">Videos recomendados:</h1>
                    {lesson?.LessonLink
                        .filter(lessonLink => lessonLink.type === "VIDEO")
                        .map((lessonLink, index) => (
                            <a className="hover:underline text-indigo-300" href={lessonLink.link} key={lessonLink.id}>{lessonLink.link}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
