import { BiCart} from "react-icons/bi"
import { Children, useState} from "react"

const SidebarContext =BiCart()

const SidebarProvider= ({Children}) => {
    const [val, setVal]= useState(1)
    
}

function cart() {
  return (
    <div>cart</div>
  )
}

export default cart