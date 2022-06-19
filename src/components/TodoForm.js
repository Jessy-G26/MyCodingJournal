import React from "react";
import { useState } from "react";
import "../styles/TodoForm.css";

const TodoForm = (props) => {
  const [state, setState] = useState({
    id: 1,
    date: "",
    todo: "",
    completed: false,
  });

  const stateHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  function incrementId() {
    setState((prevState) => {
      return { ...prevState, id: prevState.id + 1 };
    });
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    incrementId();
    props.addTodoItem(state);
  };

  // const statusHandler = (e) => {
  //   props.setStatus(e.target.value);
  // };

  return (
    <form className="row g-3">
      <h4 className="text-center title">{props.Header.title}</h4>
      <div className="d-flex align-items-center">
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-start">
            <input
              type="text"
              className="form-control"
              hidden
              defaultValue={state.id}
            />
            <label htmlFor="date" className="form-label flex-fill">
              Date :
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              name="date"
              value={state.date}
              onChange={stateHandler}
            />
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="form-floating mb-3">
          <input
            type="text"
            id="floatingInput"
            className="form-control"
            name="todo"
            value={state.todo}
            onChange={stateHandler}
          />
          <label htmlFor="floatingInput">{props.Header.input}</label>
        </div>
      </div>

      {/* <div className="col-md-4">
        <select onChange={statusHandler} className="form-select">
          <option defaultValue="All">All</option>
          <option value="completed">Done</option>
          <option value="incompleted">Not yet done!</option>
        </select>
      </div> */}

      <div className="d-grid gap-2">
        <button onClick={sumbitHandler} className="btn btn-custom">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
