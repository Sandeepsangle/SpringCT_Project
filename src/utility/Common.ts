import AsyncStorage from '@react-native-async-storage/async-storage';
export const getAsyncValue = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setAsyncValue = async (key: string, value: any) => {
  let setVal = value;
  try {
    if (typeof setVal === 'boolean') {
      setVal = setVal.toString(); // async never store boolean value so we convert it to string or number
    }
    await AsyncStorage.setItem(key, setVal);
  } catch {
    return 'AsyncStorage set item issue';
  }
};

export const convertKBtoMB = (kb: number) => {
  const mb = kb / 1024 ** 2; // Divide by 1024 to convert from KB to MB
  return parseInt(mb.toFixed(2)); // Return the result rounded to 2 decimal places
};
