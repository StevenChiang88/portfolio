import Image from 'next/image'
import React from 'react'
import roxscreen from '../../public/roxscreen.png'
import {AiOutlineFileSearch} from 'react-icons/ai'
const ProjectCard = () => {


  return (
    <div className='relative mx-auto my-8  w-[350px] h-[200px]  md:w-[500px] md:h-[300px]'>
      <Image  src={roxscreen} alt="project" className='w-full h-full object-fill' />
   
   <div className='absolute bg-black/50 top-0 w-full h-full opacity-0 hover:opacity-100 text-left text-white p-4'>
<p className='font-bold text-xl md:text-3xl'>The Corgi Shop</p>
<p className='font-bold'>React</p>
<AiOutlineFileSearch className='mx-auto text-[50px]'/>
   </div>
    </div>
  )
}

export default ProjectCard