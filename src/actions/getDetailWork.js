import { GET_DETAIL_WORK } from './actionTypes';
import { dataSet } from '../constants';
export const getDetailWork =  (slug) => async dispatch => {
  
  
  try {

    let myData;
   
    const myData = dataSet?.filter((data) => {
        return data.slug === slug; 
    });

    dispatch({
        type: GET_DETAIL_WORK,
        payload: myData
      });
  } catch (error) {
      console.log('here eree:', error)
  }

};