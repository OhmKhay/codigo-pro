import { GET_DATA } from './actionTypes';
import { dataSet, worksData } from '../constants';
export const getData =  (keyword) => async dispatch => {
  
  
  try {

    let myData;
    if(keyword !== 'all') {
      myData = worksData.filter((data) => data.categories.find((data) => data.slug === keyword ) )
    } else {
      myData = worksData;
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