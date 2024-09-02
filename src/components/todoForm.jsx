function TodoForm({ input, inputChange, addTodo }) {
  const checkForEnter = (e) => {
    if (e.target.value === "") {
      return;
    }

    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container-md mt-3 todo">
      <div className="row form">
        <div className="input-group mb-3">
          <span className="input-group-text">I Need To</span>
          <input
            onKeyDown={(e) => checkForEnter(e)}
            type="text"
            className="form-control"
            placeholder="Buy Milk"
            value={input}
            onChange={inputChange}
          />
          <button className="btn btn-primary" type="button" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
