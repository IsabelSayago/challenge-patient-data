const API_GET_PATIENTS = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';
const API_CREATE_PATIENT = '';

export class PatientsService {

    static getAllPatients = async () => {
        let resp = null;
        try {
            const response = await fetch(API_GET_PATIENTS, {
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error('Error while retrieving patients');
            }

            resp = await response.json();

            return resp;
        } catch (error) {
            console.error(error);
            
            return resp;
        }

    };

    static addNewPatient = async ({ data }) => {
        let resp = null;
        try {
            const response = await fetch(API_CREATE_PATIENT, {
                method: 'POST',
                body: data,
            });

            if (!response) {
                throw new Error('Error while creating the patient');
            }

            resp = await response.json();

            return resp;
        } catch (error) {
            return resp;
        }

    };

}