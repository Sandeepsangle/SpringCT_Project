import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './RootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middlewares = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   // preloadedState: undefined,
//   // devTools: true,
// });

// if (__DEV__) {
//     const createDebugger = require('redux-flipper').default;
//     middlewares.push(createDebugger());
//   }

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
});


export const persistor = persistStore(store);
