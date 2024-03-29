import React from 'react';
import { useReducer } from 'react';
import './index.css';
import Search from '../../components/search';
import Results from '../../components/results';
import { PatientsContext, initialState, reducer } from '../../reducer';
import Button from '@mui/material/Button';
import Add from "@mui/icons-material/Add";

import NewPatientModal from '../../components/new-patient';
import { setNewPatientModal } from "../../actions";

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openNewPatientModal } = state;

  const onClickHandler = () => {
    setNewPatientModal({ dispatch, payload: true });
  };

  return (
    <PatientsContext.Provider value={{ state, dispatch }}>
      <div className="home">
        <div className="actions-container">
          <Search />
          <Button className="button-add" variant="contained" onClick={onClickHandler}><Add /></Button>
        </div>

        {openNewPatientModal && <NewPatientModal />}
        
        <Results />
      </div>
    </PatientsContext.Provider>
  );
}

export default Home;
