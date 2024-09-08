import {v1} from "uuid";
import {TodolistType} from "../App";
import {ActionType, todolistReducer} from "./todolist-reducer";

test('correct todoList should be removed', () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    const initialState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    const action = {
        type: 'REMOVE-TODOLIST',
        payload:
            {id: todolistID1}
    } as const

    const endState = todolistReducer(initialState, action)


    expect(endState .length).toBe(1)
    expect(endState [0].id).toBe(todolistID2)

})

test('correct todoList should be added', () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    const initialState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const action = {
        type: 'ADD-TODOLIST',
        payload:
            {title: 'newTitle'}
    } as const

    const endState = todolistReducer(initialState, action)

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe('newTitle')

})

test('correct todolist should change its name', () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    const initialState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const action = {
        type: 'CHANGE-TODOLIST-TITLE',
        payload:
            {
                id: todolistID1,
                title: 'newTitle',
            }
    } as const

    const endState = todolistReducer(initialState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe('newTitle')

})

test('correct filter of todolist should be changed', () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    const initialState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const action = {
        type: 'CHANGE-TODOLIST-FILTER',
        payload:
            {
                id: todolistID1,
                filter: 'completed',
            }
    } as const

    const endState = todolistReducer(initialState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toBe('completed')

})