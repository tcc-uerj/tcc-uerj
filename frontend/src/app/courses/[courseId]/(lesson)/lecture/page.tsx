"use client";

import React, { useContext } from 'react'
import { LessonContext, LessonContextType } from '@/contexts/LessonContext';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { insertUserLessonLink } from '@/services/users';
import Link from 'next/link';

export default function Lecture() {
    const { lesson, userLessonLinks, isAllLessonLinksCompleted } = useContext<LessonContextType>(LessonContext);

    function isUserCompletedLessonLink(lessonLinkId: number) {
        return userLessonLinks?.findIndex(x => x.lessonLink.id === lessonLinkId && x.completedAt !== null) !== -1;
    }

    async function createUserLessonLink(lessonLinkId: number) {
        await insertUserLessonLink(lessonLinkId);
        location.reload();
    }

    return (
        <div className="flex">
            <div className="mx-8 lg:w-fit xl:w-2/3">
                <h1 className="font-bold text-lg md:text-4xl">{lesson?.subject.split("_").join(" ")}</h1>
                <div className="w-full overflow-x-hidden break-words whitespace-normal text-xs sm:text-sm md:text-md lg:text-lg text-justify mt-5">{lesson?.content}</div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-md md:text-2xl">Leituras recomendadas:</h1>
                    {lesson?.lessonLinks
                        .filter(lessonLink => lessonLink.type === "WRITTEN")
                        .map((lessonLink, index) => (
                            <div 
                                key={lessonLink.id}
                                className={cn(
                                    'flex items-center space-x-2 p-2 rounded border border-spacing-10 border-gray-700 bg-indigo-100', 
                                    isUserCompletedLessonLink(lessonLink.id) && 'bg-green-200'
                                )}
                            >
                                <Checkbox 
                                    id={lessonLink.link} 
                                    checked={isUserCompletedLessonLink(lessonLink.id)} 
                                    disabled={isUserCompletedLessonLink(lessonLink.id)}
                                    className="data-[state=checked]:bg-green-700 data-[state=checked]:text-white"
                                    onCheckedChange={() => createUserLessonLink(lessonLink.id)}  
                                />
                                <a 
                                    className={cn(
                                        'hover:underline text-indigo-800 text-xs sm:text-sm md:text-md lg:text-lg', 
                                        isUserCompletedLessonLink(lessonLink.id) && 'line-through pointer-events-none cursor-not-allowed'
                                    )}
                                    href={lessonLink.link} 
                                    target="_blank"
                                >
                                    {lessonLink.link}
                                </a>
                            </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <h1 className="font-bold text-md md:text-2xl">Videos recomendados:</h1>
                    {lesson?.lessonLinks
                        .filter(lessonLink => lessonLink.type === "VIDEO")
                        .map((lessonLink, index) => (
                            <div 
                                key={lessonLink.id}
                                className={cn(
                                    'flex items-center space-x-2 p-2 rounded border border-spacing-10 border-gray-700 bg-indigo-100', 
                                    isUserCompletedLessonLink(lessonLink.id) && 'bg-green-200'
                                )}
                            >
                                <Checkbox 
                                    id={lessonLink.link} 
                                    checked={isUserCompletedLessonLink(lessonLink.id)} 
                                    disabled={isUserCompletedLessonLink(lessonLink.id)}
                                    className="data-[state=checked]:bg-green-700 data-[state=checked]:text-white"
                                    onCheckedChange={() => createUserLessonLink(lessonLink.id)}  
                                />
                                <a
                                    className={cn(
                                        'hover:underline text-indigo-800 text-xs sm:text-sm md:text-md lg:text-lg', 
                                        isUserCompletedLessonLink(lessonLink.id) && 'line-through pointer-events-none cursor-not-allowed'
                                    )}
                                    href={lessonLink.link} 
                                    target="_blank"
                                >
                                    {lessonLink.link}
                                </a>
                            </div>
                    ))}
                </div>
                {isAllLessonLinksCompleted && (
                    <div className="flex justify-center flex-col mt-10 space-y-5">
                        <Link 
                            href={`/courses/${lesson?.id}/challenge`}
                            className="bg-indigo-500 p-5 rounded w-fit font-bold text-xs sm:text-sm md:text-md"
                        >
                            Teste seus conhecimentos →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
