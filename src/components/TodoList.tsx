import React from "react";
import { TodoType } from "../types";
import { useAppSelector } from "../app/hooks";
import Todo from "../features/todo/Todo";

export function TodoList(): JSX.Element {
    const todos: TodoType[] = useAppSelector(state=>state.todo.todos);
    const sorted = todos.slice().sort( (a,b)=>{
        return (+(new Date(b.dateAdded)).getTime() - +(new Date(a.dateAdded).getTime()));
    });
    const formatedTodos = sorted.map((todo,key)=> <Todo key={key} todo={todo} />);
    return (<div>
        <h1 className="text-3xl font-semibold">Todo List</h1>
        <div className="flex flex-col divide-y max-w-max">
            {formatedTodos}
        </div>
    </div>);
    
}