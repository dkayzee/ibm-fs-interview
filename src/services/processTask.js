// const mockStore = require("./mockDataStore.js");
import mockStore from "../../mockDataStore.js";

const processTask = (task) => {
  mockStore.push(task);
};

export default processTask;
