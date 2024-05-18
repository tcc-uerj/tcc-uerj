"use client"

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { LessonContext, LessonContextType } from "@/contexts/LessonContext";
import { associateUserLesson } from "@/services/users";
import { useRouter } from "next/navigation";
import { useContext, useTransition } from "react";

interface CoursePreviewProps {
  params: { courseId: string; }
}

export default function CoursePreview({ params }: CoursePreviewProps) {
  const { lesson, userLesson, isPending } = useContext<LessonContextType>(LessonContext);
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast()

  async function subscribeUserToLesson() {
    try {
      startTransition(async () => {
        if (lesson == null) return;
  
        await associateUserLesson(lesson?.id);
        
        toast({
          variant: "success",
          title: `Inscrição no curso ${lesson?.subject.split("_").join(" ").toLowerCase()} realizado com sucesso!`,
          description: "Divirta-se e aprenda bastante.",
          duration: 2000
        })
      
        router.push(`/courses/${params.courseId}/lecture`);
      });
    } catch (error) {

    }
  }

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

  if (userLesson) {
    router.replace(`/courses/${params.courseId}/lecture`);
    return;
  }
  
  if (lesson) {
    return (
      <div className="flex justify-center">
        <div className="w-3/6 h-fit mt-5 p-5">
            <h2 className="text-[20px] font-medium">{lesson.subject?.split("_").join(" ")}</h2>
            <p className="mt-5 text-gray-500">
              {lesson.description}
            </p>
            <div className="mt-5">
              <Button disabled={isLoading} onClick={() => subscribeUserToLesson()}>
                Me inscrever
              </Button>
            </div>
        </div>
      </div>
    )
  }
}