const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApiSchema = new Schema(
    {
        apiName: { type: String, required: true },
        apiAdress: { type: String, required: true },
        apiRequestMethod: { type: String, required: true },
        apiParameters: { type: [String], required: true },
        apiReturn: { type: String, required: true },
        apiGroup: { type: String, required: true },
        apiCreator: { type: String, required: true },
        apiNote: { type: String },
    },
    { timestamps: true },
)

const ProjectSchema = new Schema(
    {
        projectName: { type: String, required: true },
        projectCreator: { type: String, required: true },
        projectNote: { type: String, required: true },
        projectApis: [ApiSchema]
    },
    { timestamps: true },
)

module.exports = mongoose.model('Project', ProjectSchema)
