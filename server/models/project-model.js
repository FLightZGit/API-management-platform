const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema(
    {
        projectName: { type: String, required: true },
        projectOwner: { type: String, required: true },
        projectNote: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Project', ProjectSchema)