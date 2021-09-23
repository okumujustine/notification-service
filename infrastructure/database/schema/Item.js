
var mongoose = require("mongoose")
const UserSchema = require('./User')

var ItemSchema = new mongoose.Schema({
    id: { type: String, required: true },
    user: [UserSchema],
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String }
})


module.exports = ItemSchema;