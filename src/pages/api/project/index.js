
import dbConnect from "../../../../util/dbConnect"
import Project from "../../../../models/Project"


export default async function handler( req, res

) {

const {method} = req;

dbConnect()

if(method === "GET"){

    try{
        const projects = await Project.find();
        res.status(200).json(projects)
    }
    catch(err){
        res.status(500).json(err)
    }
};


if(method === "POST"){
    try{  const project = await Project.create(req.body
        );
        res.status(201).json(project)}
    catch (err){
        res.status(500).json(err)
    }
}

}
