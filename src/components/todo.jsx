import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { useState, useEffect } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const inputChange = (e) => setInput(e.target.value);

  const addTodo = () => {
    if (input === "") {
      return;
    } else {
      setTodos((todos) => [
        ...todos,
        {
          id: crypto.randomUUID(),
          text: input,
          isDone: false,
          createdAt: String(new Date()).split(" GMT")[0],
        },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const changeIsDone = (id, completed) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: completed };
        }
        return todo;
      })
    );
  };

  const changeText = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container-md mt-3 todo">
      <h1 className="text-center">Todo List</h1>
      <TodoForm
        input={input}
        inputChange={inputChange}
        todos={todos}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        changeIsDone={changeIsDone}
        changeText={changeText}
      />
    </div>
  );
}

export default Todo;
