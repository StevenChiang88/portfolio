import GeneralBanner from '@/components/GeneralBanner'
import Image from 'next/image'
import React from 'react'
import Corgishopscreen from '../../../public/Corgishopscreen.png'
import ProjectCard from '@/components/ProjectCard'
import ProjectCategory from '@/components/ProjectCategory'
import axios from "axios"
import { GetServerSideProps } from 'next'
type SingleData = {
  "title": string,
  "desc": string,
  "img": string,
  "github": string,
  "link": string,
  "skils": [string],
  "createdAt": string,
  "updatedAt":string,
  "__v": number
}
type FetchData = [SingleData]



const ProjectsPage = ({projectList}:{projectList:SingleData}) => {

  async function test (){
  const res  = await axios.get("http://localhost:3000/api/projects");
  console.log(res.data,"測試")

  }

test()


return (
    <div className='flex flex-col items-center'>
      <GeneralBanner text="Projects" />
      
<div className='flex flex-wrap gap-4 p-6  '>
  <ProjectCategory  cat="React" />  <ProjectCategory  cat="Vue" />
  <ProjectCategory  cat="Next" />
  <ProjectCategory  cat="React Natvie" />
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 max-w-[1600px] gap-8">

{/* {projectList.map((project)=><ProjectCard/>)} */}


</div>
      </div>
  )
}

export default ProjectsPage


 export const getServerSideProps: GetServerSideProps = async()=>{

    const res  = await axios.get("http://localhost:3000/api/projects");

return{
  props:{
    ProjectList :res
  }
}
 } 