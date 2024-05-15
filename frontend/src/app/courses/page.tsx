"use client"
import { getAllCourses } from "@/services/courses";
import CourseCard from "./_components/CourseCard";
import { useEffect, useState, useTransition } from "react";
import { IGetAllCoursesDataResponse } from "@/interfaces/responses/IGetAllCoursesResponse";
import { Skeleton } from "@/components/ui/skeleton";

export default function Courses() {
    const [courses, setCourses] = useState<IGetAllCoursesDataResponse[] | null>(null);
    const [isPending, startTransition] = useTransition();

    async function fetchCourses() {
        startTransition(async () => {
            const { data } = await getAllCourses();
            setCourses(data);
        });
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    if (isPending) {
        return (
            <section className="flex justify-center items-center flex-col">
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 m-10">
                    {courses && courses.map((course) => (
                        <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                            <div className="relative w-full aspect-video round-md overflow-hidden">
                                <Skeleton key={course.id} className="h-[250px] w-[350px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[600px]" />
                            </div>
                            <div>
                                <Skeleton key={course.id} className="mt-5 h-7 w-[150px]" />
                                <div className="mt-5 space-y-2">
                                    <Skeleton key={course.id} className="h-3 lg:[400px] xl:w-[500px]" />
                                    <Skeleton key={course.id} className="h-3 lg:[390px] xl:w-[490px]" />
                                    <Skeleton key={course.id} className="h-3 lg:[370px] xl:w-[480px]" />
                                    <Skeleton key={course.id} className="h-3 lg:[350px] xl:w-[470px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    if (courses && !isPending) {
        return (
            <section className="flex justify-center items-center flex-col">
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 m-10">
                    {courses && courses.map((course) => (<CourseCard key={course.id} course={course} />))}
                </div>
            </section>
        );
    }
}