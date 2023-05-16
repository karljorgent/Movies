import Link from "next/link";
import Image from "next/image";

export default function Movie({title, poster_path, release_date, id}) {
    const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`
  return (
    <div>
        <h1 className="font-bold">{title}</h1>
        <h2 className="pb-1">{release_date}</h2>
        <Link href={`/${id}`}>
            <Image src={imagePath} width={800} height={800} alt={title} />
        </Link>

    </div>
  )
}