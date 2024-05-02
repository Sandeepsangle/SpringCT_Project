import {combineReducers} from 'redux';
import {jsonkeeperReducer, springcturlReducer} from '../Reducers/Auth/UserReducer';

const appReducer = combineReducers({
  jsonkeeper: jsonkeeperReducer,
  springcturl : springcturlReducer
});

export const LogOut = ({navigation}) => (
  // {type: 'RESSET_STORE'}
  navigation.navigate('auth')
  

);

const rootReducer = (state, action) => {
  if (action.type === 'RESSET_STORE') {
    state = {}; // empty store on app logout
  }
  return appReducer(state, action);
};

export default rootReducer;
