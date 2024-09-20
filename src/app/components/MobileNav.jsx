"use client"
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    // const [val, setVal] = useState(10)

    

    function controlNav(){
        setOpen(!open)
    }
  return (
    <nav>
        <ul className=' flex items-center justify-around md:hidden h-36'>
            <Link href={'/'}>
            <li className='hover:animate-bounce cursor-pointer'>Home</li>
            </Link>
            <li onClick={controlNav} className='cursor cursor-pointer hover:animate-bounce'>
            <GiHamburgerMenu/>
            </li> 
        </ul>

        {open &&
            <ul className=' flex flex-col justify-around md:hidden items-end h-72 pr-32'>
                <Link href={'/'}>
                <li>home</li>
                </Link>

                <Link href={'/about'}>
                <li>about</li>
                </Link>

                <Link href={'/discover'}>
                <li>discover</li>
                </Link>

                <Link href={'/contact'}>
                <li>contact</li>
                </Link>

                <Link href={'/reviews'}>
                <li>reviews</li>
                </Link>
                
                <Link href={'/more'}>
                <li>more</li>
                </Link>
            </ul>
        }
    </nav>
  )
}
