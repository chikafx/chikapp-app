"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SidebarContext} from "../providers"
// on line 8 i also imported the cart react icon
import { BiCartAdd } from 'react-icons/bi';


export default function Navbar () {
  // here on line 13 i imported the SidebarContext and used the CartCount state variable from it
  const {cartCount} =useContext(SidebarContext)
  return (   
        // this line of code is to set my navbar to make it sticky to my webpage where i hardcoded style in it
        <nav className='w-full top-0 z-10 sticky'>
            <ul className='flex justify-around capitalize items-center bg-slate-900 h-28 text-justify'>
                <Link href={'/logo'}>
                <li className='flex bg-green-600 font-serif font-extrabold rounded-r-2xl'>C-H-K</li>
                </Link>
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                <Link href={'/reviews'}>
                <li>Reviews</li>
                </Link>
                <Link href={'/discover'}>
                <li>Discover</li>
                </Link>
                <Link href={'/about'}>
                <li>About us</li>
                </Link>
                <Link href={'/contact'}>
                <li>Contact</li>
                </Link>
                <Link href={'/login'}>
                <li>Login</li>
                </Link>
                <li>
                  <Link href={'/wishes'}>
                  {/* reference the code i wrote on line 13 and the explanation i made on line 12, then here the react cart icon was called here and also the cartCount; so thats why we have the icon and the counting on our web */}
                  <BiCartAdd size={50}/>
                  {cartCount}
                </Link>
                </li>
                <li><Image src={'/plus.gif'} alt='sign' width={'50'} height={'50'} /></li>
                {/* <li>{val}</li> */}
                {/* <li><Image src={'/search.gif'} alt='=alternative search' width={'70'} height={'70'} /> </li> */}
            </ul>
            <MobileNav/>
        </nav>
  )
}
