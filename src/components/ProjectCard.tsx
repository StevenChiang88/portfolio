import Image from 'next/image'
import React from 'react'
import roxscreen from '../../public/roxscreen.png'
import {AiOutlineFileSearch} from 'react-icons/ai'
const ProjectCard = () => {


  return (
    <div className='relative mx-auto my-8 shadow-lg  w-[350px] md:w-[500px] h-[250px] '>
      <Image  src={roxscreen} alt="project" className='w-full h-full object-fill' />
   
   <div className='absolute bg-black/50 top-0 w-full h-full opacity-0 hover:opacity-100 text-left text-white p-4 flex flex-col justify-around'>
<p className='font-bold text-xl md:text-2xl'>The Corgi Shop</p>
<p className='font-bold'>React</p>
<AiOutlineFileSearch className='mx-auto text-[50px]'/>
   </div>
    </div>
  )
}

export default ProjectCard