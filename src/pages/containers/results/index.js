import React from "react";
import { useContext } from "react";
import './index.css';
import InfoCard from "../../../components/info-card";
import { PatientsContext } from "../../../reducer";

const Results = () => {
    const { state } = useContext(PatientsContext);
    const { patientsData } = state;

    console.log('patientsData', patientsData);

    return (
    <div className="results">
        {patientsData.map((item) => (<InfoCard key={item.id} data={item} />) )}
    </div>
    );
};

export default Results;