import fetch from 'isomorphic-fetch';

import {INCREASE,DECREASE,REQUEST_TYPE,RECEIVE_TYPE,PLEASE_EAT_REQUEST,PLEASE_EAT_RECEIVE } from '../constants/ActionTypes';


//Action 只是描述了有事情发生了这一事实
const pleaseEatRequest=text=>({
  type:PLEASE_EAT_REQUEST,
  text
})

const pleaseEatReceive=(text,json)=>({
  type:PLEASE_EAT_RECEIVE,
  text,
  data:json
})


function fetchPosts(text) {
  return dispatch => {
    dispatch(pleaseEatRequest(text));
    
    // return fetch(`http://www.reddit.com/r/reactjs.json`)
    //   .then(response => response.json())
    //   .then(json => dispatch(pleaseEatReceive(text, json)))

      setTimeout(function() {
        dispatch(pleaseEatReceive('SUCCESS', {
            eatTypes:"请吃饭",
            drinkTypes:"请喝酒",
            eatData:["酒店","饭店","大排档"]
          }));
      }, 1000);
    

  }
}



export function fetchTypes(text){
  return (dispatch, getState) => {

    return dispatch(fetchPosts(text));
    
  }
}

