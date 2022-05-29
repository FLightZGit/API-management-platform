const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        UserName: { type: String, required: true },
        Password: { type: String, required: true },
        Mail: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)
