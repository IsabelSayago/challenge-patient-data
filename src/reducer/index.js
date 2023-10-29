import React from "react";

export const PatientsContext = React.createContext(null);

export const initialState = {
    loading: null,
    patientsData: null,
    modalData: null,
    updateState: null,
};

export const reducer = (state, { type, payload }) => {

    switch (type) {
        case 'SET_LOADING':
            return { ...state, loading: payload };
        case 'SET_PATIENTS_DATA':
            return { ...state, patientsData: payload };
        case 'SET_MODAL_DATA':
            return { ...state, modalData: payload };
        case 'SET_UPDATE_STATE':
            return { ...state, updateState: payload };
        default:
            break;
    }

};