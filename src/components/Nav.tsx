import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/" className="text-white hover:underline">Inicio</Link>
        <Link href="/genero/accion" className="text-blue-500 hover:underline">Acción</Link>
        <Link href="/genero/animacion" className="text-blue-500 hover:underline">Animación</Link>
        <Link href="/genero/aventura" className="text-blue-500 hover:underline">Aventura</Link>
        <Link href="/genero/belica" className="text-blue-500 hover:underline">Bélica</Link>
        <Link href="/genero/cienciaficcion" className="text-blue-500 hover:underline">Ciencia Ficción</Link>
        <Link href="/genero/comedia" className="text-blue-500 hover:underline">Comedia</Link>
        <Link href="/genero/crimen" className="text-blue-500 hover:underline">Crimen</Link>
        <Link href="/genero/documental" className="text-blue-500 hover:underline">Documental</Link>
        <Link href="/genero/drama" className="text-blue-500 hover:underline">Drama</Link>
        <Link href="/genero/familia" className="text-blue-500 hover:underline">Familia</Link>
        <Link href="/genero/fantasia" className="text-blue-500 hover:underline">Fantasía</Link>
        <Link href="/genero/historia" className="text-blue-500 hover:underline">Historia</Link>
        <Link href="/genero/misterio" className="text-blue-500 hover:underline">Misterio</Link>
        <Link href="/genero/musica" className="text-blue-500 hover:underline">Música</Link>
        <Link href="/genero/romance" className="text-blue-500 hover:underline">Romance</Link>
        <Link href="/genero/suspense" className="text-blue-500 hover:underline">Suspense</Link>
        <Link href="/genero/terror" className="text-blue-500 hover:underline">Terror</Link>
        <Link href="/genero/tv" className="text-blue-500 hover:underline">TV</Link>
        <Link href="/genero/western" className="text-blue-500 hover:underline">Western</Link>
      </nav>
  );
}