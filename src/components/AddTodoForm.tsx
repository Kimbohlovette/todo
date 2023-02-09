import React from "react";
export const AddTodoForm = () =>{
    return (
        <div>
            <h1 className="text-2xl font-semibold my-5">Add a todo</h1>
            <form className="flex flex-col gap-4">
                <input type="text" className="py-3 px-4 rounded-md border focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-slate-400 placeholder:italic" placeholder="Todo title"/>
                <textarea className="py-3 px-4 rounded-md border focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-slate-400 placeholder:italic" placeholder="Describe your todo" />
            </form>
        </div>
    );
};