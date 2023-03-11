import Link from 'next/link';
import React from 'react'

type ButtonProps = { text: React.ReactNode, link: React.ReactNode ,isBorder:React.ReactNode  };


const GeneralButton = ({text,link,isBorder}:ButtonProps) => {

  return (
<Link href={`/${link}`}>
        <button className={`${isBorder? "border-black dark:border-white" : "border-transparent bg-[#E2A64A]" } border-2  mr-6 px-8 py-4 rounded-xl my-8 `}>{text}</button>
        </Link>

  )
}

export default GeneralButton