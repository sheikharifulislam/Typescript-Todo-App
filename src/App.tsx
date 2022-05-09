import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./model.js";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodtos] = useState<Todo[]>([]);

    return (
        <div className="App">
            <h1 className="heading">Taskify</h1>
            <InputField todo={todo} setTodo={setTodo} />
        </div>
    );
};

export default App;
