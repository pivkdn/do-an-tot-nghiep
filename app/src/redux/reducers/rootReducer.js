

import { combineReducers } from 'redux';
import loginReducer from "./login";
import orderReducer from './order'
export default combineReducers({
	loginReducer,
	orderReducer
});