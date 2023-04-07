import React from "react";
import axios from "axios";
import { type } from "os";
import AddProject from "@/components/AddProject";
import Image from "next/image";


type SingleData = {
  "_id":string,
  "title": string,
  "desc": string,
  "img": string,
  "github": string,
  "link": string,
  "skils": [string],
  "createdAt": string,
  "updatedAt":string,
  "__v": number
}
async function fetchData() {
  const res = await axios.get("http://localhost:3000/api/projects");
  return res.data;
}

async function deleteData(id:string) {
  const res = await axios.delete(id)
return res}


const AdminPage  = async () => {
  const projectLists:SingleData[] = await fetchData();


  return (
    <div >
<div className="flex flex-col  items-center my-10">
<h3>Admin Page</h3>
<AddProject/>

</div>

      <div>
        <table className="flex flex-col overflow-x-auto items-center" >
            <thead>
            <tr className="flex w-[1000px] bg-blue-400">
            <th className="flex-1">Project Image</th>
            <th className="flex-1">Project Name</th>              
            <th className="flex-1">Action</th>
            </tr>
            </thead>
          
            <tbody  >
           {projectLists.map((project)=>   
            <tr key={project._id} className="flex w-[1000px] bg-blue-100 p-4">
            <td className="flex-1 text-center">
              <Image alt={project.title} width={500} height={500} src={project.img} />
              
              </td>
                    <td className="flex-1 flex items-center justify-center text-center">{project.title} </td>
                    <td className="flex-1 flex items-center justify-center gap-2">
                    <button className="border border-black px-6 py-2 ">Edit</button>
                    <button         
                     className="border border-black px-6 py-2">Delete</button>
                     </td>
                </tr>)}
            </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default AdminPage;
