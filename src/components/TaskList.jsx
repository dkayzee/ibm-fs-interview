import React from "react";
import { List } from "@material-ui/core";
import Task from "./Task";
import mockStore from "../../mockDataStore";

const TaskList = () => {
  return (
    <List>
      {mockStore.map((each, index) => (
        <Task
          name={each.name}
          desc={each.desc}
          dueDate={each.dueDate}
          key={index}
        />
      ))}
    </List>
  );
};

export default TaskList;
