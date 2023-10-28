import React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { PatientsContext } from "../../reducer";
import { setModalData } from "../../actions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const CustomModal = () => {
  const { dispatch, state } = useContext(PatientsContext);
  const { modalData } = state;

  const handleClose = () => setModalData({ dispatch, payload: false});

  return (
    <div>
      <Modal
        open={modalData}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalData.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalData.website}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
