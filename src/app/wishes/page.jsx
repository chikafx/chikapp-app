"use client"
import { useContext } from 'react';
import { SidebarContext } from '../providers'
import Image from 'next/image'
import MovieCard from '../components/MovieCard';

export default function WishPage() {
    const {movieItem}= useContext(SidebarContext)
  return (
    <div>
        {/* <MovieCard/> */}



        {movieItem.length==0 ?
        (
            <h2>add movie to wish list</h2>
        )
        :
        (
            <div>
                {movieItem.map((movie, index)=>(
                    <div key={index}>
                        <h2>{movie.title}</h2>
                        <h2>{movie.epi}</h2>

                    </div>
                ))}
            </div>
        )
    }
    </div>
  )
}
