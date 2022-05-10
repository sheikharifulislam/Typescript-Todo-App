import React from "react";
import { Todo } from "../model.js";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <li key={todo._id}>{todo.todo}</li>
            ))}
        </div>
    );
};
