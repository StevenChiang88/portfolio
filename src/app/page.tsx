import "./globals.css"
import Image from 'next/image'
import GeneralButton from "../components/GeneralButton"
import towel from "../../public/towel.png"
import SkillCard from "@/components/SkillCard"


const front =["html","css","js","tailwind","react","nextjs"]

const back =["nodejs","express","mongodb"]
export default function Home() {

  return (
      <div className='text-center text-black dark:text-white mx-auto '>
        <h4>Hello, I'm</h4>
        <h1>Steven Chiang</h1>
        <h4>Frontend Developer</h4>
        <div className='mx-auto'>
          <GeneralButton text="Download CV" link="#" isBorder={true}/>
          <GeneralButton text="Go to projects" link="projects#" isBorder={false}/>
        </div>

        <div className="mx-auto flex flex-col md:flex-row max-w-[1300px] " >
          <div className=" flex-1">
          <Image className="mx-auto" alt="photo" width="250" height="250" src={towel} ></Image>
          </div>
           <div className="m-auto p-12 flex-1 "><h5 className="text-left">James entered the game with 38,352 points, needing 36 to overtake Abdul-Jabbar. He finished the night with 38 points on 13-of-20 shooting (4-of-6 from 3) to go along with 7 rebounds, 3 assists and 3 steals.</h5></div> 
        </div>

        <div className="my-16">
          <h3>Frontend Skills</h3>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4  gap-12 max-w-[1000px] p-8 ">
       {front.map((front)=> <SkillCard skill={front}/> )}
      
          </div>
          <h3>Backend Skills</h3>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4  gap-12 max-w-[1000px] p-8 ">
          {back.map((back)=> <SkillCard skill={back}/> )}

          </div>
         
          <GeneralButton text="Go to projects" link="projects" isBorder={false}/>

        </div>
      </div>
  )
}

