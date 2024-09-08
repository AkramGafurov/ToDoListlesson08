import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


 export type ActionType = RemoveTodolistActionType|AddTodolistActionType|ChangeTodolistTitleActionType|ChangeTodolistFilterActionType

export type RemoveTodolistActionType  = {
     type: 'REMOVE-TODOLIST',
     payload: {
         id: string
     }
 }
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    payload: {
        title: string
    }
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
        id: string,
        title: string,
    }
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
        id: string,
        filter: FilterValuesType,
    }
}

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

export const todolistReducer = (state: TodolistType[] = initialState, action: ActionType) => {
    switch (action.type) {
        case ('REMOVE-TODOLIST'): {
            return state.filter(item => item.id !== action.payload.id)
        }
        case ('ADD-TODOLIST'): {
            const newToDoList = {id: v1(), title: action.payload.title, filter: 'all'}
            return [newToDoList, ...state]
        }
        case ('CHANGE-TODOLIST-TITLE'): {
            return state.map(item => item.id === action.payload.id ? {
                ...item,
                title: action.payload.title
            } : item)
        }

        case ('CHANGE-TODOLIST-FILTER'): {
            return state.map(item => item.id === action.payload.id ? {
                ...item,
                filter: action.payload.filter
            } : item)
        }
        default:
            throw new Error('Unknown action type')
    }
}
