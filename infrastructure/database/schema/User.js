var mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    iat: { type: Number, required: true },
});

module.exports = UserSchema