
import React from "react";
import axios from "axios";
import { type } from "os";
import AddProject from "@/components/AddProject";
type SingleData = {
  "_id":String,
  "title": String,
  "desc": String,
  "img": String,
  "github": String,
  "link": String,
  "skils": [String],
  "createdAt": String,
  "updatedAt":String,
  "__v": Number
}
async function fetchData() {
  const res = await axios.get("http://localhost:3000/api/projects");
  return res.data;
}


const AdminPage  = async () => {
  const projectLists:SingleData[] = await fetchData();

//   const [addProjectOpen , setAddProjectOpen] = useState(false)

  return (
    <div >
<div className="flex flex-col  items-center my-10">
<h3>Admin Page</h3>
<AddProject/>

</div>

      <div>
        <table className="flex flex-col overflow-x-auto items-center" >
            <thead>
            <tr className="flex w-[700px] bg-blue-400">
            <th className="flex-1">Project Image</th>
            <th className="flex-1">Project Name</th>              
            <th className="flex-1">Action</th>
            </tr>
            </thead>
          
            <tbody  >
           {projectLists.map((project)=>   
            <tr className="flex w-[700px] bg-blue-400 ">
            <td className="flex-1 text-center">{project.img} </td>
                    <td className="flex-1 text-center">{project.title} </td>
                    <td className="flex gap-2 flex-1">
                    <button className="border border-black px-6 py-2">Edit</button>
                    <button className="border border-black px-6 py-2">Delete</button>
                     </td>
                </tr>)}
            
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
