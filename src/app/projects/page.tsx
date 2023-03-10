import GeneralBanner from '@/components/GeneralBanner'
import Image from 'next/image'
import React from 'react'
import Corgishopscreen from '../../../public/Corgishopscreen.png'
import ProjectCard from '@/components/ProjectCard'
const ProjectsPage = () => {
  return (
    <div>
      <GeneralBanner text="Projects" />
      
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 max-w-[1200px]">
<ProjectCard/><ProjectCard/>
<ProjectCard/><ProjectCard/><ProjectCard/>
<ProjectCard/>

</div>
      </div>
  )
}

export default ProjectsPage