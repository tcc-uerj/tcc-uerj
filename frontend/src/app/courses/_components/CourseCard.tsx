"use client"

import Link from "next/link"
import Image from "next/image"

export default function CourseCard({ course }: { 
    course: { 
        id: number,
        imageUrl: string;
        href: string,
        name: string,
        description: string;
    } 
}) {
  return (
    <Link href={`courses/${course.id}/preview`}>
        <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
            <div className="relative w-full aspect-video round-md overflow-hidden">
                <Image 
                    fill
                    className="object-cover"
                    alt={course.name}
                    src={course.imageUrl}
                />
            </div>
            <div className="flex flex-col pt-2">
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                    {course.name}
                </div>
                <p className="text-xs text-muted-foreground">
                    {course.description}
                </p>
            </div>
        </div>
    </Link>
  )
}
