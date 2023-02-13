import mongoose, { mongo } from "mongoose"
const ProjectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    skils:{
        type: [String],
        required: true
    }
},
{timestamps: true}
)

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema)