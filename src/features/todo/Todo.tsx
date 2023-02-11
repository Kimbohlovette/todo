import React from "react";
import { TodoType } from "../../types";

export function Todo(props: {todo: TodoType}) {
    return (
        <div className="py-4 text-slate-600">
            <h1 className="text-slate-800 font-semibold">{props.todo.title}</h1>
            <p className="text-sm italic text-ellipsis">{props.todo.desc}</p>
            <span className="block text-xs text-slate-600 py-2 px-4 rounded-full bg-secondary-100 w-fit my-2">{props.todo.completed?"Completed":"Not completed"}</span>
        </div>
    );
}

export default Todo;