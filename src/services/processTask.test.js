// const mockStore = require("./mockDataStore.js");
import mockStore from "../../mockDataStore.js";
import { addTask } from "./processTask.js";

test("process task succesfully", () => {
  const task = {
    name: "Take out the tash",
    description: "Tomorrow is trash pick-up date!",
    dueDate: "2020-09-15",
  };
  addTask(task);
  expect(mockStore.length).toBe(3);
});
