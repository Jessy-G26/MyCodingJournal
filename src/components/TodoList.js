import React from "react";
import Todo from "./Todo";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="my-2 todolist__container">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {props.filteredTodoItem.map((data) => (
          <Todo
            setTodoItem={props.setTodoItem}
            todoItem={props.todoItem}
            data={data}
            key={data.id}
            id={data.id}
            date={data.date}
            todo={data.todo}
          />
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default TodoList;
