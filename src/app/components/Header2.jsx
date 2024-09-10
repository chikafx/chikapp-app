import React from 'react';
// import MobileNav from "./MobileNav"

export default function Header2() {
  return (
    <div style={{
      transform: 'scale(1.1)',
      opacity: '1',
      transition: ''
    }}
      className={`grid md:grid-cols-6 md:grid-rows-[200px_300px_200px] grid-cols-1 grid-rows-[300px_300px_400px]`}
    >
      <div
        className={`bg-[url(/movie.jpeg)] md:col-span-4 md:row-span-3 hover:scale-110`}
      />
      <div
        className={`bg-[url(/biglove.jpeg)] bg-cover md:row-span-2 md:col-span-2 hover:scale-110`}
      />
      <div
        className={`bg-[url(/far.jpeg)] hover:scale-110 sm:bg-contain`}
      >
        <p
          className={`text-3xl text-center mt-24 font-extrabold text-pink-700`}
        >
          Far From Home
        </p>
      </div>
      <div
        className={`bg-[url(/wives.jpeg)] bg-cover hover:scale-110`}
      />
  {/* <MobileNav/> */}
    </div>
  );
}
// 'use client'
// import React, { useState } from 'react';

// export default function Header2() {
//   const [scale, setScale] = useState(1);
//   const [opacity, setOpacity] = useState(1);

//   const handleMouseOver = () => {
//     setScale(1.1);
//     setOpacity(1);
//   };

//   const handleMouseOut = () => {
//     setScale(1);
//     setOpacity(1);
//   };

//   return (
//     <div
//       style={{
//         transform: `scale(${scale})`,
//         opacity: opacity,
//         transition: 'transform 0.5s, opacity 0.5s',
//       }}
//       className={`grid md:grid-cols-6 md:grid-rows-[200px_300px_200px] grid-cols-1 grid-rows-[300px_300px_200px]`}
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//     >
//       <div
//         className={`bg-[url(/movie.jpeg)] md:col-span-4 md:row-span-3`}
//       />
//       <div
//         className={`bg-[url(/biglove.jpeg)] bg-cover md:row-span-2 md:col-span-2`}
//       />
//       <div
//         className={`bg-[url(/far.jpeg)]`}
//       >
//         <p
//           className={`text-3xl text-center mt-24 font-extrabold text-pink-700`}
//         >
//           Far From Home
//         </p>
//       </div>
//       <div
//         className={`bg-[url(/wives.jpeg)] bg-cover`}
//       />
//     </div>
//   );
// }