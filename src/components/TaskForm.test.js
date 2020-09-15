import React from "react";
import ReactDOM from "react-dom";
import TaskForm from "./TaskForm";

//new task form initial render
test("TaskForm should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TaskForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//new task state updates with onchange
// test("TaskForm update state", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<TaskForm />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//new task submission creates a new div
