// const fs = require("fs");
const { addNote, listNotes, del } = require("./notes");

// fs.writeFileSync('hello.txt', 'I am learning and trying to earn using node.JS')
// fs.appendFileSync('hello.txt', 
//    '\n Note-2' 
// )

// const data = fs.readFileSync("hello.txt", "utf8",(err, data)=>{
    
    //     if(err){
        //         console.log(err)
        //         return;
        //     }
        //     console.log(data);
        
        // });
        // console.log(data)
        

const command = process.argv[2];
const note = process.argv[3];
const id = Number(process.argv[3]);


if (command === "add") {
  if (!note) {
    console.log("Please provide a note!");
  } else {
    addNote(note);
  }
} else if (command === "list") {
 listNotes()
} 
else if(command == "Delete"){
if(!id){
  console.log('enter ID??');
  
} else{
  del();
}
}

else {
  console.log("Unknown command. Use add or list.");
}