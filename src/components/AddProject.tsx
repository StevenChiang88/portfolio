"use client"
import axios from 'axios'
import React, { useState } from 'react'

const AddProject = () => {
const [project, setProject] = useState()
const [file, setFile] = useState<File | any>(null)

const uploadToCloudinary = async()=>{
  const data = new FormData()
  data.append("file",file)
  data.append("upload_preset","portfolio")
  data.append("cloud_name", "dekp91sle");

  try{
const uploadRes =await axios.post("https://api.cloudinary.com/v1_1/dekp91sle/images/upload",data)
console.log(uploadRes.data,"網址")
  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div className=' w-full flex items-center justify-center overflow-x-auto'>
   
                <input type="file" onChange={(e:any)=>{setFile(e.target.files[0])}}/>
                <input placeholder='title'/>
                <input placeholder='description'/>
                <input placeholder='skills'/>
                <input placeholder='github link'/>
                <input placeholder='demo link'/>
                <button onClick={()=>{uploadToCloudinary()}} className="border border-black px-4 py-2">Add Project</button>

                </div>  
  )
}

export default AddProject