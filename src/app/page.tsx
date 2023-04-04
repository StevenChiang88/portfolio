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
        <h4>Junior Frontend Developer</h4>
        <div className='mx-auto'>
          <GeneralButton text="Go to projects" link="projects#" isBorder={true}/>
        </div>

        <div className="mx-auto flex flex-col md:flex-row max-w-[1300px] " >
          <div className=" flex-1">
          <Image className="mx-auto" alt="photo" width="250" height="250" src={towel} ></Image>
          </div>
           <div className="m-auto p-12 flex-1 "><h5 className="text-left">Hi I'm Steven, graduated from the Tamkang University with a degree in Transportation Management.  Self learning frontend skills and also willing to learn the backend skills. Hoping that I could join your team!

          </h5> 
           </div>
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

