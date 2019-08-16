
export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';

export const submitButton = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURF_DATA});
    }
}