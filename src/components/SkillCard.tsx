import Image from 'next/image'
import React,{FC} from 'react'



type Props = { skill: string };

const SkillCard:FC<Props> = ({skill}) => {
  return (

<div className='mx-auto bg-[#3D3E42] w-[150px] h-[150px] rounded-xl text-white p-6 shadow-xl'>
<Image priority alt='skills' className='m-auto' width={50} height={50}  src={`/skills/${skill}.svg` }/>
    <h4>{skill}</h4>
</div>
    )
}

export default SkillCard