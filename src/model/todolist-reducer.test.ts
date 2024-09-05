import {v1} from "uuid";
import {TodolistType} from "../App";
import {todolistReducer} from "./todolist-reducer";

test('correct todoList should be romoved', () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    const initialState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    const action = {
        type: 'REMOVE-TASK',
        payload:
            {id: todolistID1}
    }

    const endState = todolistReducer(initialState, action)


    expect(endState .length).toBe(1)
    expect(endState [0].id).toBe(todolistID2)

})