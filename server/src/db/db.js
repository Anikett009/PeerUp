const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://aniketpethe007:bigdesai@cluster0.jhhifv3.mongodb.net/?retryWrites=true&w=majority"

const connectdb =async () => {
    try {
        const connectioninstance = await mongoose.connect(MONGODB_URI)
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log('Connection to mongodb failed', error);
    }
}

module.exports = connectdb