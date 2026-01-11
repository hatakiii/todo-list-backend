"use client";

import { useState, useEffect } from "react";

export type TodosType = {
  id: string;
  title: string;
  isDone: boolean;
  isEditing: boolean;
};

const TodoPage = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [inputValue, setInputValue] = useState("");

  console.log("todos", todos);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) =>
        setTodos(
          data.map((t: any) => ({
            id: t._id,
            title: t.title,
            isDone: t.isDone,
            isEditing: false,
          }))
        )
      );
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = async () => {
    if (!inputValue.trim()) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: inputValue }),
    });

    const newTodo = await res.json();

    setTodos([
      {
        id: newTodo._id,
        title: newTodo.title,
        isDone: newTodo.isDone,
        isEditing: false,
      },
      ...todos,
    ]);
    setInputValue("");
  };

  const handleDelete = async (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
  };

  const handleEdit = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const handleSave = async (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, isEditing: false } : todo
      )
    );
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });
  };

  const handleToggle = async (id: string, isDone: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      )
    );
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !isDone }),
    });
  };
  return (
    <>
      <div>todoPage</div>
      <div>
        <input
          value={inputValue}
          type="text"
          placeholder="Add todo"
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>Add</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleToggle(todo.id, todo.isDone)}
            />

            {todo.isEditing ? (
              <input
                defaultValue={todo.title}
                onBlur={(e) => handleSave(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            )}

            {!todo.isEditing && (
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoPage;
