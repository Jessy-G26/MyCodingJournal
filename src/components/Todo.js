import React from "react";
import "../styles/Todo.css";

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodoItem(props.todoItem.filter((el) => el.id !== props.data.id));
  };

  const completeHandler = () => {
    props.setTodoItem(
      props.todoItem.map((item) => {
        if (item.id === props.data.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <div
      className={`todo__container p-3  ${
        props.data.completed ? "completed" : ""
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <p className="m-0">{props.date}</p>
          <p className="todo__content">{props.todo}</p>
        </div>

        <div className="">
          <button
            onClick={completeHandler}
            className="btn btn-success btn-sm mx-1"
          >
            <i className="fas fa-check"></i>
          </button>
          <button onClick={deleteHandler} className="btn btn-danger btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
