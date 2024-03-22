import Image from "next/image";
import {HandThumbUpIcon} from "@heroicons/react/24/outline"
import moviePlaceholder from "../public/images/movie-placeholder.png"

export interface ResultItem {
    id?:string,
    title?:string,
    original_name?:string,
    backdrop_path?:string,
    poster_path?:string,
    vote_count?:number,
    release_date?:string
}

const Thumbnail = (item :{result : ResultItem}) => {
    const BASE_URL= "https://image.tmdb.org/t/p/original/";
    const {result} = item;
    return (
        <div 
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image 
            rel="preload"
            className="h-auto w-auto"
            src={result.backdrop_path ? `${BASE_URL}${result.backdrop_path}`: 
            result.poster_path ? `${BASE_URL}${result.poster_path}`:
            moviePlaceholder.src}
            height={400}
            width={400}
            alt={`${result.title || result.original_name} movie image`}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    <HandThumbUpIcon className="h-5 mx-2"/>
                    {result.vote_count}
                </p>
                <p className="opacity-0 group-hover:opacity-100">
                    Release Date: {
                        result.release_date ?
                    new Date(Date.parse(result.release_date)).toLocaleString('en-US',{year:'numeric', month:'long', day:'numeric'})
                    : 'N/A'
                    }
                </p>
            </div>
        </div>
    )
}

export default Thumbnail;   