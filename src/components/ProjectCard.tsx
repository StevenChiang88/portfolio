import Image from 'next/image'
import React from 'react'
import roxscreen from '../../public/roxscreen.png'
import {AiOutlineFileSearch} from 'react-icons/ai'
import Link from 'next/link'
const ProjectCard = () => {


  return (
    <div className='relative mx-auto my-8 shadow-lg  w-[350px] md:w-[500px] h-[200px]  md:h-[250px] '>
      <Image  src={roxscreen} alt="project" className='w-full h-full object-fill' />
   
   <div className='absolute bg-black/50 top-0 w-full h-full opacity-0 hover:opacity-100 text-left text-white px-4 py-8 flex flex-col items-center justify-around'>
<p className='font-bold text-xl md:text-2xl'>The Corgi Shop</p>
<p className='font-bold'>React</p>
<Link href="project/asdda">
<AiOutlineFileSearch className='mx-auto text-[30px]'/>
</Link>
   </div>
    </div>
  )
}

export default ProjectCard