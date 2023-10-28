import React from 'react';
import { useContext, useState } from 'react';
import './index.css';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';


import { PatientsContext } from "../../reducer";
import { setModalData } from "../../actions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CustomModal = () => {
  const { dispatch, state } = useContext(PatientsContext);
  const { modalData } = state;
  const [textFields, setTextFields] = useState(Object.keys(modalData).map(value => ({
    disabled: true,
    value: modalData[value],
  })))

  const handleClose = () => setModalData({ dispatch, payload: false });

  const onClickIconEdit = (index) => {
    const newTextFields = [...textFields];
    newTextFields[index].disabled = !newTextFields[index].disabled;
    console.log('newTextFields[index].disabled', newTextFields[index].disabled);
    setTextFields(newTextFields);
  };

  return (
    <div>
      <BootstrapDialog
        className='modal'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modalData}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {modalData.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
            {modalData.website}
          </Typography>
          {textFields.map((item, index) => (
            <div className='container-field' key={item.value}>
              <TextField
                disabled={item.disabled}
                className='textfield'
                id="mail"
                label="Required"
                defaultValue={`${item.value.toLowerCase().replace(' ', '')}@gmail.com`}
              />
              <button className='icon-edit' onClick={() => onClickIconEdit(index)}>
                <Create />
              </button>

            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default CustomModal;
