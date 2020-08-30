const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/notes', require('./routes/notes.route'))

app.listen(PORT,() =>{
    console.log(`server running on ${PORT}`)
})