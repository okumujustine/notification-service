
var NotificationSchema = require("../../database/schema/Notification")

const updateNotificationStatusToViewed = async (req, res) => {

    const notificationId = req.params.id

    var notification = await NotificationSchema.updateOne(
        { _id: notificationId },
        { $set: { status: "viewed" } }
    )
    res.send({ "ok": notification })
}

module.exports = updateNotificationStatusToViewed