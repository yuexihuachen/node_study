import {INCREASE,DECREASE,REQUEST_TYPE,RECEIVE_TYPE,PLEASE_EAT_REQUEST,PLEASE_EAT_RECEIVE} from '../constants/ActionTypes';

var initFun=function(){};
const initData={
            eatTypes:"请吃饭",
            drinkTypes:"请喝酒"
          };


function eatRequest(state, action){
    switch (action.type) {
      case PLEASE_EAT_REQUEST:
        return Object.assign({
          eatData:[]
        }, state);
      default:
        return state
    }
}


export default (state=initData, action) => {
  switch (action.type) {
    case PLEASE_EAT_REQUEST:
      return eatRequest(state,action);
    case PLEASE_EAT_RECEIVE:
      return action.data;
    default:
      return state;
  }
}



