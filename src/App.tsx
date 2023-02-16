import React from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { useAppDispatch } from "./app/hooks";
import { fetchTodos } from "./features/todo/todoSlice";

function App() {
  const dispatch = useAppDispatch();

  dispatch(fetchTodos(dispatch));

  return (
    <div className="p-8 max-w-4xl">
        <div className="py-5 w-full flex flex-col lg:flex-row gap-x-16 gap-y-8">
            <AddTodoForm />
            <TodoList />
        </div>
    </div>
  );
}

export default App;
