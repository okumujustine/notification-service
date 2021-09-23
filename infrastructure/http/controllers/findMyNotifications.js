
var NotificationSchema = require("../../database/schema/Notification")

const findMyNotifications = async (req, res) => {
    const loggedInUser = req.currentUser

    if (!loggedInUser) {
        return res.status(401).send({
            message: "Unauthorized"
        })
    }

    try {
        const getUserNotifications = await NotificationSchema.find({ docOwner: loggedInUser.id, status: "pending" })

        res.status(200).send({ notification: getUserNotifications })
    } catch (error) {
        return res.status(500).send({ message: "Failed to get your notifications, try again later" })
    }
}

module.exports = findMyNotifications