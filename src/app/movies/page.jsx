'use client'
import  { FcSearch } from "react-icons/fc"
import Link from "next/link"
import MovieCard from "@/app/components/MovieCard"
import { useState } from "react"
import { Movies } from "@/app/data"

export default function MoviePage() {
    const [searchMovie, setSearchMovie] = useState('')

    function filterSearch(e){
        setSearchMovie(e.target.value)
    }

    const filterLists= Movies.filter(movie => movie.Title.toLowerCase().includes(searchMovie.toLowerCase()) || movie.Category.toLowerCase().includes(searchMovie.toLowerCase()) )
    const cards = filterLists.length ==0 ?( 
        <h1>sorry, search items does not exist</h1>
    ) : filterLists.map((card,index) => (
        <section key={index}>
            <Link href={`/movies/${card.Title.split(' ').join('-')}`}title={card.Title} 
            className="cursor-pointer">
            <MovieCard title={card.Title} type={card.Type} run ={card.Runtime} gen={card.Genre} release={card.DateReleased} rate ={card.Rating}/>
            </Link>
        </section>
    ))
    return(
        <>
        <div className=" flex items-center justify-between p-3 border-4 rounded-full mt-4 border-slate-950 w-3/5 m-auto text-black"> 
        <input type="text" name='search' id="search"
        className="outline-none block mt-4 w-2/3 bg-transparent text-white text-center text-2xl" placeholder="search for movie or category or actor" defaultValue={searchMovie}
        onChange={(e)=>filterSearch(e)}/>
        <FcSearch className="text-2xl"/>
        </div>
        <div className="grid grid-cols-3 gap-4 px-16 py-32 capitalize">
            {cards}
        </div>
        </>
    )
}