import React from 'react';
import { useContext, useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Modal from '../modal';

import { PatientsContext } from "../../reducer";
import { setNewPatientModal } from "../../actions";
import { fields } from './textfields'
import { validateField } from './validation';

const NewPatientModal = () => {
    const { dispatch, state } = useContext(PatientsContext);
    const { openNewPatientModal } = state;

    const [textFields, setTextFields] = useState(fields);

    const [formState, setFormState] = useState({
        validForm: false,
        hasName: false,
        hasEmail: false,
        hasDescription: false,
    })

    useEffect(() => {
        const hasErrors = textFields.some((item) => item.error);
        const hasName = textFields[0].value;
        const hasEmail = textFields[1].value;
        const hasDescription = textFields[2].value;

        setFormState({
            validForm: !hasErrors && hasName && hasEmail,
            hasName,
            hasEmail,
            hasDescription,
        })
    }, [textFields]);

    const handleClose = () => setNewPatientModal({ dispatch, payload: false });

    const saveChanges = async () => {
        // const response = await PatientsService.addNewPatient({ someId, textFields })
        // setCreateActionState({ dispatch, payload: Math.floor(Math.random() * 2)})
        handleClose();
    };

    const onChangeTextField = (index, value) => {
        const newTextFields = [...textFields];
        newTextFields[index].value = value;
        
        setTextFields(newTextFields);
    };

    const onBlurHandler = (index) => {
        const newTextFields = [...textFields];
        newTextFields[index] = validateField(newTextFields[index]);
        setTextFields(newTextFields);
    };

    const actionButtons = [
        {
            key: 1,
            disabled: !formState.validForm,
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
            open={openNewPatientModal}
            modalTitle="New Patient"
            modalSubtitle="Personal Data"
            handleClose={handleClose}
        >
            {textFields.map((item, index) => {
                return (
                    <div className='container-field' key={item.key}>
                        <TextField
                            className='textfield'
                            disabled={item.disabled}
                            error={item.error}
                            helperText={item.error}
                            id={item.key}
                            label={item.label}
                            onChange={(e) => onChangeTextField(index, e.target.value)}
                            onBlur={() => onBlurHandler(index)}
                            value={item.text}
                        />
                    </div>
                )
            })}
        </Modal>
    );
};

export default NewPatientModal;
