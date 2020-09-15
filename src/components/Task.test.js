import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task";

//new task form initial render
test("Task should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Task
      name="Homework"
      desc="College Assignment 101"
      dueDate="2020-09-15"
      id={0}
      completed={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

//more info

//delete task

//complete task
