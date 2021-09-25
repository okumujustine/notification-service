var { Router } = require("express")
const router = Router()

const createNotification = require("../../controllers/create")
const findMyNotifications = require("../../controllers/findMyNotifications")
const updateNotificationStatusToViewed = require("../../controllers/updateNotificationStatusToViewed")

const isAuthenticated = require("../../middleware/isAuthenticated")

router.post('/create', isAuthenticated, createNotification)
router.get("/find_my_notifications", isAuthenticated, findMyNotifications)

router.post('/update_notification_status_to_viewed/:id', updateNotificationStatusToViewed)

module.exports = router