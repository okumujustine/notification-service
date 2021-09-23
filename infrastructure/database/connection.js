var mongoose = require('mongoose');


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todonotify', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to the todonotify database")
    } catch (error) {
        console.log(error);
        console.log('Error connecting to todonotify database')
    }
}

connectDb()