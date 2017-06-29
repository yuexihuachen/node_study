import fetch from 'isomorphic-fetch';

import {INCREASE,DECREASE,REQUEST_TYPE,RECEIVE_TYPE,PLEASE_EAT_REQUEST,PLEASE_EAT_RECEIVE } from '../constants/ActionTypes';


//Action 只是描述了有事情发生了这一事实
pleaseEatRequest=text=>({
  type:PLEASE_EAT_REQUEST,
  text
})

pleaseEatReceive=(text,json)=>({
  type:PLEASE_EAT_RECEIVE,
  text,
  data:json
})

export function fetchEatPosts(text){
    return dispatch => {
      dispatch(pleaseEatRequest(text))
      return fetch(`http://www.reddit.com/r/${text}.json`)
        .then(response => response.json())
        .then(json => dispatch(pleaseEatReceive(text, json)))
    }
}

