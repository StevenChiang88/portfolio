import GeneralBanner from '@/components/GeneralBanner'
import Image from 'next/image'
import React from 'react'
import Corgishopscreen from '../../../public/Corgishopscreen.png'
const ProjectsPage = () => {
  return (
    <div>
      <GeneralBanner text="Projects" />
      
      <Image alt='網頁截圖' className='mx-auto' src={Corgishopscreen} />
      
      </div>
  )
}

export default ProjectsPage