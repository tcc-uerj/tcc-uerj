"use client";

import React from 'react'
import { LessonProvider } from '@/contexts/LessonContext';

export default function CoursesLayout({ children, params }: { children: React.ReactNode, params: { courseId: number } }) {
  return (
    <div className="w-full">
      <LessonProvider courseId={params.courseId}>
        {children}
      </LessonProvider>
    </div>
  )
}
