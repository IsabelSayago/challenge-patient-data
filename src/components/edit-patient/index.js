import React from 'react';
import { useContext, useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create'
import Undo from "@mui/icons-material/Undo";

import { PatientsContext } from "../../reducer";
import { setModalData, setSnackbarState } from "../../actions";
import Modal from '../modal';
import { validateField } from './validation';

const EditPatientModal = () => {
    const { dispatch, state } = useContext(PatientsContext);
    const { modalData } = state;

    const [textFields, setTextFields] = useState(Object.keys(modalData).map(value => ({
        key: value,
        disabled: true,
        value: modalData[value],
        label: value.substring(0, 1).toUpperCase() + value.substring(1),
        error: '',
    })))

    const [formState, setFormState] = useState({
        hasChanges: false,
        hasTextFieldsChanged: false,
    })

    useEffect(() => {

        const hasErrors = textFields.some((item) => item.error);
        const hasTextFieldsChanged = textFields.some((item) => item.value !== modalData[item.key])
        const hasChanges = !hasErrors && hasTextFieldsChanged;

        setFormState({
            hasChanges,
            hasTextFieldsChanged,
        })
    }, [textFields]);

    const handleClose = () => setModalData({ dispatch, payload: null });

    const saveChanges = async () => {
        // const response = await PatientsService.updatePatientData({ id, textFields })
        const randomState = Math.floor(Math.random() * 2);
        const message = randomState ? 'Successfully edited!' : 'Error while trying to edit the patient';
        setSnackbarState({ dispatch, payload: { state: randomState, message: message }});
        handleClose();
    };

    const onClickIconEdit = (index) => {
        const newTextFields = [...textFields];
        newTextFields[index].disabled = !newTextFields[index].disabled;

        if (newTextFields[index].disabled) {
            newTextFields[index].value = modalData[newTextFields[index].key];
            newTextFields[index].error = '';
        }

        setTextFields(newTextFields);
    };

    const onChangeTextField = (index, value) => {
        const newTextFields = [...textFields];
        newTextFields[index].value = value;
        newTextFields[index] = validateField(newTextFields[index]);
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
        <Modal
            actionButtons={actionButtons}
            open={modalData}
            modalTitle={modalData.name}
            modalSubtitle={modalData.website}
            handleClose={handleClose}
        >
            {textFields.map((item, index) => (
                <div className='container-field' key={index}>
                    <TextField
                        disabled={item.disabled}
                        error={item.error}
                        helperText={item.error}
                        className='textfield'
                        id="mail"
                        label={item.label}
                        onChange={(e) => onChangeTextField(index, e.target.value)}
                        value={item.value}
                    />
                    <button className='icon-edit' onClick={() => onClickIconEdit(index)}>

                        {item.disabled ? <Create /> : <Undo />}
                    </button>

                </div>
            ))}
        </Modal>
    );
};

export default EditPatientModal;
