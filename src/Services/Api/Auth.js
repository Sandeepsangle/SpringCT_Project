import {Method} from '../../config';
import {BaseUrlRequest} from '../AxiosInstance/BaseUrlAxios';
import {TestEndPoint} from '../EndPoint';

export const jsonKeeperAPI = payload => {
  return new Promise(async (resolve, reject) => {
    try {
      // let response = await MgRequest(TestEndPoint().jsonkeeper, Method.POST, payload);  you can also send payload if needed
      let response = await BaseUrlRequest(
        TestEndPoint().jsonkeeper,
        Method.POST,
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const springcturlAPI = payload => {
  return new Promise(async (resolve, reject) => {
    try {
      // let response = await MgRequest(TestEndPoint().jsonkeeper, Method.POST, payload);  you can also send payload if needed
      let response = await BaseUrlRequest(
        TestEndPoint().springcturl,
        Method.POST,
        payload
      );
      
      resolve(response);
    } catch (error) {
      console.log("error in API", error)
      reject(error);
    }
  });
};
