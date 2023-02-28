import React from 'react'

type BannerProps = { text: React.ReactNode };


const GeneralBanner = ({text}:BannerProps) => {
  return (
    <div className='mb-20 top-[80px] h-[8rem] md:h-[10rem] w-full bg-slate-500 flex items-center justify-center'>
        <p>{text}</p>
       </div>
  )
}

export default GeneralBanner