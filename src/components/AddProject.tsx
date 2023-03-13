import React from 'react'

const AddProject = () => {
  return (
    <div className=' w-full flex items-center justify-center overflow-x-auto'>
   
                <input type="file"/>
                <input placeholder='title'/>
                <input placeholder='description'/>
                <input placeholder='skills'/>
                <input placeholder='github link'/>
                <input placeholder='demo link'/>
                <button  className="border border-black px-4 py-2">Add Project</button>

                </div>  
  )
}

export default AddProject