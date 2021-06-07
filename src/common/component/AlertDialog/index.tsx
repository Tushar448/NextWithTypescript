import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface Content {
  closeButton?: string;
  dialogContent?: React.ReactNode | string;
  dialogTitle?: string;
  confirmButton?: string;
}
export interface AlertDialogProps {
  open: boolean;
  onClose?: () => void;
  handleConfirm?: () => void;
  showConfirmButton?: boolean;
  content?: Content;
}
export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onClose,
  content,
  handleConfirm,
  showConfirmButton,
}) => {
  const { closeButton, dialogContent, dialogTitle, confirmButton } =
    content || {};
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {showConfirmButton && (
          <Button
            onClick={handleConfirm}
            variant='text'
            color='primary'
            autoFocus
          >
            {confirmButton}
          </Button>
        )}
        <Button
          onClick={onClose}
          variant={showConfirmButton ? 'outlined' : 'contained'}
          color={showConfirmButton ? undefined : 'primary'}
        >
          {closeButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
