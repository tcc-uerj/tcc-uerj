"use client"

import { LessonContext, LessonContextType } from "@/contexts/LessonContext";
import Link from "next/link";
import { useContext, useState } from "react";

interface CourseSidebarProps {
  courseName: string,
  data: { title: string, content?: string}[],
  setActiveContent: (activeContent: number) => void;
}

const data = [
  {
    title: "Aprenda sobre",
    href: "/lecture"
  },
  {
    title: "Teste seus conhecimentos",
    href: "/challenge"
  },
]

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lesson } = useContext<LessonContextType>(LessonContext);

  return (
    <div className="flex flex-col w-[180px] min-h-screen min-w-[250px] border-r border-gray-800 p-4 ">
      <h1 className="pb-5 border-b border-gray-400 font-extrabold text-xl uppercase cursor-default">{lesson?.subject.split("_").join(" ")}</h1>
      {data.map((item, index) => (
        <Link 
          onClick={() => { setActiveIndex(index); }}
          className={`cursor-pointer mt-4 text-indigo-100 hover:text-indigo-500 font-bold ${activeIndex == index ? 'text-indigo-400' : null}`} 
          key={item.title}
          href={`/courses/${lesson?.id}/${item.href}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
