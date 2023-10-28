import React from "react";
import { useContext } from "react";
// import TextField from "../../../components/textfield";
import TextField from '@mui/material/TextField';

import './index.css';
// import Button from "../../../components/button";
import Button from '@mui/material/Button';

import { PatientsContext } from "../../../reducer";
import { setLoading, setPatientsData } from "../../../actions";
// import { useEffect, useState } from "react";
import { PatientsService } from "../../../services";

const Search = () => {
    const { dispatch } = useContext(PatientsContext);

    const onClickSearchButton = async () => {
        const response = await PatientsService.getAllPatients();
        setPatientsData({ dispatch, payload: response })
        setLoading({ dispatch, payload: false })
        console.log('response in component', response);
    };

    const onKeyDownSearch = (e) => {
        if (e.key === 'Enter') {
            onClickSearchButton();
        }
    };

    return (
        <div className="search">
            <TextField fullWidth id="standard-basic" label="Standard" variant="standard" onKeyDown={onKeyDownSearch} />
            <Button variant="text" onClick={onClickSearchButton}>Search</Button>

            {/* <Button  /> */}
        </div>
    );
};

export default Search;