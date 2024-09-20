import Image from "next/image";
import Link from 'next/link';

export default function DiscoverPage() {
  return (
    <div>
      <h1 className="font-extrabold text-fuchsia-900 capitalize text-center text-6xl font-serif">Inspiration</h1>
      <h2 className="text-center mt-11">Discover our reviews by author favorites or genre:</h2>

  
      <div className="justify-center mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-16 py-32 capitalize">
        <Link href={'/'}>
        <Image src={'/ace.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping transition font-serif" />
        </Link>
        <Link href={'/'}>
        <Image src={'/livinginbondage.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-pulse"/>
        </Link>
        <Link href={'/'}>
        <Image src={'/Falling.jpg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping"/>
        </Link>
        <Link href={'/'}>
        <Image src={'/FunmilayoRansomeKuti.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-bounce"/>
        </Link>
      </div>
    </div>
  )
}