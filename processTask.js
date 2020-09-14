// const mockStore = require("./mockDataStore.js");
import mockStore from "./mockDataStore.js";

const processTask = function (task) {
  mockStore.push(task);
};

module.exports = processTask;
