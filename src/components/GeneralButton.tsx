import React from 'react'

type ButtonProps = { text: React.ReactNode, link: React.ReactNode };


const GeneralButton = ({text,link}:ButtonProps) => {
  return (
    <button className='border mx-3 px-8 py-4 rounded-lg'>{text}</button>
  )
}

export default GeneralButton