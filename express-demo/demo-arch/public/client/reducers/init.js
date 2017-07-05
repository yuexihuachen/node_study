import {INCREASE,DECREASE,REQUEST_TYPE,RECEIVE_TYPE,PLEASE_EAT_REQUEST,PLEASE_EAT_RECEIVE} from '../constants/ActionTypes';

var initFun=function(){};
const initData=["请吃饭","请喝酒"];


function eatRequest(state, action){
    switch (action.type) {
      case PLEASE_EAT_REQUEST:
        return Object.assign({}, state);
      default:
        return state
    }
}


export default (state=initData, action) => {
  switch (action.type) {
    case PLEASE_EAT_REQUEST:
      return eatRequest(state,action);
    case PLEASE_EAT_RECEIVE:
      return { };
    default:
      return state;
  }
}



