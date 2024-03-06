import GameCard from "./_components/GameCard";

const games = [
  {
      id: 1,
      href: "/games/trivia",
      name: "Trivia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ligula arcu, non elementum nulla convallis vitae. Donec eget nulla vel eros semper placerat vel et metus. Quisque fermentum pulvinar metus eu consequat. Etiam at leo tincidunt tortor iaculis convallis. Donec quam libero, egestas non tortor ac, vestibulum lacinia lacus. Maecenas maximus est vel auctor feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
      id: 2,
      href: "/games/caca-palavras",
      name: "Caça-Palavras",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ligula arcu, non elementum nulla convallis vitae. Donec eget nulla vel eros semper placerat vel et metus. Quisque fermentum pulvinar metus eu consequat. Etiam at leo tincidunt tortor iaculis convallis. Donec quam libero, egestas non tortor ac, vestibulum lacinia lacus. Maecenas maximus est vel auctor feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }
];

export default function Games() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-100">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 m-10">
          {games.map((game) => (<GameCard key={game.id} game={game} />))}
        </div>
      </div>
    </div>
  )
}
