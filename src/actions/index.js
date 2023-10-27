export const setLoading = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_LOADING', payload })
};

export const setPatientsData = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_PATIENTS_DATA', payload })
};