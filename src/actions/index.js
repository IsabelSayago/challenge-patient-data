export const setLoading = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_LOADING', payload })
};

export const setPatientsData = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_PATIENTS_DATA', payload })
};

export const setModalData = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_MODAL_DATA', payload })
};

export const setSnackbarState = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_SNACKBAR_STATE', payload })
};

export const setNewPatientModal = ({ dispatch, payload }) => {
    dispatch({ type: 'SET_NEW_PATIENT_MODAL', payload })
};