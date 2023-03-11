import GeneralBanner from '@/components/GeneralBanner'
import Image from 'next/image'
import React from 'react'
import Corgishopscreen from '../../../public/Corgishopscreen.png'
import ProjectCard from '@/components/ProjectCard'
import ProjectCategory from '@/components/ProjectCategory'
const ProjectsPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <GeneralBanner text="Projects" />
      
<div className='flex flex-wrap gap-4 p-6  '>
  <ProjectCategory  cat="React" />  <ProjectCategory  cat="Vue" />
  <ProjectCategory  cat="Next" />
  <ProjectCategory  cat="React Natvie" />

</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1600px] gap-8">
<ProjectCard/><ProjectCard/>
<ProjectCard/><ProjectCard/><ProjectCard/>
<ProjectCard/>

</div>
      </div>
  )
}

export default ProjectsPage