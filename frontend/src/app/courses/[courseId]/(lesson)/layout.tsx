import React from 'react'
import Sidebar from '@/app/courses/_components/Sidebar'

export default function LessonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row min-h-screen ">
            <Sidebar />
            {children}
        </div>
    )
}
