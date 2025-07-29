import { GetServerSideProps } from "next";
import { API_KEY, Peli } from "@/constantes";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}?api_key=${API_KEY}&language=es-ES`
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export default function Pelicula({ movie }: {movie: Peli}) {
  return (
    <div className={` font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 m-auto`}>
      <Link href="/" className="text-blue-300 hover:underline mb-10">Volver al inicio</Link>
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-lg"
        width={400}
        height={500}
      />
      <div className="flex flex-col items-center gap-6 mt-20">
        <p className="text-gray-400 max-w-200">{movie.overview}</p>
        <p className="font-bold text-amber-300">Fecha de estreno:</p><span>{movie.release_date}</span>  
        <p className="font-bold text-amber-300">Valoración:</p><span className="bg-green-500 text-black text-3xl rounded-full p-2 m-auto max-w-fit">{movie.vote_average}</span>
        <p className="font-bold text-amber-300">Idioma original:</p><span>{movie.original_language}</span>
      </div>
    </div>
  );
}
