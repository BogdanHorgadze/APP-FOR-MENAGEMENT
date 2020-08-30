const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path');


class Notes{
    constructor(note){
        this.note = note
        this.id = uuidv4()
    }

    async save(){
        const notes = await Notes.find()

        notes.push({
            title: this.note,
            id:this.id
        })

        return new Promise((resolve,reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(notes),
                (err) =>{
                    if(err) {
                        reject(err)
                    }
                    else{
                        resolve()
                    }
                }
            )
        })
    }

    static find(){
        return new Promise((resolve,reject) => {
            fs.readFile(
                path.join(__dirname, '..' , 'data', 'db.json'),
                'utf-8',
                (err,content) =>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    static async getById(id){
        const data = await Notes.find()
        let result = ''

        for(let i = 0; i < data.length ;i++){
            if(data[i].id === id){
                result = data[i]
            }
        }

        if(result){
            return result
        }
    }

    static async updateById({title,id}){
        const notes = await Notes.find()
        
        const idx = notes.findIndex(item => item.id === id)
        notes[idx].title = title
        return new Promise((resolve,reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(notes),
                (err) =>{
                    if(err) {
                        reject(err)
                    }
                    else{
                        resolve(notes)
                    }
                }
            )
        })
    }

    static async deleteById(id){
        const notes = await Notes.find()
        
        const filtered = notes.filter(item => item.id !== id)
        return new Promise((resolve,reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(filtered),
                (err) =>{
                    if(err) {
                        reject(err)
                    }
                    else{
                        resolve(filtered)
                    }
                }
            )
        })
    }
}


module.exports = Notes