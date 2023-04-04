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
  return res.data;
}


const ProjectsPage = async () => {
  
  const projectLists:SingleData[] = await fetchData();
//   const [filteredData, setFilteredData] = useState()

// useEffect(()=>{setFilteredData(projectLists)},[projectLists])


  const skillhandler = (skill:String)=>{
    projectLists.filter(project=>{
    project.skils[0] == skill
  })
  }


  return (
    <div className="flex flex-col items-center">
      <GeneralBanner text="Projects" />

      {/* <div className="flex flex-wrap gap-4 p-6  ">
        <ProjectCategory  cat="React" /> 
        <ProjectCategory cat="Next" />
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 max-w-[1600px] gap-8">
        {/* {
        filteredData? filteredData.map((project) => (
          <ProjectCard  project={project} />
        )) : <p>loading....</p>
       } */}

<>
{
       projectLists.map((project) => (
          <ProjectCard  project={project} />
       ))
        }
</>
     
      </div>
    </div>
  );
};

export default ProjectsPage;


// export const getServerSideProps:FC = async()=>{
//     const res = await axios.get("http://localhost:3000/api/projects");
//   return
//  {
//   props:{
//     projectLists:  res.data

//   }
//  } 
// }