const fs = require("fs");



function addNote(note) {
    console.log("adding the notes", note);
    const data = fs.readFileSync('notes.json', 'utf8')
    const newnote = JSON.parse(data)
   
newnote.push(note);

fs.writeFileSync("notes.json", JSON.stringify(newnote, null, 2));
    console.log('Note added:', note);
    
}

function listNotes() {
  console.log("Listing the notes");

  const data = fs.readFileSync('notes.json', 'utf8')
  const notes = JSON.parse(data)
 
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note}`);

  });

} 

function del ()
{
  const data = fs.readFileSync('notes.json', 'utf8')
  const notes = JSON.parse(data)
  const position = Number(process.argv[3]);
  const actualInd = position-1;
  
const updateNotes = notes.filter((el, index)=> {
  return index !== actualInd;
});
  fs.writeFileSync("notes.json", JSON.stringify(updateNotes, null, 2));
}

module.exports = { addNote, listNotes, del };