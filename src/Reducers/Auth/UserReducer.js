import { useDispatch } from "react-redux";
import { setisLogin } from "../../RootReducer/slice";
import ActionTypes from "../../utility/ActionTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
export function jsonkeeperReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.jsonkeeper.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.jsonkeeper.FETCH_SUCCESS:
      // console.log('actiontype', action.type, action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.jsonkeeper.FETCH_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export function springcturlReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.springcturl.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.springcturl.FETCH_SUCCESS:
      // console.log('actiontype', action.type, action.payload);
      // dispatch(setisLogin(true))
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.springcturl.FETCH_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
