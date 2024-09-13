"use client"
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard'
import Link from 'next/link';
import Image from 'next/image';

export default function ReviewPage() {
  const [movies, setMovies] = useState([]); // initialize an empty array to store movies

  useEffect(() => {
    const Movies = [
      { id: 1, title: 'A Mothers Lie', rating: 3.2 },
      { id: 2, title: 'Twice the Love', rating: 1.5 },
      { id: 3, title: 'A Tribe Called Judah', rating: 4.8 },
    ];
    setMovies(Movies);
  }, []);

  return (
    <div>
      <h1 className='text-7xl p-5 ml-14 text-center font-extrabold hover:text-green-600 scale-125'>All Reviews</h1>
      <h2 className='text-2xl p-5 ml-14 text-center'>All our reviews sorted alphabetically.</h2>
      <div className="movie-cards flex m-24">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} title={movie.Title}   />
        ))}
      </div>
    </div>
  );
}