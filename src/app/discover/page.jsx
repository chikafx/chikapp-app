import Image from "next/image";
import Link from 'next/link';

export default function DiscoverPage() {
  return (
    <div>
      <h1 className="font-extrabold text-fuchsia-900 capitalize text-center text-6xl font-serif">Inspiration</h1>
      <h2 className="text-center mt-11">Discover our reviews by author favorites or genre:</h2>

  
      <div className="flex justify-center mt-12">
        <Link href={'/'}>
        <Image src={'/ace.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping transition" />
        </Link>
        <Image src={'/ace.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-pulse"/>
        <Image src={'/ace.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-ping"/>
        <Image src={'/ace.jpeg'} alt="movie room" width={'300'} height={'300'} className="mr-4 hover:animate-bounce"/>
      </div>
    </div>
  )
}