import { 
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    
} from '../actions/actions'


export const initialState = {
    smurfs: [],
    test: 'Smurfs',
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                error: 'Something went wrong...Try again',

            };

        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                smurfs: action.payload
            };

        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: 'Failed to Load',
            };

        default:
            return state;
    }
}