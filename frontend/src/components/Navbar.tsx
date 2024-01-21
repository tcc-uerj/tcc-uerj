import Link from "next/link";

const data = [
    {
      title: "Sobre",
      href: "/about",
    },
    {
      title: "Área de Estudos",
      href: "/lessons",
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
        <header className="flex items-center justify-between p-6">
                <div className="">
                    <Link href="/" className="h-8">TCC</Link>
                </div>

                <nav className="">
                    <ul className="flex items-center gap-x-8">
                        {data.map((link, id) => (
                            <li key={id}>
                                <Link
                                    href={link.href}
                                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="">
                    <button className="mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white-900 hover:bg-indigo-500">Entrar</button>
                    <button>Cadastrar</button>
                </div>
        </header>
    );
}