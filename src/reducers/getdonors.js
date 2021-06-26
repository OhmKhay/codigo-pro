import { GET_ALL_DONORS } from '../actions/actionTypes';

const initialState = {
    donors: [],
    loading: true
};
export const getdonors = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DONORS:
      return {
          ...state,
          donors: payload,
          loading: false
      };
  
    default:
      return state;
  }
}
