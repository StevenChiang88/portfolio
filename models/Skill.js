import mongoose from "mongoose"
const SkillSchema = new mongoose.Schema({
    frontend:{
        type: Boolean,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

export default mongoose.model("Skill", SkillSchema)