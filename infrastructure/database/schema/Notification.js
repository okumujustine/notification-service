var mongoose = require("mongoose")

var UserSchema = require("./User")
var ItemSchema = require("./Item")

const NotificationSchema = new mongoose.Schema({
    docOwner: { type: String, required: true },
    userId: { type: String, required: true },
    itemId: mongoose.Types.ObjectId,
    user: UserSchema,
    item: ItemSchema,
    status: {
        type: String,
        required: true,
        enum: ['pending', 'viewed'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('notifications', NotificationSchema);