import React from "react";
import { mount } from "enzyme";
import Task from "./Task";

describe("Task", () => {
  //new task form initial render
  it("renders without crashing", () => {
    mount(
      <Task
        name="Homework"
        desc="College Assignment 101"
        dueDate="2020-09-15"
        id={0}
        completed={true}
      />
    );
  });

  // //new task submission creates a new div
  // it("matches snapshot", () => {
  //   const component = renderer
  //     .create(
  //       <Task
  //         name="Homework"
  //         desc="College Assignment 101"
  //         dueDate="2020-09-15"
  //         id={0}
  //         completed={true}
  //       />
  //     )
  //     .toJSON();
  //   expect(component).toMatchSnapshot();
  // });

  //more info

  //delete task

  //complete task
});
