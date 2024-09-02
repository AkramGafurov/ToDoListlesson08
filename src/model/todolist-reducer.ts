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

export const todolistReducer = (state: TodolistType[] = initialState, action: any) => {
    switch (action.type) {
        case ('REMOVE-TASK'):{
            return state
        }
         case ('Add-TASK'):{
            return state
        }
        case ('CANGE-TASK-STATUS'):{
            return state
        }
        default: return state
    }
}
