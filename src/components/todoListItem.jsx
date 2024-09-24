import { useState } from "react";

function TodoListItem({
  id,
  text,
  removeTodo,
  changeIsDone,
  isDone,
  createdAt,
  onChange,
  category
}) {
  const [editText, setEditText] = useState(text);
  const handleTextChange = (e) => {
    setEditText(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className="d-flex justify-content-between">
      <li className="list-group-item d-flex justify-content-between align-items-start w-100">
        {isDone ? (
          <div>
            <span className="text-decoration-line-through">{text}</span>
            <br />
            <span className="text-decoration-line-through text-black-50">
              {createdAt}
            </span>
          </div>
        ) : (
          <div className="d-flex flex-column">
            {category === "none" ? null : <span className="bold">Category: <strong>{category}</strong></span>}
            <input
              type="text"
              value={editText}
              onChange={handleTextChange}
              style={{ border: "none", width: "200px" }}
            />
            <br />
            <span className="text-black-50">{createdAt}</span>
          </div>
        )}
        <div className="inner-todo-div gap-0">
          <span
            className="btn btn-sm btn-danger"
            onClick={() => removeTodo(id)}
          >
            <i className="bi bi-trash"></i>
          </span>
          <input
            type="checkbox"
            checked={isDone}
            onChange={(e) => changeIsDone(id, e.target.checked)}
            style={{ width: "20px" }}
          />
        </div>
      </li>
    </div>
  );
}

export default TodoListItem;
