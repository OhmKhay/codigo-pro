import {     
    GET_DATA,
    RECEIVE_DATA
} from '../actions/actionTypes';
const INITIAL_STATE = {
    loading: false,
    data: []
}
export const data = (state = INITIAL_STATE, action) => {
 const { type, payload } = action;

    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload,
                loading: false
            };
        case RECEIVE_DATA:
            return {
                ...state,
                ...{
                    isLoading: false,
                    data: action.payload
                }
                
            };        
        default:
            return state;
    }
};

