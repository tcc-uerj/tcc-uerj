"use client";

import React, { useState } from 'react'
import Sidebar from '../../_components/Sidebar'
import { useSession } from '@/hooks/useSession';
import { redirect } from 'next/navigation';

const data = [
    {
        title: "Leitura",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut orci est. Etiam bibendum pretium iaculis. Aenean bibendum justo sit amet viverra vulputate. Cras facilisis leo et suscipit interdum. Fusce nunc ligula, varius a eros eget, facilisis tincidunt leo. Nunc quis arcu risus. Nunc lacus leo, malesuada ac dolor et, ornare vulputate enim."
    },
    {
        title: "Video Aula 1"
    },
    {
        title: "Video Aula 2"
    },
    {
        title: "Teste seu conhecimento"
    }
]

const courseNames = [
    "Clean Code", "Design Patterns"
]

interface LectureProps {
    params: { courseId: string; }
}

export default function Lecture({ params }: LectureProps) {
    const [activeContent, setActiveContent] = useState(0);
    const { isAuthenticated } = useSession();

    if (!isAuthenticated) {
        redirect('/account/login')
    }

    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar data={data} courseName={courseNames[parseInt(params.courseId) - 1]} setActiveContent={(content) => setActiveContent(content)} />
            <div className="m-8 w-screen">
                <h1 className="font-bold text-4xl">{data[activeContent].title}</h1>
                <div className="text-lg mt-5">{data[activeContent].content}</div>
            </div>
        </div>
    )
}
