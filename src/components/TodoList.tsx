import React from "react";
import { Todo } from "../model.js";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos_heading">Active Tasks</span>
                {todos.map((todo) => (
                    <SingleTodo
                        key={todo._id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
            <div className="todos remove">
                <span className="todos_heading">Completed Tasks</span>
                {todos.map((todo) => (
                    <SingleTodo
                        key={todo._id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </div>
    );
};
