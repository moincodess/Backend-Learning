const express = require('express')
const app = express()

app.use(express.json())

const notes = []

app.post('/notes', (req, res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:'Note Added',
        data:req.body
    })
})

app.delete('/notes/:index', (req, res)=>{
    
    const index = req.params.index
    notes.splice(index, 1);

    res.status(200).json({
   message: 'Note Deleted'
    })
})

app.patch('/notes/:index', (req, res)=>{

    const index = req.params.index
    
    if(!notes[index]){
        res.status(404).json({
            message:`Notes doesnt exist at ${index}`
        })
    }
    const {description, title} = req.body

    if(description!==undefined){
        notes[index].description = description
    }

    if(title!==undefined){
        notes[index].title = title
    }

        res.status(200).json({
            message:'Notes Description Updated', 

            note:notes[index]
        })
    
})

app.get('/notes', (req, res)=>{
    

  res.status(200).json(notes)
})

module.exports = app