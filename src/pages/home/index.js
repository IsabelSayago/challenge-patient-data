import React from 'react';
import { useReducer } from 'react';
import './index.css';
import Search from '../containers/search';
import Results from '../containers/results';
import { PatientsContext, initialState, reducer } from '../../reducer';

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;

  console.log('loading', loading);

  return (
    <PatientsContext.Provider value={{ state, dispatch }}>
      <div className="home">
        <Search />
        {loading === false &&
          <Results />
        }
      </div>
    </PatientsContext.Provider>
  );
}

export default Home;
