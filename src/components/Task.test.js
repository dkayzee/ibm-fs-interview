import React from "react";
import { mount, shallow } from "enzyme";
import Task from "./Task";

describe("Task", () => {
  //new task form initial render
  it("renders without crashing", () => {
    shallow(
      // <Task
      //   name="Homework"
      //   desc="College Assignment 101"
      //   dueDate="2020-09-15"
      //   id={0}
      //   completed={true}
      // />
      <Task />
    );
  });

  it("has strikethrough for completed task", () => {
    const component = mount(
      <Task
        name="Homework"
        desc="College Assignment 101"
        dueDate="2020-09-15"
        id={0}
        completed={true}
      />
    );
    expect(component.find("div.taskNameContainer").html()).toContain(
      "<del>Homework</del>"
    );
  });

  it("does NOT have strikethrough for incompleted task", () => {
    const component = mount(
      <Task
        name="Homework"
        desc="College Assignment 101"
        dueDate="2020-09-15"
        id={0}
        completed={false}
      />
    );
    expect(component.find("div.taskNameContainer").html()).not.toContain(
      "<del>Homework</del>"
    );
  });

  // it("triggers state change when openning description dialog", () => {
  //   // const btnClick = jest.spyOn(Task.prototype, "open");
  //   const component = mount(
  //     <Task
  //       name="Homework"
  //       desc="College Assignment 101"
  //       dueDate="2020-09-15"
  //       id={0}
  //       completed={false}
  //     />
  //   );
  //   component.find("button.btn-desc-dialog").simulate("click");
  //   expect(component.find("div.task-desc-dialog").prop("open")).toBe(true);
  // });
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
