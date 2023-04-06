import React, { FC } from 'react'
import {BsFillTelephoneFill ,BsGithub} from 'react-icons/bs'
import{BiMailSend} from 'react-icons/bi'
const Footer:FC = () => {
  return (
    <div className='flex flex-col items-center p-10 bg-slate-600 mt-10'>
     <div className='flex gap-8'>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'>
      <a href='tel:0968918897'>
      <BsFillTelephoneFill  className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>   
      </a>
     </div>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'>
     <a target='_blank' href='https://github.com/StevenChiang88' rel='noreferrer noopener'>

      <BsGithub  className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>
      </a>
      
      </div>
     <div className='w-[60px] h-[60px] rounded-xl bg-black/75 flex items-center justify-center'>
     <a href='mailto:stevenjtc1015@gmail.com'>

      <BiMailSend className='cursor-pointer duration-500 hover:text-[#E2A64A] text-[25px] text-white'/>  
      </a>

          </div>
  </div>
      <p className='text-white mt-10 text-center'>Copyright © 2023 StevenChiang. Buid with NextJS.</p>
    </div>
  )
}

export default Footer