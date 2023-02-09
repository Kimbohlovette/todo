import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

export const counterSlice = createSlice({
    name: "todo",
    initialState: {},
    reducers: {
        addTodo: (state, action:PayloadAction<Todo>) =>{
            
        },
        removeTodo: (state, action: PayloadAction<number>) =>{
            
        },
    }
});

export default counterSlice.reducer;