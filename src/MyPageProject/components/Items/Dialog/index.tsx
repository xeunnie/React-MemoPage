import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

// import { DialogContainer } from './style';

type StyledDialogProps = {
  text: string;
  onClickOpen: boolean;
  onClickClose: () => void;
  onClickSave: () => void;
};

export default function StyledDialog({ text, onClickOpen, onClickClose, onClickSave }: StyledDialogProps) {
  return (
    <Dialog open={onClickOpen} onClose={onClickClose}>
      <DialogTitle>{text}</DialogTitle>
      <DialogContent>
        <DialogContentText> Freely edit your text!</DialogContentText>
        <TextField autoFocus margin="dense" id="Todo" label="Todo Text" type="todo" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickClose}>Cancel</Button>
        <Button onClick={onClickSave}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
}
