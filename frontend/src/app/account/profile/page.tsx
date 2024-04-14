import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from '@/components/ui/progress';

const user = {
    name: "Nome",
    level: 12,
}

const levelXP = 5000;
const userXP = 2000;
const xp = userXP / levelXP;

const statistics = [
    {
        title: "Jogos Jogados",
        value: 50,
    }
];

const achievements = [
    { 
        title: "Campeão",
        description: "Jogou mais de 10 jogos"
    },
    { 
        title: "Veterano",
        description: "Jogou mais de 100 jogos"
    },
];

interface ProfileProps {}

export default function Profile(props: ProfileProps) {
    return (
        <Card className="w-full max-w-3xl m-auto mt-5">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl font-bold">{user.name}</div>
                    </div>
                    <div className="grid items-center gap-1 text-sm sm:grid-cols-2">
                        <div className="flex items-center space-x-1">
                            <span className="font-medium">Level</span>
                            <span className="text-gray-500 dark:text-gray-400">{user.level}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="font-medium">XP</span>
                            <span className="text-gray-500 dark:text-gray-400">{userXP} / {levelXP}</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Estatísticas</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {statistics.map((statistic, idx) => (
                            <div key={idx}>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{statistic.title}</div>
                                <div className="text-xl font-bold">{statistic.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold">Próximo Nível</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Você precisa de {levelXP - userXP} XP para chegar no level {user.level + 1}</p>
                        <div className="h-2 bg-gray-100 rounded-md dark:bg-gray-800">
                            <Progress value={xp * 100} />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Conquistas</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <AwardIcon className="w-8 h-8" />
                                <div className="space-y-1.5">
                                    <h3 className="font-bold">{achievement.title}</h3>
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

function AwardIcon(props) {
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
