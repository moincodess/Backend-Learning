
const fs = require('fs')
const { createReadStream, createWriteStream } = fs

const stream = createReadStream('./source.txt')
const write = createWriteStream('./destination.txt')

stream.pipe(write)

write.on("finish", ()=>{
    console.log("Finished sending");
})

