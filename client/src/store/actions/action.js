import {GETDATA,MESSAGE} from './actionTypes.js'
import axios from 'axios'

export function thunkNotesCreator(){
    return async dispatch => {   
        try{
            const res = await axios.get('/notes')
            dispatch(addData(res.data))
        }catch(e){
            console.log(e)
        }
    }
}

export function addNotesThunk(title){
    return async dispatch => {   
        try{
            if(title.value.length >= 1){
                const res = await axios.post('/notes',{title:title.value})
                dispatch(addData(res.data))
                dispatch(addMessage(''))
            }
        }catch(e){
           dispatch(addMessage('write something'))
        }
    }
}


export function deleteNotesThunk(id){
    return async dispatch => {   
        try{
            const res = await axios.delete(`/notes/${id}`)
            dispatch(addData(res.data))
        }catch(e){
            console.log(e)
        }
    }
}


export function editNotesThunk(id,title){
    return async dispatch => {   
        try{
            const res = await axios.put(`/notes/${id}`,{title})
            dispatch(addData(res.data))
        }catch(e){
            console.log(e)
        }
    }
}



function addData (data){
    return{
        type:GETDATA,
        data
    }
}

function addMessage (payload){
    return{
        type:MESSAGE,
        payload
    }
}

