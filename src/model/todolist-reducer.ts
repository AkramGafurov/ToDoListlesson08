import {TodolistType} from "../App";
import {v1} from "uuid";

type actionType = {
    type: string,
    payload: any
}
let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

export const todolistReducer = (state: TodolistType[] = initialState, action: actionType) => {
    switch (action.type) {
        case ('REMOVE-TASK'):{
            return state.filter(item=>item.id!==action.payload.id)
        }
         case ('Add-TASK'):{
            return state
        }
        case ('CHANGE-TASK-STATUS'):{
            return state
        }
        default: throw new Error('Unknown action type')
    }
}
