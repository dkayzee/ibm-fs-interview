import React, { useState } from "react";
import { ListItem, Typography, Button, Grid, Divider } from "@material-ui/core";
import {
  Info as InfoIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionDialog from "./DescriptionDialog";
import { removeTask, completeTask } from "../services/processTask";

const useStyles = makeStyles({
  root: (props) => {
    const diff = Date.parse(props.dueDate) / 3600000 - Date.now() / 3600000;
    if (diff <= 23 && diff >= -23 && !props.complete)
      return { backgroundColor: "orange" };
    else if (diff <= -23 && !props.complete) return { backgroundColor: "red" };
  },
});

const Task = ({ name, desc, dueDate, id, setNewItem, completed }) => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(completed);
  const classes = useStyles({ dueDate, complete });

  const handleInfoOpen = () => {
    setOpen(true);
  };

  const handleInfoClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ListItem className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={9} className="taskNameContainer">
            {/* depending on the completion, typography has a strikethrough */}
            {completed ? (
              <Typography>
                <del>{name}</del>
              </Typography>
            ) : (
              <Typography>{name}</Typography>
            )}
            {completed ? (
              <Typography>
                <del>{dueDate}</del>
              </Typography>
            ) : (
              <Typography>{dueDate}</Typography>
            )}
          </Grid>
          <Grid item xs={3}>
            <Grid container justify="center">
              <Button
                variant="contained"
                size="small"
                className="btn-desc-dialog"
                onClick={handleInfoOpen}
              >
                <InfoIcon />
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  completeTask(id);
                  setComplete(true);
                  setNewItem(true);
                }}
              >
                <DoneIcon />
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  removeTask(id);
                  setNewItem(true);
                }}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
          <DescriptionDialog
            name={name}
            dueDate={dueDate}
            desc={desc}
            open={open}
            handleClose={handleInfoClose}
          />
        </Grid>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
};

export default Task;
