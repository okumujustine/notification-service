
var { Router } = require("express")
var notificationRouter = require("./notification")
const routes = Router()



routes.use("/notification", notificationRouter)

module.exports = routes