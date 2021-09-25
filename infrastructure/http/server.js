const express = require('express')
const http = require('http')
const socketio = require('socket.io')
require("../database/connection")
require('dotenv').config()
const cookieSession = require("cookie-session")
const cors = require('cors')
const routes = require('./routes/index')
require('./rabbitmq-connection')
var NotificationSchema = require("../database/schema/Notification")

const app = express()
const server = http.createServer(app)

const io = socketio(server, {
    cors: {
        origins: '*:*',
        methods: ["GET", "POST"]

    }
})

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

users = {}

io.on('connection', (socket) => {

    socket.on('join', (userDetails) => {
        users[userDetails.user] = socket.id
    })

    socket.on('notification', async (notificationItem) => {

        const findItem = await NotificationSchema.findOne({
            userId: notificationItem.userId,
            itemId: notificationItem.itemId
        })

        io.to(users[findItem.docOwner]).emit('private_notification', findItem)
    })
})


app.use(express.json());
app.use(cookieSession({
    name: "todoList2021xStyling",
    signed: false
}))


app.use("/just-list", routes)

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
