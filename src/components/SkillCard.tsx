import Image from 'next/image'
import React from 'react'

import react from "../../public/react.svg"
const SkillCard = () => {
  return (

<div className='mx-auto bg-[#3D3E42] w-[150px] h-[150px] rounded-xl text-white p-6 shadow-xl'>
<Image alt='skills' className='m-auto' width={50} height={50}  src={react} />
    <h4>ReactJS</h4>
</div>
    )
}

export default SkillCard