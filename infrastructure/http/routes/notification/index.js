var { Router } = require("express")
const router = Router()

const createNotification = require("../../controllers/create")
const findMyNotifications = require("../../controllers/findMyNotifications")

const isAuthenticated = require("../../middleware/isAuthenticated")

router.post('/create', isAuthenticated, createNotification)
router.get("/find_my_notifications", isAuthenticated, findMyNotifications)

module.exports = router