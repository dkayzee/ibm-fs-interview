import React, { useState } from "react";
import { ListItem, Typography, Dialog, Button } from "@material-ui/core";
import {
  Info as InfoIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

const DescriptionDialog = ({ desc, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography>{desc}</Typography>
    </Dialog>
  );
};

const Task = ({ name, desc, dueDate }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ListItem>
      <Typography>{name}</Typography>
      <Typography>{dueDate}</Typography>
      <Button variant="contained" size="small">
        <InfoIcon onClick={handleClickOpen} />
      </Button>
      <Button variant="contained" size="small">
        <DoneIcon />
      </Button>
      <Button variant="contained" size="small">
        <DeleteIcon />
      </Button>
      <DescriptionDialog desc={desc} open={open} handleClose={handleClose} />
    </ListItem>
  );
};

export default Task;
