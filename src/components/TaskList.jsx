import React from "react";
import { List } from "@material-ui/core";
import Task from "./Task";
import mockStore from "../../mockDataStore";

const TaskList = ({ setNewItem }) => {
  return (
    // Toggle that will ask to display completed items or not
    <List>
      {mockStore.map((each, index) => (
        <Task
          name={each.name}
          desc={each.desc}
          dueDate={each.dueDate}
          id={each.id}
          key={each.id}
          completed={each.completed}
          setNewItem={setNewItem}
        />
      ))}
    </List>
  );
};

export default TaskList;
