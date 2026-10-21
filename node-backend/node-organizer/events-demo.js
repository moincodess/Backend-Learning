const event = require('events');

const app = new event;

app.on('userRegister', (user)=>{
    console.log(`Welcome,${user.name}`);
    
})
app.on('userRegister', (user)=>{
    console.log(`User Register using: ${user.email}`);
    
})

function emitter(name, email){
    const user = {name, email}
    app.emit(`userRegister`, user)

}
emitter('Moin', 'xyz@mail.com')