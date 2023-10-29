import React from "react";
import { useContext, useState, useEffect } from "react";
import './index.css';
import InfoCard from "../../../components/info-card";
import { PatientsContext } from "../../../reducer";
import CustomModal from "../../../components/modal";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Results = () => {
    const { state } = useContext(PatientsContext);
    const { patientsData, modalData, updateState } = state;
    const [open, setOpen] = useState(null);

    const onCloseHandler = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(updateState !== null ? true : false);
    }, [updateState]);

    const alertText = updateState ? 'Successfully updated!' : 'There was an error while trying to update the information';

    return (
        <div className="results">
            {modalData && <CustomModal />}
            {patientsData.map((item) => (<InfoCard key={item.id} data={item} />))}
            <Snackbar open={open} autoHideDuration={6000} onClose={onCloseHandler}>
                <Alert
                    severity={updateState ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                    onClose={onCloseHandler}
                >
                    {alertText}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Results;