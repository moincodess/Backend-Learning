const app = require('./src/app')
const connectDb = require('./src/dB/db')

connectDb()


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
    
})