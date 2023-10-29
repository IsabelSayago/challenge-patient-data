import React from "react";
import { useContext } from "react";
import TextField from '@mui/material/TextField';

import './index.css';
import SearchIcon from "@mui/icons-material/Search";

import { PatientsContext } from "../../../reducer";
import { setLoading, setPatientsData } from "../../../actions";
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
            <TextField className="search-textfield" fullWidth id="standard-basic" label="Search by name or email..." variant="standard" onKeyDown={onKeyDownSearch} />
            <button className="search-button" onClick={onClickSearchButton}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default Search;