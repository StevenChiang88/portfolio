import React from 'react'
type Props = { text: String };

const UsingSkill = ({text}:Props) => {
  console.log(text,"在skill內")
  return (
    <div className="p-4 border-2 border-blue-300 rounded-2xl"><p>{text}</p></div>
  )
}

export default UsingSkill