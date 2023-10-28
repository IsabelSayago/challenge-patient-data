import React from "react";
import { useContext } from "react";
import './index.css';
import InfoCard from "../../../components/info-card";
import { PatientsContext } from "../../../reducer";
import CustomModal from "../../../components/modal";

const Results = () => {
    const { state } = useContext(PatientsContext);
    const { patientsData, modalData } = state;

    console.log('patientsData', patientsData);

    return (
    <div className="results">
        {modalData && <CustomModal />}
        {patientsData.map((item) => (<InfoCard key={item.id} data={item} />) )}
    </div>
    );
};

export default Results;