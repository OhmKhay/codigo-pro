import { GET_DATA } from './actionTypes';
import { dataSet } from '../constants';
export const getData =  (keyword) => async dispatch => {
  
  
  try {

    let myData;
    if(keyword !== 'all') {
      myData = dataSet.filter((data) => data.keyword.find((data) => data === keyword ) )
    } else {
      myData = dataSet;
    }
    console.log("here is data and key:", myData, keyword)
    dispatch({
        type: GET_DATA,
        payload: myData
      });
  } catch (error) {
      console.log('here is get all donors:', error)
  }

};