const fs = require('fs');
fs.appendFile('hey.txt', 'khana khaaya', function(err){
    if(err) console.log('error')
        else console.log('done')
})

fs.rename('hey.txt', 'hello.txt', function(err){
    if(err)console.log('error')
        else console.log('done')
})

fs.unlink('hey.txt', function(err){
    if(err) console.log('error')
        else console.log('removed')
})