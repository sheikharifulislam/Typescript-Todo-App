import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
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
        <div className="App">
            <h1 className="heading">Taskify</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>
    );
};

export default App;
