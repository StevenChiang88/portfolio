import React, { FC } from 'react'

type BannerProps = { text: string };


const GeneralBanner:FC<BannerProps> = ({text}) => {
  return (
    <div className='mb-20 top-[80px] h-[8rem] md:h-[10rem] w-full text-white bg-slate-500 flex items-center justify-center'>
        <p>{text}</p>
       </div>
  )
}

export default GeneralBanner