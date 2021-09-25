const amqp = require("amqplib")
const got = require('got');

var rabbitMQConnectionInstance
var rabbitMQChannelInstance

async function rabbitMQConnection() {
    try {
        const url = process.env.RABBITMQ_URL
        rabbitMQConnectionInstance = await amqp.connect(url)
        rabbitMQChannelInstance = await rabbitMQConnectionInstance.createChannel()
        await rabbitMQChannelInstance.assertQueue("notification")

        rabbitMQChannelInstance.consume("notification", async (data) => {
            const item = JSON.parse(data.content.toString())

            console.log(item)

            try {
                const response = await got.post('http://localhost:8000/just-list/notification/update_notification_status');
                console.log('response', response.body)
                rabbitMQChannelInstance.ack(data)

            } catch (e) {
                console.log('error', e)
            }
        })

        console.log("connection rabbitMQ established")
        return { rabbitMQConnectionInstance, rabbitMQChannelInstance }
    } catch (err) {
        console.log("Failed to connect to rabbitMQ")
    }
}
rabbitMQConnection()

module.exports = { rabbitMQConnectionInstance, rabbitMQChannelInstance }