"use client"

import Link, { LinkProps } from "next/link";
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";  
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/logout";
import { useSession } from "@/hooks/useSession";

const data = [
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

const logoTitle = "CODEWISE";

export default function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const session = useSession();
    const router = useRouter();

    return (
        <header className="flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-8">
            <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                        <svg
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                        >
                            <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                            <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                            <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className="sr-only">Toggle SidebarMenu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                    <div className="flex flex-col">
                        <Link href="/" className=" items-center gap-2 mb-10 text-3xl font-bold">{logoTitle}</Link>

                        <nav className="flex flex-col gap-6 text-sm font-medium">
                            {data.map((link, id) => (
                                <SidebarLink
                                    key={id}
                                    href={link.href}
                                    className="hover:underline font-bold text-base mr-5"
                                    onOpenChange={setOpenSidebar}
                                >
                                    {link.title}
                                </SidebarLink>
                            ))}
                        </nav>
                    </div>

                </SheetContent>
            </Sheet>

            <div className="hidden md:flex flex-row">
                <Link href="/" className=" items-center gap-2 mr-10 text-3xl font-bold">{logoTitle}</Link>

                <nav className="m-auto items-center gap-6 text-sm font-medium">
                    {data.map((link, id) => (
                        <Link
                            key={id}
                            href={link.href}
                            className="hover:underline font-bold text-base mr-5"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {session.status === "authenticated" ? (
                <div className="flex row items-center space-x-4">
                    <div>Bem-vindo, {session.data.user.name}</div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500 text-bold">
                                {session.data.user.name.charAt(0).toUpperCase()}
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push('/account/profile')}>Perfil</DropdownMenuItem>
                            <DropdownMenuItem onClick={async () => logout()}>Sair</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <div className="flex items-center space-x-4">
                    <Link href="/account/login">
                        <Button variant="default">Fazer Login</Button>    
                    </Link>

                    <Link href="/account/signup">
                        <Button variant="secondary">Cadastrar</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}

interface SidebarLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function SidebarLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: SidebarLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}