import Image from "next/image";
import Link from "next/link";
import CourseCard from "./_components/CourseCard";

const courses = [
    {
        id: 1,
        imageUrl: "https://becode.com.br/wp-content/uploads/2017/04/clean-code-principal-1.png",
        href: "/courses/clean-code",
        name: "Clean Code",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ligula arcu, non elementum nulla convallis vitae. Donec eget nulla vel eros semper placerat vel et metus. Quisque fermentum pulvinar metus eu consequat. Etiam at leo tincidunt tortor iaculis convallis. Donec quam libero, egestas non tortor ac, vestibulum lacinia lacus. Maecenas maximus est vel auctor feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
        id: 2,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKNMWn0spg49Daq4aAh_16b8j8--pK9WONpaHuz3A6oqdwt9x7vIeoTZppYAdDUnNgEc&usqp=CAU",
        href: "/courses/design-pattern",
        name: "Design Patterns",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ligula arcu, non elementum nulla convallis vitae. Donec eget nulla vel eros semper placerat vel et metus. Quisque fermentum pulvinar metus eu consequat. Etiam at leo tincidunt tortor iaculis convallis. Donec quam libero, egestas non tortor ac, vestibulum lacinia lacus. Maecenas maximus est vel auctor feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    }
];

export default function Courses() {
    return (
        <section className="flex justify-center items-center flex-col">
            <div className="m-4">
                <input type="text" className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200 text-black h-10" placeholder="Busque por um curso" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 m-10">
                {courses.map((course) => (<CourseCard key={course.id} course={course} />))}
            </div>
        </section>
    );
}