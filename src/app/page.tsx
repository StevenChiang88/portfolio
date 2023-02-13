import "./globals.css"
import Image from 'next/image'
import GeneralButton from "../components/GeneralButton"


export default function Home() {
  return (
      <div className='text-center'>
        <h4>Hello, I'm</h4>
        <h1>Steven Chiang</h1>
        <h4>Frontend Developer</h4>
        <div className='mx-auto'>
          <GeneralButton  text="Download CV" link="#"/>
          <GeneralButton text="Go to projects" link="#"/>

        </div>
      </div>
  )
}
