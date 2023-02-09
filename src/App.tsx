import React from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {

  return (
    <div className="p-8">
        <div className="py-5 w-full">
        <AddTodoForm />
        </div>
        <TodoList />
    </div>
  );
}

export default App;
