"use client"

import { useEffect, useState } from "react";

interface CourseSidebarProps {
  courseName: string,
  data: { title: string, content?: string}[],
  setActiveContent: (activeContent: number) => void;
}

export default function Sidebar({ courseName, data, setActiveContent }: CourseSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveContent(0);
  }, []);

  return (
    <div className="flex flex-col w-[300px] min-h-screen min-w-[300px] border-r border-gray-800 p-4 ">
      <h1 className="pb-5 border-b border-gray-400 font-extrabold text-xl uppercase cursor-default">{courseName}</h1>
      {data.map((item, index) => (
        <div 
          onClick={() => {
            setActiveIndex(index);
            setActiveContent(index);
          }}
          className={`cursor-pointer mt-4 text-indigo-100 hover:text-indigo-500 font-bold ${activeIndex == index ? 'text-indigo-400' : null}`} 
          key={item.title}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}
