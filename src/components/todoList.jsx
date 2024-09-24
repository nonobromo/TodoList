import { useState } from "react";
import GoToTheBeach from "./goToTheBeach";
import TodoListItem from "./todoListItem";

function TodoList({ todos, removeTodo, changeIsDone, changeText }) {
  
  const [todoCategory, setTodoCategory] = useState("all")
  const sortedTodos = [...todos].sort((a, b) => (a.isDone > b.isDone ? 1 : -1)).filter((todo) => todoCategory === "all" ? todo : todo.category === todoCategory);
  return (
    <div className="list">
      <div className="d-flex justify-content-between">
        <div className="status">
          {sortedTodos.length === 0
            ? null
            : `Number of Todos: ${sortedTodos.filter((todo) => todo.isDone).length}/${
                todos.length
              }`}
        </div>
        <span className="text-danger error-text-animation">{}</span>
      </div>

      <div className="items mt-3">
        {todos.length === 0 ? true : <div className="container">
              <div className="container w-50 mb-3">
              <label htmlFor="">Filter by:</label>
          <select className="form-select" value={todoCategory} onChange={(e) => setTodoCategory(e.target.value)}>
          <option value="all">All</option>
            <option value="Outside 🌆">Outside 🌆</option>
            <option value="Home 🏠">Home 🏠</option>
            <option value="Work 💼">Work 💼</option>
          </select>
              </div>
        </div>}
        <ul className="list-group">
          {todos.length === 0 ? (
            <GoToTheBeach />
          ) : (
            sortedTodos.map((todo) => {
              return (
                <TodoListItem
                  text={todo.text}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={removeTodo}
                  changeIsDone={changeIsDone}
                  isDone={todo.isDone}
                  createdAt={todo.createdAt}
                  onChange={(text) => changeText(todo.id, text)}
                  category={todo.category}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
