import React from "react";
import { List } from "@material-ui/core";
import PriorityTask from "./PriorityTask";

const PriorityTaskList = () => {
  return (
    <List>
      <PriorityTask
        name="take out the trash"
        desc="tomorrow is pickup day!"
        dueDate="2020-09-15"
      />
      <PriorityTask
        name="cut the lawn"
        desc="or there will be a fine"
        dueDate="2020-09-25"
      />
    </List>
  );
};

export default PriorityTaskList;
