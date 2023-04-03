import React,{FC} from 'react'

type CatProps = { cat: String };


const ProjectCategory:FC<CatProps> = ({cat}) => {
  return (
    <div className='cursor-pointer  h-[40px] px-4 py-2 rounded-xl border-gray-500 hover:border-[#E2A64A] border'>
      <p>
      {cat}
      </p>
      </div>
  )
}

export default ProjectCategory