import React from 'react'
import { default as Image } from 'next/image';
import { Rating as MuiRating } from '@mui/material'

export default function MovieCard({title,Category,Rating,DateReleased}) {

  
  return (
    <div className='flex flex-col items-center hover:animate-bounce transition'>
      <Image src={`/mv/${String(title).split(' ').join('')}.jpeg`}
       alt={String(title).split(' ').join('')}
      title={String(title).split(' ').join('')}
      epilogue={String(title).split(' ').join('')}
      width={300} height={500}
      className='rounded-md'/>
      <h1>{title}</h1>
      <p>{Category}</p>
      <p>{DateReleased}</p>
      <p>
        <MuiRating 
          name="half-rating-read" 
          defaultValue={2.5} 
          precision={0.5} 
          max={5} // This should be a number, not a string
        />
      </p>
    </div>
  )
}

