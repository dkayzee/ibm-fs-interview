// const mockStore = require("./mockDataStore.js");
import mockStore from "../../mockDataStore.js";
import processTask from "./processTask.js";

test("process task succesfully", () => {
  const task = {
    name: "Take out the tash",
    description: "Tomorrow is trash pick-up date!",
    dueDate: "2020-09-15",
  };
  processTask(task);
  expect(mockStore.length).toBe(3);
});
