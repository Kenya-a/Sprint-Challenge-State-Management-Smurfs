import axios from "axios";

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE'; 

export const submitButton = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURF_DATA_START});

        axios.get(`http://localhost:3333/smurfs`)

            .then(response => {
                console.log('Axios.get Response:', response.data)
                dispatch({type: FETCH_SMURF_DATA_SUCCESS, payload: response.data})

            })

            .catch(error => {
                console.log('Axios.get Response:', error)
                dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: error.response})

            });
    }
}