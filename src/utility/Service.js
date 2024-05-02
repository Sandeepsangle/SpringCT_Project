import {asyncKeys} from '../config';
import {getAsyncValue} from './Common';

export const BaseUrlHeader = async () => {
  //   const cookie = userStore.cookie

  const token = await getAsyncValue(asyncKeys.HeaderToken); // when api needs token to be passed
  return {
    Authorization: `Bearer ${token}`,
  };
};
