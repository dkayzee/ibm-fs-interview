import React, { useState } from "react";
import {
  ListItem,
  Typography,
  Dialog,
  Button,
  Grid,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
} from "@material-ui/core";
import {
  Info as InfoIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { removeTask, completeTask } from "../services/processTask";

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => {
      const diff = Date.parse(props.dueDate) / 3600000 - Date.now() / 3600000;
      if (diff <= 23 && diff >= -23 && !props.completed) return "orange";
      else if (diff <= -23 && !props.completed) return "red";
    },
  },
});

const DescriptionDialog = ({ name, desc, dueDate, open, handleClose }) => {
  return (
    <Dialog fullWidth open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{desc}</DialogContentText>
        <DialogContentText>Due Date: {dueDate}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

const Task = ({ name, desc, dueDate, id, setNewItem, completed }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ dueDate, completed });

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
              <Button variant="contained" size="small" onClick={handleInfoOpen}>
                <InfoIcon />
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
