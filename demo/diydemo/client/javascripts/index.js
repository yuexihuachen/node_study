import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from '../reducers/index'
import Counter from '../components/MyComponent';
import basicview from '../res/scripts/basic/basicView';
import * as actions from '../actions/index'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const rootEl = document.getElementById('root');


const rende=()=>{
    render(
      <Counter  
      value={store.getState()}
      onIncrement={()=>{ store.dispatch(actions.toAdd('add')) }}
      onDecrement={()=>{store.dispatch(actions.toDec('dec'))}}
      />,
    rootEl
  )
}


rende()
store.subscribe(rende)