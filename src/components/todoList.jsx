import GoToTheBeach from "./goToTheBeach";
import TodoListItem from "./todoListItem";

function TodoList({ todos, removeTodo, changeIsDone, changeText }) {
  const sortedTodos = [...todos].sort((a, b) => (a.isDone > b.isDone ? 1 : -1));

  return (
    <div className="list">
      <div className="d-flex justify-content-between">
        <div className="status">
          {todos.length === 0
            ? null
            : `Number of Todos: ${todos.filter((todo) => todo.isDone).length}/${
                todos.length
              }`}
        </div>
        <span className="text-danger error-text-animation">{}</span>
      </div>

      <div className="items mt-3">
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
