const {Router} = require('express')
const router = Router()
const Notes = require('../models/Notes')



router.get('/', async(req,res)=>{
    try{
        const notes = await Notes.find()
        res.json(notes)
    }catch(e){
        res.json({message:'error'})
    }
})

router.get('/:id',async(req,res)=>{
    const notes = await Notes.getById(req.params.id)
    if(notes){
        res.json(notes)
    }
    else{
        res.json({message:'write correct id'})
    }
})


router.post('/', async(req,res)=>{
    try{
        const notes = new Notes(req.body.title)
        await notes.save()
        const data = await Notes.find()
        res.json(data)
    }
    catch(e){
        res.json({message:'error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const note = await Notes.updateById({
            title: req.body.title,
            id : req.params.id
        })
        if(note){
            res.json(note)
        }
    }
    catch(e){
        console.log(e)
        res.json({message:'there is no such note'})
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const note = await Notes.deleteById(req.params.id)
        if(note){
            res.json(note)
        }
    }
    catch(e){
        console.log(e)
        res.json({message:'there is no such note'})
    }
})


module.exports = router