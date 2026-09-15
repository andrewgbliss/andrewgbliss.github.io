"use client";

import { useState, ChangeEvent } from "react";

type Todo = {
  id: number;
  todo: String;
  completed: boolean;
};

const defaultTodos: Todo[] = [];

function Todo({
  todo,
  deleteTodo,
  toggleTodo,
}: {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        justifyContent: "between",
        width: "100%",
      }}
    >
      <p
        style={{
          minWidth: 100,
          textDecoration: todo.completed ? "line-through" : "",
        }}
      >
        {todo.todo}
      </p>
      <button onClick={() => toggleTodo()}>
        {todo.completed ? "✅" : "⬛"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

function TodoForm({ addTodo }: { addTodo: (todo: String) => void }) {
  const [text, setText] = useState("");
  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const isDisabled = !text.length;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <input
              type="text"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "#fff",
                color: "#000",
              }}
              value={text}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                backgroundColor: isDisabled ? "#000" : "#027",
                padding: 5,
                border: "1px solid white",
                borderRadius: 5,
              }}
              disabled={isDisabled}
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(defaultTodos);
  const addTodo = (todo: String) => {
    const newTodo = {
      id: todos.length,
      todo,
      completed: false,
    };
    console.log({ newTodo });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    console.log({ id });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    setTodos(newTodos);
  };
  const todoList = todos.map((todo, index) => {
    return (
      <li key={todo.id}>
        <Todo
          todo={todo}
          deleteTodo={(id) => deleteTodo(id)}
          toggleTodo={() => toggleTodo(index)}
        />
      </li>
    );
  });
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid",
        borderRadius: "8px",
        marginTop: "12px",
      }}
    >
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <ul style={{ listStyleType: "circle", padding: 12 }}>{todoList}</ul>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ padding: "32px" }}>
      <h1
        style={{
          marginBottom: "16px",
          fontSize: "32px",
        }}
      >
        Todos
      </h1>
      <main>
        <TodoList />
      </main>
    </div>
  );
}
