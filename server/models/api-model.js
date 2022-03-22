const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApiSchema = new Schema(
    {
        apiName: { type: String, required: true },
        apiAdress: { type: String, required: true },
        apiRequestMethod: { type: String, required: true },
        apiParameters: { type: [String], required: true },
        apiResponse: { type: String, required: true },
        apiGroup: { type: Number, required: true },
        apiCreatPerson: { type: String, required: true },
        apiNote: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Api', ApiSchema)