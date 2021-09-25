var { Router } = require("express")
const router = Router()

const createNotification = require("../../controllers/create")
const findMyNotifications = require("../../controllers/findMyNotifications")

const isAuthenticated = require("../../middleware/isAuthenticated")

router.post('/create', isAuthenticated, createNotification)
router.get("/find_my_notifications", isAuthenticated, findMyNotifications)

router.post('/update_notification_status', async function (req, res) {
    console.log("here we go again")

    res.send("ok")
})

module.exports = router