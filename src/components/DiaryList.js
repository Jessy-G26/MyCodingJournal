import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Diary from "./Diary";
import "../styles/Todo.css";

const DiaryList = (props) => {
  return (
    <div className="my-2 todolist__container">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {props.filteredThoughtItem.map((data) => (
          <Diary
            setThoughtItem={props.setThoughtItem}
            thoughtItem={props.thoughtItem}
            data={data}
            key={data.id}
            id={data.id}
            date={data.date}
            text={data.text}
          />
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default DiaryList;
