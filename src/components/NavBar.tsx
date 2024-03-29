'use client'

import React, { useEffect, useState,FC } from 'react'
import { BsSunFill, BsMoonFill} from 'react-icons/bs';
import {BiMenuAltRight} from "react-icons/bi"
import Link from 'next/link';


const NavBar:FC = () => {
  const [darkMode, setDarkmode] = useState(false)

  const modeHandler =()=>{
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } 

const [navOpen, setNavOpen ] = useState(false)

  useEffect(()=>{
    modeHandler()
  },[darkMode])
  return (
    < >
    <div  className="z-10 hidden sticky top-0 h-20 bg-white/80 dark:bg-black/80 text-black dark:text-white lg:flex justify-between items-center text-xl px-8">
    <Link href="/">  

    <p className='cursor-pointer font-bold'>STEVEN CHIANG</p>
    </Link>

    <ul className="flex gap-8 ">
      
    <Link href="/">  
      <li className='hover:text-[#E2A64A] duration-500 cursor-pointer '>Home</li>
      </Link>

      <Link href="projects">      <li className='hover:text-[#E2A64A] duration-500 cursor-pointer' >Projects</li>
</Link>
<Link href="contact">  <li className='hover:text-[#E2A64A] duration-500 cursor-pointer'>Contact</li>
</Link>

    </ul>
<div className='cursor-pointer' onClick={()=>{setDarkmode(!darkMode)}}>
    {darkMode?<BsSunFill className='hover:text-[#E2A64A] duration-500 cursor-pointer' /> :<BsMoonFill className='hover:text-[#E2A64A] duration-500 cursor-pointer'/>    }
    </div>
   
   
   </div> 
   
   {/* 行動裝置 */}

   <div  className="z-10 flex sticky top-0 h-20 bg-white/80 dark:bg-black/80 text-black dark:text-white lg:hidden justify-between items-center text-xl px-8">
   <p>STEVEN CHIANG</p>
<BiMenuAltRight className='block lg:hidden' onClick={()=>{
  setNavOpen(!navOpen)
}}/>

</div>

 <div className={` sticky  top-20  ${navOpen? "": "hidden"}  h-[250px] p-8 bg-slate-500`}>
<ul className="flex flex-col gap-8 ">
<Link onClick={()=>{  setNavOpen(!navOpen)
}} href="/">  
<li className='hover:text-[#E2A64A] duration-500 cursor-pointer'>Home</li>

</Link>
<Link onClick={()=>{  setNavOpen(!navOpen)
}} href="projects">  
<li className='hover:text-[#E2A64A] duration-500 cursor-pointer'>Projects</li>

</Link><Link onClick={()=>{  setNavOpen(!navOpen)
}} href="contact">  
<li className='hover:text-[#E2A64A] duration-500 cursor-pointer'>Contact</li>

</Link>
      <li className='cursor-pointer' onClick={()=>{setDarkmode(!darkMode)}}>
      {darkMode?<BsSunFill className='hover:text-[#E2A64A] duration-500 cursor-pointer' /> :<BsMoonFill className='hover:text-[#E2A64A] duration-500 cursor-pointer'/>    }
      </li>
    </ul></div>

</>
   )
}

export default NavBar