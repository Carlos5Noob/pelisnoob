import { Geist, Geist_Mono } from "next/font/google";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { API_KEY } from "./constantes";
import styles from './index.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Peli = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getStaticProps = (async (context) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY&language=es-ES&page=1`.replace("TU_API_KEY", API_KEY || ""))
  const pelis = await res.json()
  return { props: { pelis } }
}) satisfies GetStaticProps<{
  pelis: Peli;
}>

export default function Home({
  pelis,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >

      <h1 className="text-3xl sm:text-5xl font-bold text-center">Películas populares</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-screen-xl">
        {pelis.results.map((peli: Peli) => (
          <div key={peli.id} className={`flex flex-col items-center mb-8 ${styles.poster}`}>
            <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt={peli.title} width={200} height={300} className="rounded-lg shadow-lg" />
            <h2 className="text-xl font-semibold mt-4">{peli.title}</h2>
            <p className="text-gray-600 mt-2">{peli.overview}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
