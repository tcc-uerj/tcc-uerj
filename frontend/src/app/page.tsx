import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white-500 sm:text-6xl">
            Aprenda engenharia de software com facilidade
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Plataforma de ensino dedicada à Engenharia de Software, projetada para estudantes, profissionais e entusiastas da área.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Comece agora
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-white-500">
              Saiba mais <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
