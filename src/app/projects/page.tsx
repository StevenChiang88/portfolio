// "use client"
import GeneralBanner from "@/components/GeneralBanner";
import ProjectCategory from "@/components/ProjectCategory";
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import { type } from "os";
import { type NextPage } from "next";


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
 
  if (!res.data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.data;
 
}


const ProjectsPage = async () => {
  
  const projectLists:SingleData[] = await fetchData();


  const skillhandler = (skill:string)=>{
    projectLists.filter(project=>{
    project.skils[0] == skill
  })
  }


  return (
    <div className="flex flex-col items-center">
      <GeneralBanner text="Projects" />

 

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 max-w-[1600px] gap-8">
  

<>
{
       projectLists.map((project) => (
          <ProjectCard key={project._id} project={project} />
       ))
        }
</>
     
      </div>
    </div>
  );
};



export default ProjectsPage;


