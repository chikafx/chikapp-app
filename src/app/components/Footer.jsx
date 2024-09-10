import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";



export default function Footer() {
    return (
      <footer className='h-36 bg-slate-950 flex items-center justify-center text-blue-600'>
          <p>&copy; CHK-app {(new Date('01-01-2017').getFullYear())}-{(new Date().getFullYear())}</p>
          <p><IoLogoWhatsapp  size={50} color="green"/></p>
          <p><ImFacebook2  size={50}/></p>
      </footer>
    )
  }
  