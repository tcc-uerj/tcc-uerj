import GameCard from "./_components/GameCard";

const games = [
  {
      id: 1,
      href: "/games/trivia",
      name: "Trivia",
      description: "Desafie seus conhecimentos respondendo a perguntas do universo da Engenharia de Software, e em troca ganhe pontos e experiências."
  },
  {
    id: 2,
    href: "/games/hangman",
    name: "Hangman",
    description: "Adivinhe as palavras do universo da Engenharia de Software antes que o boneco da forca seja completado, e em troca ganhe pontos e experiências."
}
];

export default function Games() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl font-medium m-10">Escolha o jogo</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        {games.map((game) => (<GameCard key={game.id} game={game} />))}
      </div>
    </div>
  )
}
