"use client"

import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";
import { ILesson } from "@/interfaces/ILesson";
import { IGetCourseByIdDataResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { getCourseById } from "@/services/courses";
import { getAllUserLessons } from "@/services/users";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CoursePreviewProps {
  params: { courseId: string; }
}

export default function CoursePreview({ params }: CoursePreviewProps) {
  const [course, setCourse] = useState<IGetCourseByIdDataResponse>({} as any);
  const router = useRouter();
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) {
      redirect('/account/login')
  }
  
  async function handleUserLessons() {
    const { data } = await getAllUserLessons();
    
    if (data == null || data.length === 0) {
      handleCourse();
      return;
    }
    
    router.replace(`/courses/${params.courseId}/lecture`);
  }

  async function handleCourse() {
    const { data } = await getCourseById(parseInt(params.courseId));
    setCourse(data);
  }

  useEffect(() => {
    handleUserLessons();
  }, []);

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