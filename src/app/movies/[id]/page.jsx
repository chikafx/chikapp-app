"use client"
import React from 'react'
import { Movies } from '@/app/data'
import Link from 'next/link';
import MovieCard from '@/app/components/MovieCard';
import { SidebarContext } from "@/app/providers"
import { useContext } from 'react';

export default function MovieDetails({params}) {
const {movieItem, setMovieItem, setCartCount} = useContext(SidebarContext)

function handleMovieAdd(){
  
  setCartCount(prev=> prev + 1)
  setMovieItem([...movieItem, {Title:details.Title, epi:details.Epilogue,cat:details.Category}])
}
  const details = Movies.find(Movie => Movie.Title.split(' ').join('-') == params.id)
  const relatedMovies= Movies.filter((card=> card.Category==details.Category && details.Title !==card.Title))

  const relatedCard= relatedMovies.map((card, index)=>
  <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer' key={index}>
  <MovieCard title={card.Title} type={card.Type} rating={card.Rating} img={card.Category} />
  </Link> 
  )
  return (
    <div className='px-16'>
        <h1 className={`text-2xl`} style={{paddingBlock: '20px',
          backgroundColor:'blue'}}>
        {details.Title}</h1>
        <p>{details.Epilogue}</p>
        <button onClick={handleMovieAdd}
        className='bg-slate-950 text-slate-50 p-3 rounded-md'>add movie</button>

    <div>
      <h2 className='text-4xl font-bold'>related movies</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {relatedCard}
      </div>
    </div>
</div>
)
}
