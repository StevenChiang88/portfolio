import GeneralBanner from '@/components/GeneralBanner'
import Image from 'next/image'
import React from 'react'
import Corgishopscreen from '../../../public/Corgishopscreen.png'
import ProjectCard from '@/components/ProjectCard'
import ProjectCategory from '@/components/ProjectCategory'
import axios from "axios"
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
// type SingleData = {
//   "title": String,
//   "desc": String,
//   "img": String,
//   "github": String,
//   "link": String,
//   "skils": [String],
//   "createdAt": String,
//   "updatedAt":String,
//   "__v": Number
// }
// type FetchData = [SingleData]



const ProjectsPage = ({projectList})  =>{

//   async function test (){
//   const res  = await axios.get("http://localhost:3000/api/projects");
//   console.log(res.data,"測試")

//   }

// test()
console.log(projectList)

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


export const getServerSideProps = async()=>{

  const res  = await axios.get("http://localhost:3000/api/projects");
return{
props:{
  ProjectList :res.data
}
}
} 


export default ProjectsPage