import fetch from 'isomorphic-fetch';

import {INCREASE,DECREASE,REQUEST_TYPE,RECEIVE_TYPE,PLEASE_EAT_REQUEST,PLEASE_EAT_RECEIVE } from '../constants/ActionTypes';


//Action 只是描述了有事情发生了这一事实
export const increase = text => ({
  type: INCREASE,
  text
})

export const decrease = text => ({
  type: DECREASE,
  text
})

function pleaseEatRequest(text){
    return {
        type:PLEASE_EAT_REQUEST,
        text
    }
}

function pleaseEatReceive(text,json){
    return {
        type:PLEASE_EAT_RECEIVE,
        text,
        data:json
    }
}

export function fetchEatPosts(text){
    return ()=>{
        pleaseEatRequest(text);
        return fetch(`http://www.reddit.com/r/reactjs.json`)
            .then(response => response.json())
            .then(json => pleaseEatReceive(text, json))
    }
        
}



export const pleaseDrink=text=>({
  type:PLEASE_DRINK,
  text
})



function requestPosts(text) {
  return {
    type: REQUEST_TYPE,
    text
  }
}

function receivePosts(text, json) {
  return {
    type: RECEIVE_TYPE,
    text,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(text) {
  return dispatch => {
    dispatch(requestPosts(text))
    return fetch(`http://www.reddit.com/r/${text}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(text, json)))
  }
}

function shouldFetchPosts(state, text) {
  const posts = state.postsBySubreddit[text]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

 function fetchPostsIfNeeded(text) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), text)) {
      return dispatch(fetchPosts(text))
    }
  }
}