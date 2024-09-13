"use client"
// on line 3 i first imported the react icon
import { BiCartAdd } from "react-icons/bi";
import { createContext, useState} from "react"



const SidebarContext = createContext()
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
export {SidebarProvider, SidebarContext}