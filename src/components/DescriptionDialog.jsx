import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
} from "@material-ui/core";

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

export default DescriptionDialog;
