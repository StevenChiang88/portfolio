"use client"
import GeneralBanner from '@/components/GeneralBanner'
import GeneralButton from '@/components/GeneralButton'
import UsingSkill from '@/components/UsingSkill'
import axios from 'axios'
import Image from 'next/image'
import { type } from 'os'
import React from 'react'
import Corgishopscreen from '../../../../public/Corgishopscreen.png'
import { usePathname } from 'next/navigation';
type SingleData = {
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
}

async function fetchData(id:String) {
  const res = await axios.get(`http://localhost:3000/api/projects/${id}`);
  return res.data;
}
  export default async function ProjectPage() {
    const pathname = usePathname();
    const ID:any =pathname?.split("/").pop()
const singleProject:SingleData = await fetchData(ID) 

return (
    <div >
      <GeneralBanner text="xxx案例" />
      
      <Image alt='網頁截圖' className='mx-auto w-full md:max-w-[1000px]' src={Corgishopscreen} />
      
      <div className='p-4 mx-auto max-w-[1000px]'>
      <h3 >Using Skills</h3>
      <div className='flex gap-4 flex-wrap'> 
<UsingSkill/>

      </div>
      <h3>Description</h3>
<p>James entered the game with 38,352 points, needing 36 to overtake Abdul-Jabbar. He finished the night with 38 points on 13-of-20 shooting (4-of-6 from 3) to go along with 7 rebounds, 3 assists and 3 steals.</p>
     

<div className='my-10 '>
   <GeneralButton text="Github" link="#" isBorder={true} />
      <GeneralButton text="Live Demo" link="#" isBorder={false} />

     </div>
      </div>
    
   
      </div>
  )
}


