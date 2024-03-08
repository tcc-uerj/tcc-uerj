import Link from "next/link";
import { Button } from '@/components/ui/button'

const data = [
    {
        title: "Sobre",
        href: "/about",
    },
    {
        title: "Área de Estudos",
        href: "/courses",
    },
    {
        title: "Jogos",
        href: "/games",
    },
    {
        title: "Ranking",
        href: "/ranking",
    },
];

export default function Navbar() {
    return (
        <header className="flex items-center justify-between h-20 p-5">
            <div className="">
                <Link href="/" className="h-8">TCC</Link>
            </div>

            <nav className="">
                <ul className="flex items-center gap-x-8">
                    {data.map((link, id) => (
                        <li key={id}>
                            <Link
                                href={link.href}
                                className="font-semibold px-3 py-2.5 dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-indigo-500 hover:underline duration-300 text-base"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex flex-row">
                <div className="mr-3">
                    <Link href="/account/login">
                        <Button variant="default">Fazer Login</Button>    
                    </Link>
                </div>

                <div>
                    <Link href="/account/signup">
                        <Button variant="secondary">Cadastrar</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}