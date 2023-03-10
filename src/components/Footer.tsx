import React from 'react'
import {BsFillTelephoneFill ,BsGithub} from 'react-icons/bs'
import{BiMailSend} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='flex flex-col items-center p-10 bg-slate-600 mt-10'>
     <div className='flex gap-8'>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'><BsFillTelephoneFill className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>      </div>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'><BsGithub className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>      </div>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'><BiMailSend className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>      </div>
  </div>
      <p className='text-white mt-10 text-center'>Copyright © 2023 StevenChiang. Buid with NextJS.</p>
    </div>
  )
}

export default Footer