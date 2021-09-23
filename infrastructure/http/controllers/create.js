
var NotificationSchema = require("../../database/schema/Notification")

const createNotification = async (req, res) => {
    const user = req.currentUser
    const item = req.body.item

    const itemFinal = {
        id: item._id,
        user: item.user,
        title: item.title,
        status: item.status,
        description: item.description
    }
    const valueToStore = {
        docOwner: item.userId,
        userId: user.id,
        itemId: itemFinal.id,
        user: user,
        item: itemFinal,
        status: "pending"
    }


    const find = await NotificationSchema.findOne({ userId: user.id, itemId: itemFinal.id })

    if (find) {
        return res.status(400).send({ message: "You already requested to help on this Item" })
    }

    const notification = await NotificationSchema.create(valueToStore)

    res.status(200).send({ notification })
}

module.exports = createNotification