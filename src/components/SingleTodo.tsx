import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model.js";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (_id: number) => {
        setTodos(
            todos.map((todo) =>
                todo._id === _id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (_id: number) => {
        setTodos(todos.filter((todo) => todo._id !== _id));
    };

    const handleEdit = (e: React.FormEvent, _id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo._id === _id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form
            className="todos_single"
            onSubmit={(e) => handleEdit(e, todo._id)}
        >
            {edit ? (
                <input
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos_single-text"
                />
            ) : todo.isDone ? (
                <s className="todos_single--text">{todo.todo}</s>
            ) : (
                <span className="todos_single--text">{todo.todo}</span>
            )}

            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo._id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo._id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
