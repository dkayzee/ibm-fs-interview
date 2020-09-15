import React, { useState } from "react";
import { ListItem, Typography, Dialog, Button, Grid } from "@material-ui/core";
import {
  Info as InfoIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { removeTask, completeTask } from "../services/processTask";

const DescriptionDialog = ({ desc, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography>{desc}</Typography>
    </Dialog>
  );
};

const Task = ({ name, desc, dueDate, id, setNewItem, completed }) => {
  const [open, setOpen] = useState(false);

  const handleInfoOpen = () => {
    setOpen(true);
  };

  const handleInfoClose = () => {
    setOpen(false);
  };

  return (
    <ListItem>
      <Grid container justify="space-between">
        <Grid item xs={9}>
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
            <Button variant="contained" size="small">
              <InfoIcon onClick={handleInfoOpen} />
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                completeTask(id);
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
          desc={desc}
          open={open}
          handleClose={handleInfoClose}
        />
      </Grid>
    </ListItem>
  );
};

export default Task;
