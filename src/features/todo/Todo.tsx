import React from "react";
import { TodoType } from "../../types";
import { MdFileDownloadDone } from "react-icons/md";
import { BsClock } from  "react-icons/bs";

export function Todo(props: {todo: TodoType}) {

    const date = new Date(props.todo.dateAdded);
    const formatted =  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return (
        <div className="py-4 text-slate-600">
            <h1 className="text-slate-800 font-semibold">{props.todo.title}</h1>
            <p className="text-sm italic text-ellipsis">{props.todo.desc}</p>
            { !props.todo.completed ?
                <span className="block text-slate-600 p-1 rounded-full bg-secondary-200 w-fit my-2">
                    <BsClock />
                </span>
            :
                <span className="block text-slate-600 py- p-1 rounded-full bg-green-500 w-fit my-2">
                    <MdFileDownloadDone className="text-white"/>
                </span>
            }
            <span className="text-sm tracking-wide">{formatted}</span>
        </div>
    );
}

export default Todo;