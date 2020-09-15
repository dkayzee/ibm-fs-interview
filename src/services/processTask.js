// const mockStore = require("./mockDataStore.js");
import mockStore from "../../mockDataStore.js";

const addTask = (task) => {
  mockStore.push(task);
};

const removeTask = (id) => {
  // const temp = mockStore.filter((each) => each.id !== id);
  // original attempted to overwrite the array but unless to process
  for (let i = 0; i < mockStore.length; i++) {
    if (mockStore[i].id === id) {
      mockStore.splice(i, 1);
      i--;
    }
  }
};

const completeTask = (id) => {
  mockStore.map((each) => {
    id === each.id ? (each.completed = true) : null;
  });
};

const storeLength = () => mockStore.length;

export { addTask, removeTask, completeTask, storeLength };
