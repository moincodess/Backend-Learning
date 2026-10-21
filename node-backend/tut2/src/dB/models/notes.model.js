const mongoose = require ('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model('note', noteSchema)

/*
Post=>you post the data 
Get=> you get the fectched the data
 delte and patch
 */

app.post('/notes', async (req, res)=>{
    const data = req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    return res.status(201).json({
        message:'Notes Created'
    })
})

app.get('/notes', async (req, res)=>{

   const notes =  await noteModel.find()
    res.status(201).json({
        message:'Notes Fetched' ,
        notes: notes
    })
})