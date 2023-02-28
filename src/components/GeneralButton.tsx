import React from 'react'

type ButtonProps = { text: React.ReactNode, link: React.ReactNode ,isBorder:React.ReactNode  };


const GeneralButton = ({text,link,isBorder}:ButtonProps) => {

  return (

        <button className={`${isBorder? "border-black dark:border-white" : "border-transparent bg-[#E2A64A]" } border-2  mr-6 px-8 py-4 rounded-xl `}>{text}</button>

  )
}

export default GeneralButton