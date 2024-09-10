// "use client"
// import React, { useState, useEffect} from 'react'
// import Image from 'next/image'
// import MovieCard from './MovieCard';

// export default function loadingPage() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() =>{
//     setTimeout(() =>{
//     setLoading(false);
//   }, 2000);
//   }, []);

//   if(loading) {
//     return (
//       <div className='flex justify-center items-center h-screen w-screen'>
//         <Image src="/loading.gif" alt="Loading" width={200} height={200} />
//       </div>
//     )
//   }

//   return (
//     <div className='flex justify-center items-center h-screen w-screen'>
//       <h1>Data Loaded!</h1>
//       {MovieCard}
//          </div>
//   )
// }

import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div>
      <p>loading...</p>
        <Image src={'/loading.gif'} alt='loader' width={'200'} height={200}/>
    </div>
  )
}
