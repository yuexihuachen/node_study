import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";

import configureStore from './store/configureStore';
import Index from './components';
import { h, Component } from 'preact';

const rootEl = document.getElementById('root');

const store = configureStore;

const history = createHistory();
 
// Get the current location.
const location = history.location
 
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
  render(
    <Provider store={store}>
      <Index />
    </Provider>,
    rootEl
  )
})
 
// Use push, replace, and go to navigate around.
history.push('/', { some: 'state' })
 
// To stop listening, call the function returned from listen().
unlisten()
//react-redux 提供Provider组件，可以让容器组件拿到state。
//Provider在根组件外面包了一层，这样一来，根组件的所有子组件就默认都可以拿到state了。
//render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
//再次render()，只附加事件处理程序，从而拥有非常高性能的第一次加载体验。
// render(
//   <Provider store={store}>
//     <Index />
//   </Provider>,
//   rootEl
// )
