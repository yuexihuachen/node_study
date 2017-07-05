import { combineReducers } from 'redux';
import counter from './counter';
import init from './init';

//reducer更新 state
const rootReducer = combineReducers({
  counter,
  init
})

export default rootReducer
