
import { useCategory } from "../context/category.context";

function TodoForm({ input, inputChange, addTodo }) {
  const {category, handleCategory } = useCategory()
  console.log(category)
  const checkForEnter = (e) => {
    if (e.target.value === "") {
      return;
    }

    if (e.key === "Enter") {
      addTodo();
      console.log(category)
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
        <div className="continaer d-flex flex-column justify-content-between" style={{width: "200px", height: "70px"}}> 
        <label htmlFor="">Category</label>
        <select className="form-select" aria-label="Default select example" value={category} onChange={(e) => handleCategory(e) }>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
