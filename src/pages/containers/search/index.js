import React from "react";
import { useContext } from "react";
import TextField from "../../../components/textfield";
import './index.css';
import Button from "../../../components/button";
import { PatientsContext } from "../../../reducer";
import { setLoading, setPatientsData } from "../../../actions";
// import { useEffect, useState } from "react";
import { PatientsService } from "../../../services";

const Search = () => {
    const { dispatch } = useContext(PatientsContext);

    console.log('prueba');

    const onClickSearchButton = async () => {
        const response = await PatientsService.getAllPatients();
        setPatientsData({ dispatch, payload: response })
        setLoading({ dispatch, payload: false })
        console.log('response in component', response);
    };

    return (
    <div className="search">
        <TextField />
        <Button onClick={onClickSearchButton} />
    </div>
    );
};

export default Search;