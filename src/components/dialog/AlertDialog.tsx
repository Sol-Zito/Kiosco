import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

type dataDialog = {
  title: string;
  description: string;
  opc1: string;
  opc2: string;
  isOpen: boolean;
};
export default function AlertDialog({
  title,
  description,
  opc1,
  opc2,
  isOpen,
}: dataDialog) {
  const [open, setOpen] = useState(isOpen);
  let nav = useNavigate();

  const handleClickOpen = () => {
    // setOpen(true);
    setOpen(false);
    nav("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{opc1}</Button>
          <Button onClick={handleClickOpen} autoFocus>
            {opc2}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
