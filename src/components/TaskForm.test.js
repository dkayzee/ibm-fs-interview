import React from "react";
import { shallow, mount } from "enzyme";
import TaskForm from "./TaskForm";

//new task form initial render
describe("TaskForm", () => {
  it("renders without crashing", () => {
    shallow(<TaskForm />);
  });

  it("changes state on value change", () => {
    const component = mount(<TaskForm />);
    component
      .find("input#name")
      .simulate("change", { target: { name: "name", value: "Do Homework" } });
    component.find("input#desc").simulate("change", {
      target: { name: "desc", value: "College Assignment 101" },
    });
    component
      .find("input#date")
      .simulate("change", { target: { name: "dueDate", value: "2020-09-17" } });
    expect(component.find("input#name").prop("value")).toEqual("Do Homework");
    expect(component.find("input#desc").prop("value")).toEqual(
      "College Assignment 101"
    );
    expect(component.find("input#date").prop("value")).toEqual("2020-09-17");
  });

  it("data should be submitted", () => {
    const fnClick = jest.fn();
    const component = mount(<TaskForm setNewItem={fnClick} />);
    component.find("button#newTaskButton").simulate("click");
    expect(fnClick).toHaveBeenCalled();
  });
});
