import GeneralBanner from '@/components/GeneralBanner'
import GeneralButton from '@/components/GeneralButton'
import UsingSkill from '@/components/UsingSkill'
import axios from 'axios'
import Image from 'next/image'
import { type } from 'os'
import React from 'react'
import Corgishopscreen from '../../../../public/Corgishopscreen.png'

type Props = {
  params:{
    projectid:String
  }
}
async function fetchData(id:String) {
  const res = await axios.get(`http://localhost:3000/api/projects/${id}`);
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
      
      <Image alt='網頁截圖' className='mx-auto w-full md:max-w-[1000px]' src={Corgishopscreen} />
      
      <div className='p-4 mx-auto max-w-[1000px]'>
      <h3 >Using Skills</h3>
      <div className='flex gap-4 flex-wrap'> 
{singleProject.skils.map((skill:String)=><UsingSkill  text={skill} />)}

      </div>
      <h3>Description</h3>
<p>{singleProject.desc}</p>
     

<div className='my-10 '>
   <GeneralButton text="Github" link={singleProject.github} isBorder={true} />
      <GeneralButton text="Live Demo" link={singleProject.link} isBorder={false} />
     </div>
      </div>
      </div>
  )
}
