import axios from 'axios';

import { GET_ALL_DONORS } from './actionTypes';
export const getAllDonors =  () => async dispatch => {
  console.log("heres is axios:", process.env.GOOGLE_SHEET_API)
  try {
    const res = await axios.get(`${process.env.GOOGLE_SHEET_API}`);

    
    dispatch({
        type: GET_ALL_DONORS,
        payload: res.data,
      });

      console.log("here is res:", res)
  } catch (error) {
      console.log('here is get all donors:', error)
  }

};