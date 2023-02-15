import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../../types";

interface InitialState {
    todos: TodoType[]
}
const initialState: InitialState ={
    todos: [
        {
            title: "Go home and pray",
            desc: "Go home bend down on your knees and pray to God",
            completed: false
        },
        {
            title: "Bath and Prepare for work",
            desc: "This has to do with all processes of getting yourself ready for work.",
            completed: true
        },
        {
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
        addTodo: (state, action)=>{
            console.log(action.payload);
        }
        
        
        ,
        removeTodo: (state, action) =>{
            console.log(action.payload);
        }
    }
});

export default todoSlice.reducer;
export const  todoActions = todoSlice.actions;