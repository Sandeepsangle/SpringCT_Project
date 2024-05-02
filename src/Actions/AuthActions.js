
import { jsonKeeperAPI , springcturlAPI } from '../Services/Api/Auth';
import { asyncKeys } from '../config';
import ActionTypes from '../utility/ActionTypes';
import { setAsyncValue } from '../utility/Common';

const fetchjsonkeeperRequest = () => ({
  type: ActionTypes.jsonkeeper.FETCH_REQUEST,
});

const fetchjsonkeeperSuccess = data => ({
  type: ActionTypes.jsonkeeper.FETCH_SUCCESS,
  payload: data,
});
const fetchjsonkeeperFailure = error => ({
  type: ActionTypes.jsonkeeper.FETCH_FAILURE,
  payload: error,
});
const fetchspringcturlRequest = () => ({
  type: ActionTypes.springcturl.FETCH_REQUEST,
});

const fetchspringcturlSuccess = data => ({
  type: ActionTypes.springcturl.FETCH_SUCCESS,
  payload: data,
});
const fetchspringcturlFailure = error => ({
  type: ActionTypes.springcturl.FETCH_FAILURE,
  payload: error,
});
export const fetchjsonkeeperData = () => async dispatch => {
  dispatch(fetchjsonkeeperRequest());
  // const payloadVal = await getAsyncValue(asyncKeys.payloadData);

  // await jsonKeeperAPI({payloadVal})  if you want to send payload
  await jsonKeeperAPI()
    .then(result => {
      const resultdata = result.data[0]; // always ask response from api in {"message": "success","data": [{ key: value}],"status": 200}
      dispatch(fetchjsonkeeperSuccess(resultdata));
    })
    .catch(error => {
      dispatch(fetchjsonkeeperFailure('Failed to fetch login'));
    });
};

export const fetchspringcturlData = payload => async dispatch => {
  dispatch(fetchspringcturlRequest());
  // const payloadVal = await getAsyncValue(asyncKeys.payloadData);

  // await springcturlAPI({payloadVal})  if you want to send payload 
  await springcturlAPI(payload)
    .then(async result => {
      console.log("result in springcturlAPI", result.data, typeof result.status)
      if(result.status == 200){
        await setAsyncValue(asyncKeys.isLoggedIn, true)
        const resultdata = result.data; 
        dispatch(fetchspringcturlSuccess(resultdata));
      }
      else{
        await setAsyncValue(asyncKeys.isLoggedIn, false)
      }
      
    })
    .catch(error => {
      console.log("error in springcturlAPI",error)
      dispatch(fetchspringcturlFailure('Failed to fetch login'));
    });
};
