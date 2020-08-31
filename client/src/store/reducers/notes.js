import {GETDATA,MESSAGE} from '../actions/actionTypes'

const initialState = {
    data: [],
    message:false
}

export default function notes (state = initialState, action){
    switch(action.type){
        case GETDATA:
        return {
            ...state,
            data: action.data
            
        }
        case MESSAGE:
            return {
                ...state,
                message : action.payload
            }
        default:
        return state
    }
}