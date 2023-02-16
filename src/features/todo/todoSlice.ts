
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../fbConfig";
import { TodoType } from "../../types";
import { AppDispatch } from "../../app/store";

interface InitialState {
    status: string
    todos: TodoType[]
}

export const addTodo = createAsyncThunk(
    "todo/createTodo",async (todo: TodoType) => {
        await addDoc(collection(db, "todos"), todo);
    });

export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
   async (dispatch: AppDispatch)=>{
        const docsRef = collection(db, "todos");
        const docsSnapshot = await getDocs(docsRef);
        console.log(docsSnapshot);
        docsSnapshot.forEach(doc=>{
            const data = doc.data();
            const todo = {
                id: doc.id,
                title: data["title"],
                desc: data["desc"],
                completed: data["completed"]
            };
            dispatch(todoActions.addTodo(todo));
        });
    }
);


const initialState: InitialState ={
    status: "idle",
    todos: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            state.todos = [...state.todos, action.payload];
        },
        clearTodos: (state)=> {state.todos = [];}
    },
    extraReducers: builder => {
        builder
          .addCase(addTodo.pending, (state) => {
            state.status = "loading";
          })
          .addCase(addTodo.fulfilled, (state) => {state.status="idle";});
      }
});

export default todoSlice.reducer;
export const  todoActions = todoSlice.actions;