import React from 'react'

type CatProps = { cat: React.ReactNode };


const ProjectCategory = ({cat}:CatProps) => {
  return (
    <div className='cursor-pointer  h-[40px] px-4 py-2 rounded-xl border-gray-500 hover:border-[#E2A64A] border'>
      <p>
      {cat}
      </p>
      </div>
  )
}

export default ProjectCategory