"use client"
import { getAllCourses } from "@/services/courses";
import CourseCard from "./_components/CourseCard";
import { useEffect, useState } from "react";

export default function Courses() {
    const [courses, setCourses] = useState<IGetAllCoursesDataResponse[]>([]);

    async function fetchCourses() {
        const { data } = await getAllCourses();
        setCourses(data);
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <section className="flex justify-center items-center flex-col">
            <div className="m-4">
                <input type="text" className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200 text-black h-10" placeholder="Busque por um curso" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 m-10">
                {courses && courses.map((course) => (<CourseCard key={course.id} course={course} />))}
            </div>
        </section>
    );
}