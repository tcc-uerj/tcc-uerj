const data = [
    {
        name: "Alice",
        points: 300
    },
    {
        name: "Bob",
        points: 250
    },
    {
        name: "Charlie",
        points: 200
    },
    {
        name: "David",
        points: 150
    },
    {
        name: "Evee",
        points: 100
    }
];

export default function Ranking() {
    return (
        <div className="w-full py-6">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col space-y-2">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold">Ranking</h1>
                        <p className="text-gray-500 dark:text-gray-400">Maiores Pontuações</p>
                    </div>
                    <div className="rounded-lg border">
                        <div className="grid w-full grid-cols-2 items-stretch justify-center p-4 border-t border-b md:grid-cols-3">
                            <div className="text-sm font-bold">Nome</div>
                            <div className="text-sm font-bold text-right md:text-center">Pontuação</div>
                        </div>
                        <div className="divide-y">
                            {data.map((user, index) => (
                                <div key={index} className="grid w-full grid-cols-2 items-stretch justify-center p-4 md:grid-cols-3">
                                    <div className="text-sm">{user.name}</div>
                                    <div className="text-sm font-medium text-right md:text-center">{user.points}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}