import React from "react";

export const PatientsContext = React.createContext(null);

export const initialState = {
    loading: null,
    modalData: null,
    openNewPatientModal: false,
    patientsData: null,
    snackbarState: { state: null, message: '' },
};

export const reducer = (state, { type, payload }) => {

    switch (type) {
        case 'SET_LOADING':
            return { ...state, loading: payload };
        case 'SET_PATIENTS_DATA':
            return { ...state, patientsData: payload };
        case 'SET_MODAL_DATA':
            return { ...state, modalData: payload };
        case 'SET_SNACKBAR_STATE':
            return { ...state, snackbarState: payload };
        case 'SET_NEW_PATIENT_MODAL':
            return { ...state, openNewPatientModal: payload };
        default:
            break;
    }

};