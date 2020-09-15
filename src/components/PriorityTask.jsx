import React from "react";
import { ListItem, Typography } from "@material-ui/core";

const PriorityTask = ({ name, desc, dueDate }) => {
  return (
    <ListItem>
      <Typography>{name}</Typography>
      <Typography>{desc}</Typography>
      <Typography>{dueDate}</Typography>
    </ListItem>
  );
};

export default PriorityTask;
