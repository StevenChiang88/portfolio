import Image from 'next/image'
import React from 'react'



type Props = { skill: String };

const SkillCard = ({skill}:Props) => {
  return (

<div className='mx-auto bg-[#3D3E42] w-[150px] h-[150px] rounded-xl text-white p-6 shadow-xl'>
<Image alt='skills' className='m-auto' width={50} height={50}  src="../../public/react.svg" />
    <h4>{skill}</h4>
</div>
    )
}

export default SkillCard