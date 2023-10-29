import React from 'react';
import { useContext, useState, useEffect } from 'react';
import './index.css';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'
import Undo from "@mui/icons-material/Undo";
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';


import { PatientsContext } from "../../reducer";
import { setModalData, setUpdateActionState } from "../../actions";

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
  console.log('modal', modalData);
  const [textFields, setTextFields] = useState(Object.keys(modalData).map(value => ({
    key: value,
    disabled: true,
    text: modalData[value],
  })))

  const [formState, setFormState] = useState({
    hasChanges: false,
    hasTextFieldsChanged: false,
  })

  useEffect(() => {

    const hasTextFieldsChanged = textFields.some((item) => item.text !== modalData[item.key])
    const hasChanges = hasTextFieldsChanged;
    setFormState({
      hasChanges,
      hasTextFieldsChanged,
    })
  }, [textFields]);

  const handleClose = () => setModalData({ dispatch, payload: null });

  const saveChanges = async () => {
    // const response = await PatientsService.updatePatientData({ id, textFields })
    setUpdateActionState({ dispatch, payload: Math.floor(Math.random() * 2)})
    handleClose();
  };

  const onClickIconEdit = (index) => {
    const newTextFields = [...textFields];
    newTextFields[index].disabled = !newTextFields[index].disabled;

    if (newTextFields[index].disabled) {
      newTextFields[index].text = modalData[newTextFields[index].key];
    }

    setTextFields(newTextFields);
  };

  const onChangeTextField = (index, value) => {
    const newTextFields = [...textFields];
    newTextFields[index].text = value;
    setTextFields(newTextFields);
  };

  const actionButtons = [
    {
      key: 1,
      disabled: !formState.hasChanges,
      onClick: saveChanges,
      buttonText: 'Save',
    },
    {
      key: 2,
      onClick: handleClose,
      buttonText: 'Cancel',
    }
  ];


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
            <div className='container-field' key={index}>
              <TextField
                disabled={item.disabled}
                className='textfield'
                id="mail"
                label="Required"
                onChange={(e) => onChangeTextField(index, e.target.value)}
                value={item.text}
              />
              <button className='icon-edit' onClick={() => onClickIconEdit(index)}>

                {item.disabled ? <Create /> : <Undo />}
              </button>

            </div>
          ))}
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

export default CustomModal;
