import { useContext } from "react"
import { SidebarContext } from "../providers"

export default function Delete({title}) {
const{movieItem, setMovieItems, SetVal}= useContext(SidebarContext)

const handleDelete=()=>{
    SetVal(prev => prev -1)
    setMovieItems(movieItem.filter(movie =>movie.title !==title))
}


  return (
    <button className='bg-yellow-400 hover:bg-white text-white font-bold py-2 px-4 rounded-full'
    onClick={()=>handleDelete()}>
        Terminate</button>
  )
}
