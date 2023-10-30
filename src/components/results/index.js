import React from "react";
import { useContext, useState, useEffect } from "react";
import './index.css';

import InfoCard from "../info-card";
import EditPatientModal from "../edit-patient";

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';

import { PatientsContext } from "../../reducer";

const Results = () => {
    const { state } = useContext(PatientsContext);
    const { patientsData, modalData, snackbarState, loading } = state;
    const [open, setOpen] = useState(null);

    const onCloseHandler = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(snackbarState.state !== null ? true : false);
    }, [snackbarState]);

    console.log('loading', loading);
    return (
        <div className="results">
            {modalData && <EditPatientModal />}
            {/* If no patient data is retrieved, show a message! */}
            {!loading && patientsData && patientsData.map((item) => (<InfoCard key={item.id} data={item} />))}
            {loading && <CircularProgress className="progress" />}

            <Snackbar open={open} autoHideDuration={6000} onClose={onCloseHandler}>
                <Alert
                    severity={snackbarState.state ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                    onClose={onCloseHandler}
                >
                    {snackbarState.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Results;