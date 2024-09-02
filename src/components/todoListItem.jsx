import { useState } from "react";

function TodoListItem({
  id,
  text,
  removeTodo,
  changeIsDone,
  isDone,
  createdAt,
  onChange,
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
          <div>
            <input
              type="text"
              value={editText}
              onChange={handleTextChange}
              style={{ border: "none", width: "300px" }}
            />
            <br />
            <span className="text-black-50">{createdAt}</span>
          </div>
        )}
        <div className="inner-todo-div">
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
          />
        </div>
      </li>
    </div>
  );
}

export default TodoListItem;
