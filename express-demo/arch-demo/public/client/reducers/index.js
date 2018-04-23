import { combineReducers } from 'redux';
import counter from './counter';

//reducer更新 state
const rootReducer = combineReducers({
  counter
})

export default rootReducer
