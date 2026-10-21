const mongoose= require('mongoose')

async function connectDb() {
    await mongoose.connect('mongodb+srv://adminuser:Practice12345@backend-practice.0tuzyna.mongodb.net/halley')
    console.log('CONNECTED TO DB')
}

module.exports = connectDb      