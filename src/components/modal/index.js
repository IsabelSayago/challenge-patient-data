import React from 'react';
import { bool, string, shape, arrayOf, func, node } from 'prop-types';
import '../modal/index.css';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// MaterialUI
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Modal = (props) => {
  const { 
    actionButtons,
    open,
    modalTitle,
    modalSubtitle,
    handleClose,
    children,
 } = props;


  const onCloseHandler = () => handleClose();

  return (
    <div>
      <BootstrapDialog
        className='modal'
        onClose={onCloseHandler}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {modalTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onCloseHandler}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {modalSubtitle}
          </Typography>
          {children}
        </DialogContent>
        <DialogActions>
          {actionButtons.map((item) => {
            const { buttonText, key, ...restProps } = item;
            return (
              <Button key={key} autoFocus {...restProps} >
                {buttonText}
              </Button>
            );
          })}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

Modal.propTypes = {
    actionButtons: arrayOf(shape({})),
    open: bool,
    modalTitle: string,
    modalSubtitle: string,
    handleClose: func,
    children: node,
}

export default Modal;
