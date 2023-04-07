import GeneralBanner from '@/components/GeneralBanner'
import GeneralButton from '@/components/GeneralButton'
import UsingSkill from '@/components/UsingSkill'
import axios from 'axios'
import Image from 'next/image'
import { type } from 'os'
import React from 'react'

type Props = {
  params:{
    projectid:string
  }
}
async function fetchData(id:String) {
  const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
  return res.data;
}
  export default async function ProjectPage({params:{projectid}}:Props) {
//     const pathname = usePathname();
//     const ID:any =pathname?.split("/").pop()
const singleProject:any = await fetchData(projectid) 
console.log(singleProject,"單數據")

return (
    <div >
      <GeneralBanner text={singleProject.title} />
      
      <Image width={1000} height={1000} alt={singleProject.title} className='mx-auto w-full md:max-w-[1000px] ' src={singleProject.img} />
      
      <div className='p-4 mx-auto max-w-[1000px]'>
      <h3 >Using Skills</h3>
      <div className='flex gap-4 flex-wrap'> 
{singleProject.skils.map((skill:string)=><UsingSkill key={skill} text={skill} />)}

      </div>
      <h3>Description</h3>
<p>{singleProject.desc}</p>
     

<div className='my-10 '>
   <GeneralButton text="Github" link={singleProject.github} isBorder={true} refer={singleProject.github}  />
      <GeneralButton text="Live Demo" link={singleProject.link} isBorder={false} refer={singleProject.link}/>
     </div>
      </div>
      </div>
  )
}
