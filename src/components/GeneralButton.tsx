import Link from 'next/link';
import React, { FC } from 'react'

type ButtonProps = { text: string, link: string ,isBorder:Boolean ,refer?: string };


const GeneralButton :FC<ButtonProps> = ({text,link,isBorder,refer}) => {

  return (
<>  {refer? <a target='_blank' rel="noreferrer" href={link}>
        <button className={`${isBorder? "border-black dark:border-white" : "border-transparent bg-[#E2A64A]" } border-2  mr-6 px-8 py-4 rounded-xl my-8 `}>{text}</button>
        </a>
 :
<Link href={`/${link}`}>    <button className={`${isBorder? "border-black dark:border-white" : "border-transparent bg-[#E2A64A]" } border-2  mr-6 px-8 py-4 rounded-xl my-8 `}>{text}</button>
    </Link>   
    }</>

  


  )
}

export default GeneralButton