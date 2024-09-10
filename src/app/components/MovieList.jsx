// import { Link } from 'react-router-dom';
import Link from "next/link";
import MovieCard from "./MovieCard";
import { Movies } from "../data";

export default function MovieList() {

    const cards = Movies.map((card,index)=> (
        <section key={index}>
            <Link href={`/movies/${card.Title.split(' ').join('-')}`}
            title={card.Title} 
            className="cursor-pointer">
            <MovieCard 
            title={card.Title}
            Category={card.Category} 
            run ={card.Runtime} 
            gen={card.Genre} 
            DateReleased={card.DateReleased} 
            Rating ={card.Rating} />
            </Link>
        </section>
    )).slice(0,3)
    // this line of code below shows the  film in a grid state{if it was removed the whole film below will be removed}
  return (
    <>
    <h1 className="flex font-extrabold text-6xl text-white font-serif text-s items-center mt-8 ml-12 mb-8">Highlights today</h1>
    <h2 className="flex font-extrabold text-gray-400 font-serif text-s text-2xl items-center mt-8 ml-12 mb-8">Be sure not to miss these reviews today.</h2>
    <div className="grid grid-cols-3 gap px-16 py-32 capitalize">
        {cards}
    </div>
    <Link href={'/movies '} className="flex items-center justify-center my-5">
      <span className="bg-slate-950 text-white rounded-md p-3">see more</span>
    </Link>
    </>
  )
}
