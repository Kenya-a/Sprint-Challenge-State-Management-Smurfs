import {FETCH_SMURF_DATA} from '../actions/actions'


export const initialState = {
    smurfs: [],
    test: 'Smurfs',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA:

            return {
                ...state,
            };

        default:
            return state;
    }
}