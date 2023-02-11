import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types";

interface InitialState {
    todos: TodoType[]
}
const initialState: InitialState ={
    todos: [
        {
            id: 1,
            title: "Go home and pray",
            desc: "Go home bend down on your knees and pray to God",
            completed: false
        },
        {
            id: 2,
            title: "Bath and Prepare for work",
            desc: "This has to do with all processes of getting yourself ready for work.",
            completed: true
        },
        {
            id: 3,
            title: "Leave for Space at 7am",
            desc: "This has to do with all processes of getting yourself ready for work.",
            completed: true
        }
    ]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<TodoType>) =>{
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) =>{
            state.todos.splice(action.payload, 1);
        }
    }
});

export default todoSlice.reducer;
export const  todoActions = todoSlice.actions;