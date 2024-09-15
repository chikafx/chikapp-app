"use client"
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard'
import Link from 'next/link';
import Image from 'next/image';

export default function ReviewPage() {

  return (
    <div>
      <h1 className='text-7xl p-5 ml-14 text-center font-extrabold hover:text-green-600 scale-125'>All Reviews</h1>
      <h2 className='text-2xl p-5 ml-14 text-center'>All our reviews sorted alphabetically.</h2>
      <div className="movie-cards flex m-24">

      <Link href={'/'}>
        <Image src={'/JagunJagun.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping transition font-serif" />
        </Link>
        <Link href={'/'}>
        <Image src={'/MerryMen3.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-pulse"/>
        </Link>
        <Link href={'/'}>
        <Image src={'/TheUnseen.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping"/>
        </Link>
        <Link href={'/'}>
        <Image src={'/FunmilayoRansomeKuti.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-bounce"/>
        </Link>
      </div>
    </div>
  );
}