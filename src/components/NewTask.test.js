import React from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";

test("newTask should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});
