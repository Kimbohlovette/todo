import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import {  addTodo } from "../features/todo/todoSlice";
export const AddTodoForm = () =>{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = ()=>{
        const todo = {
            title:title,
            desc:desc,
            id: "",
            completed: false
        };
        dispatch(addTodo(todo));
        setTitle("");
        setDesc("");
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Add a todo</h1>
            <form className="flex flex-col gap-4">
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="py-3 px-4 rounded-md border focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-slate-400 placeholder:italic" placeholder="Todo title"/>
                <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className="py-3 px-4 rounded-md border focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-slate-400 placeholder:italic" placeholder="Describe your todo" />
                <button type="button" className="py-3 px-4 rounded-md bg-secondary-900 hover:bg-secondary-700 max-w-xs text-white text-sm" onClick={()=>handleSubmit()}>Add todo</button>
            </form>
        </div>
    );
};