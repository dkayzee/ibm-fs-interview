// const mockStore = require("./mockDataStore.js");
import mockStore from "./mockDataStore.js";
const processTask = require("./processTask.js");

test("canary test", () => {
  expect(true).toBe(true);
});

test("something", () => {
  const task = {
    name: "something",
    description: "something",
    dueDate: "2020-09-15",
  };
  processTask(task);
  expect(mockStore.length).toBe(1);
});
