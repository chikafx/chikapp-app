"use client"
// on line 3 i first imported the react icon
import { BiCartAdd } from "react-icons/bi";
import { createContext, useState} from "react"
import { loading } from './components/Loading'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SidebarContext = createContext()
const loadingContext = createContext()

const loadingProvider=({children})=>{
  const [loading, setLoading] = useState(false);

  return (
    <loadingContext.Provider value={{ loading, setLoading }}>
      {loading ? <loadingPage/> :children}
    </loadingContext.Provider>
  )
}
const SidebarProvider = ({children}) => {
    // const [val, setVal]= useState(10)
    const [movieItem, setMovieItem] = useState([])
    const [cartCount, setCartCount]= useState(0)

  return (
    // next on line 15 i used the cartCount as a state variable and also added a div element that displays the cart icon and the count of items in the cart
    <SidebarContext.Provider value={{movieItem, setMovieItem, cartCount, setCartCount}}>
      <div style={{position: 'absolute', right:10}}>
      <BiCartAdd size={24} />
      <span style={{marginLeft: 10}}>{cartCount}
      </span>
      {/* <AiOutlineLoading3Quarters size ={100} /> */}
      </div>
    {children}
    </SidebarContext.Provider>
  )
}

export {loadingProvider, loadingContext}
export {SidebarProvider, SidebarContext}