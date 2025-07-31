import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Poster from '@/components/Poster';
import Link from 'next/link';
import { API_KEY } from "../../../constantes";
import { Peli } from '../../../constantes';
import Image from 'next/image';

export const getStaticProps = (async (context) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=TU_API_KEY&language=es-ES&with_genres=37`.replace("TU_API_KEY", API_KEY || ""))
  const pelis = await res.json()
  return { props: { pelis } }
}) satisfies GetStaticProps<{
  pelis: Peli;
}>

export default function Western({
  pelis,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div
      className={`font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >

      <h1 className="text-3xl sm:text-5xl font-bold text-center">Películas Western</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-screen-xl">
        {pelis.results.map((peli: Peli) => (
          <Link href={`/pelicula/${peli.id}`} key={peli.id}>
            <Poster key={peli.id}>
              <Image src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt={peli.title} width={200} height={300} className="rounded-lg shadow-lg" />
              <h2 className="text-xl font-semibold mt-4">{peli.title}</h2>
              <p className="text-gray-600 mt-2">{peli.overview}</p>
            </Poster>
          </Link>
        ))}
      </div>

    </div>
  );
}
