export const setLoading = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_LOADING', payload })
};

export const setPatientsData = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_PATIENTS_DATA', payload })
};

export const setModalData = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_MODAL_DATA', payload })
};


export const setUpdateActionState = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_UPDATE_STATE', payload })
};