import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { InputField } from "./components/InputField";
import "./components/styles.css";
import { TodoList } from "./components/TodoList";
import { Todo } from "./model.js";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([
                ...todos,
                { _id: Date.now(), todo: todo, isDone: false },
            ]);
            setTodo("");
        }
    };
    return (
        <DragDropContext>
            <div className="App">
                <h1 className="heading">Taskify</h1>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </DragDropContext>
    );
};

export default App;
