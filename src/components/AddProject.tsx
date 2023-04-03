"use client"
import axios from 'axios'
import React, { useState,FC } from 'react'
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import app from "../firebase"

type Project = {
  
  "title": string,
  "desc": string,
  "img": string,
  "github": string,
  "link": string,
  "skils": string[]

}

const AddProject :FC = () => {

const [skills,setSkills] = useState<String>("")

const [project, setProject] = useState<Project>({
  "title": "",
  "desc": "",
  "img": "",
  "github": "",
  "link": "",
  "skils": []
})
const [file, setFile] = useState<File|null>(null)

const covertStringtoArray = ()=>{
 
  const test =skills.split(",")
  setProject(prevProject => ({...prevProject, skils: test}));

}


const uploadToFireBase = async()=>{
  const storage = getStorage(app)
  if (file) {
    const storageRef = ref(storage, file.name);
    // perform operations on storageRef
    const uploadTask = uploadBytesResumable(storageRef, file);
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    covertStringtoArray()
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref)
    .then((downloadURL) => {
      console.log('File available at', downloadURL);
      setProject(prevProject => ({...prevProject, img: downloadURL}));

axios.post('http://localhost:3000/api/projects',project)
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
    });

  }
);
  }





}
  return (
    <div className=' w-[300px] md:w-[500px] flex items-center justify-center  '>
   <div className='flex gap-4 flex-col p-4'>
   <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setFile(file);
  }
}} />                <input placeholder='title'onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setProject(prev => ({...prev, title: e.target.value}));
}} className='p-2 border-gray-400 border-2 rounded-md text-black '/>
           
                <input placeholder='skills' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setSkills(e.target.value)}}  className='p-2 border-gray-400 border-2 rounded-md text-black '/>
                <input placeholder='github link' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setProject(prev => ({...prev, github: e.target.value}));
}}  className='p-2 border-gray-400 border-2 rounded-md text-black '/>
                <input placeholder='demo link' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setProject(prev => ({...prev, link: e.target.value}));
}} className='p-2 border-gray-400 border-2 rounded-md text-black '/>
                
                <textarea placeholder='description' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>{setProject(prev => ({...prev, desc: e.target.value}));
}}  className='p-2 border-gray-400 border-2 rounded-md text-black '/>
                <button onClick={()=>{uploadToFireBase()}} className="border-2 border-gray-400 px-4 py-2">Add Project</button>
<button onClick={()=>{console.log("一個完整project測試",project)}}>sada</button>
   </div>
               

                </div>  
  )
}

export default AddProject