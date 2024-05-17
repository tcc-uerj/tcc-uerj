"use client"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from '@/components/ui/progress';
import { useEffect, useState, useTransition } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { getUserAchievements } from "@/services/users";
import { IAchievement } from "@/interfaces/IAchievement";

export default function Profile() {
    const [isPending, startTransition] = useTransition();
    const user = useCurrentUser();
    const [achievements, setAchievements] = useState<IAchievement[]>([]);

    const POINTS_PER_LEVEL = 2000;

    async function fetchAchievements() {
        startTransition(async () => {
            const { data } = await getUserAchievements();

            if (data) {
                setAchievements(data);
            }
        });
    }

    useEffect(() => {
        fetchAchievements();
    }, []);

    if (isPending) {
        return (              
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl m-auto mt-5"> 
                <div className="flex flex-col space-y-1.5 p-6">                    
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <Skeleton className="h-7 w-[200px]" />
                        </div>
                        <div className="grid items-center gap-1 text-sm sm:grid-cols-2">
                            <div className="flex items-center space-x-1">
                                <Skeleton className="h-2 w-[100px]" />
                                <Skeleton className="h-1 w-[30px]" />
                            </div>
                            <div className="flex items-center space-x-1">
                                <Skeleton className="h-2 w-[60px]" />
                                <Skeleton className="h-2 w-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div>
                                <Skeleton className="h-3 w-[200px]" />
                                <Skeleton className="h-4 w-[80px]" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="h-2 w-[200px]" />
                            <Skeleton className="h-3 w-[100px]" />
                            <div className="h-2 bg-gray-100 rounded-md dark:bg-gray-800">
                                <Skeleton className="h-3 w-[500px]" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-[50px]" />
                                <div className="">
                                    <Skeleton className="h-3 w-[200px]" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-[50px]" />
                                <div className="">
                                    <Skeleton className="h-3 w-[200px]" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-[50px]" />
                                <div className="">
                                    <Skeleton className="h-3 w-[200px]" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-[50px]" />
                                <div className="">
                                    <Skeleton className="h-3 w-[200px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (user) {
        return (
            <Card className="w-full max-w-3xl m-auto mt-5">
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl font-bold">{user?.name}</div>
                        </div>
                        <div className="grid items-center gap-1 text-sm sm:grid-cols-2">
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">Level</span>
                                <span className="text-gray-500 dark:text-gray-400">{user?.level}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">Pontos</span>
                                <span className="text-gray-500 dark:text-gray-400">{user?.points} / {user?.level * POINTS_PER_LEVEL}</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold">Estatísticas</h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Jogos Jogados</div>
                                <div className="text-xl font-bold">{user?.gamesCount}</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold">Próximo Nível</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Você precisa de {(user?.level * POINTS_PER_LEVEL) - user?.points} pontos para chegar no level {user == null ? 1 : user?.level + 1}</p>
                            <div className="h-2 bg-gray-100 rounded-md dark:bg-gray-800">
                                <Progress value={(user?.points / (user?.level * POINTS_PER_LEVEL)) * 100} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold">Conquistas</h2>
                        {achievements.length === 0 && (
                            <div className="flex flex-col">
                                <div className="text-sm">Você não possui conquistas.</div>
                            </div>
                        )}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {achievements.map((achievement, idx) => (
                                <div key={achievement.description} className="flex items-center space-x-2">
                                    <AwardIcon className="w-6 h-6" />
                                    <div className="">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

function AwardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    )
}
