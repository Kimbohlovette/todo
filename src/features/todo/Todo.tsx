import React from "react";
import { TodoType } from "../../types";

export function Todo(props: {todo: TodoType}) {
    return (
        <div className="py-4 text-slate-600">
            <h1 className="text-slate-800 font-medium text-lg">{props.todo.title}</h1>
            <p className="text-sm">{props.todo.desc}</p>
        </div>
    );
}

export default Todo;