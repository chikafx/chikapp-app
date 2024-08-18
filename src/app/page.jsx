import Image from "next/image";
// import image from pop

export default function Home() {
  return (
    <div>
        <h1 className="text-4xl font-extrabold text-fuchsia-900 capitalize">a kiss that kills</h1>
        <Image src={'/akiss.jpeg'} alt="movie room" width={'300'} height={'300'}/>
        <Image src={'/cinema.jpg'} alt="fod" width={'300'} height={'300'}/>
    </div>
  )
}