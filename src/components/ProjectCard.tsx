import Image from 'next/image'
import React,{FC} from 'react'
import roxscreen from '../../public/roxscreen.png'
import {AiOutlineFileSearch} from 'react-icons/ai'
import Link from 'next/link'

type ProjectProps = { project: {
  "_id":String,
  "title": String,
  "desc": String,
  "img": String,
  "github": String,
  "link": String,
  "skils": [String],
  "createdAt": String,
  "updatedAt":String,
  "__v": Number
} };

const ProjectCard:FC<ProjectProps> = ({project}) => {

  return (
    <div className='relative mx-auto my-8 shadow-lg  w-[350px] md:w-[500px] h-[200px]  md:h-[250px] '>
      <Image  src={roxscreen} alt="project" className='w-full h-full object-fill' />
   
   <div className='absolute bg-black/50 top-0 w-full h-full opacity-0 hover:opacity-100 text-left text-white px-4 py-8 flex flex-col items-center justify-around'>
<p className='font-bold text-xl md:text-2xl'>{project.title}</p>
<p className='font-bold'>{project.skils[0]}</p>
<Link href={`project/${project._id}`}>
<AiOutlineFileSearch className='mx-auto text-[30px]'/>
</Link>
   </div>
    </div>
  )
}

export default ProjectCard