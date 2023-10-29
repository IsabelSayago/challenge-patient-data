const API_PATIENTS = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';

export class PatientsService {

    static getAllPatients = async () => {
        try {
            const response = await fetch(API_PATIENTS, {
                method: 'GET'
            })

            console.log('response', response);
            if (!response) {
                throw new Error('Error while retrieving');
            }
            return response.json();
        } catch (error) {
            return null;
        }

    };

}