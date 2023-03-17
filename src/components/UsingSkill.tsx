import React,{FC} from 'react'
type Props = { text: String };

const UsingSkill:FC<Props> = ({text}) => {
  return (
    <div className="p-4 border-2 border-blue-300 rounded-2xl"><p>{text}</p></div>
  )
}

export default UsingSkill