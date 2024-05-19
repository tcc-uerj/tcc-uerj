"use client"

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { IGetCourseByIdDataResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { getCourseById } from "@/services/courses";
import { getAllUserLessons } from "@/services/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface CoursePreviewProps {
  params: { courseId: string; }
}

export default function CoursePreview({ params }: CoursePreviewProps) {
  const [course, setCourse] = useState<IGetCourseByIdDataResponse | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  
  async function handleUserLessons() {
    startTransition(async () => {
      const { data } = await getAllUserLessons();
      
      if (data == null || data.length === 0) {
        handleCourse();
        return;
      }
      
      router.replace(`/courses/${params.courseId}/lecture`);
    });
  }

  async function handleCourse() {
    startTransition(async () => {
      const { data } = await getCourseById(parseInt(params.courseId));
      setCourse(data);
    })
  }

  useEffect(() => {
    handleUserLessons();
  }, []);

  if (isPending) {
    return (
      <div className="flex justify-center">
        <div className="w-3/6 h-fit mt-5 p-5">
            <Skeleton className="h-8 w-[200px]" />
            <div className="mt-5 space-y-2">
              <Skeleton className="h-4 w-[900px]" />
              <Skeleton className="h-4 w-[880px]" />
              <Skeleton className="h-4 w-[850px]" />
            </div>
            <div className="mt-5">
              <Skeleton className="h-12 rounded-md w-[180px]" />
            </div>
        </div>
      </div>
    )
  }
  
  if (course && !isPending) {
    return (
      <div className="flex justify-center">
        <div className="w-3/6 h-fit mt-5 p-5">
            <h2 className="text-[20px] font-medium">{course.subject?.split("_").join(" ")}</h2>
            <p className="mt-5 text-gray-500">
              {course.description}
            </p>
            <div className="mt-5">
              <Link href={`lecture`}>
                <Button>
                      Me inscrever
                  </Button>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}