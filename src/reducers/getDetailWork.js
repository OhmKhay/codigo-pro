import {     
    GET_DETAIL_WORK
} from '../actions/actionTypes';
const INITIAL_STATE = {
    loading: false,
    work: []
}
export const work = (state = INITIAL_STATE, action) => {
 const { type, payload } = action;

    switch (type) {
        case GET_DETAIL_WORK:
            return {
                ...state,
                data: payload,
                loading: false
            };   
        default:
            return state;
    }
};

