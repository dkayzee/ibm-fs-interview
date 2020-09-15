import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { addTask, storeLength } from "../services/processTask";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));

const TaskForm = ({ setNewItem }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name, desc, dueDate, id: storeLength(), completed: false });
    setNewItem(true);
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="name"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="desc"
        label="Description"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        onClick={(e) => handleSubmit(e)}
        id="newTaskButton"
      >
        Submit
      </Button>
    </form>
  );
};

export default TaskForm;
