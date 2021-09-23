const express = require('express')
require("../database/connection")
require('dotenv').config()
const cookieSession = require("cookie-session")
const cors = require('cors')
const routes = require('./routes/index')
const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))


app.use(express.json());
app.use(cookieSession({
    name: "todoList2021xStyling",
    signed: false
}))

app.use("/just-list", routes)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
