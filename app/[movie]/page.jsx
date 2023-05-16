import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'

export default async function MovieDetail({params: {movie}}) {
    const imagePath = `https://image.tmdb.org/t/p/original`
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return (
        <div className='rounded-xl bg-blue-900'>
            <div className='w-auto h-[30vh] lg:h-[40vh] relative shadow-xl'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <Image className='rounded-t-xl' fill={true} style={{objectFit: "cover"}} src={`${imagePath}${res.backdrop_path}`} alt='/' />
                    <div className='absolute top-[50%] max-w-[1240px] w-auto left-[15%] right-[60%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-5 rounded-xl bg-black/80'>
                        <h2 className="text-2xl tracking-widest">{res.title}</h2>
                        <h2 className="text-md">{res.tagline}</h2>
                        <h2 className="text-lg flex flex-row gap-1 mb-5">{res.vote_average.toFixed(1)}<AiFillStar size={25} /></h2>
                        <h2 className="text-lg mb-5">{res.runtime} Minutes</h2>
                        <h2 className="text-lg mb-5">{res.release_date}</h2>
                        <h2 className="text-lg mb-5 rounded-xl bg-green-600 inline-block p-2">{res.status}</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-col mt-5 grid">
                <div className="cols-span-1">
                <h2 className="text-md m-10">{res.overview}</h2>
                </div>
                <Image className='cols-span-1 rounded-xl border-white border w-auto max-h-[300px] m-10' src={`${imagePath}${res.poster_path}`} width={1000} height={1000} alt={res.title} priority />
            </div>
        </div>
    )
}