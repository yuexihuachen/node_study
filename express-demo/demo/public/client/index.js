import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware,combineReducers,compose  } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import index from './reducers/index';
import Index from './containers';
import logger from 'redux-logger';

// import React from 'react';
// import { render } from 'react-dom';
// import { createStore,applyMiddleware,combineReducers,compose  } from 'redux'
// import { Provider } from 'react-redux'

//import  AppSettings  from '../../config/app.setting';

//创建store两者都可以

//一个应用了 middleware 后的 store enhancer。
//这个 store enhancer 就是一个函数，并且需要应用到 createStore。它会返回一个应用了 middleware 的新的 createStore。
let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

//是否使用combineReducers
//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
 //可以差分出去
 let reducer = combineReducers({index});
 let store = createStoreWithMiddleware(reducer);
 //let store = createStoreWithMiddleware(reducers);


const rootEl = document.getElementById('root');

//enhancer增强 (Function): Store enhancer 是一个组合 store creator 的高阶函数，
//返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
//applyMiddleware是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。
//const store = createStore(reducer,applyMiddleware(logger));
// let store;
// //环境的判断
// if (AppSettings.Env=="PROD") {
//   store = createStore(reducer);
// } else {
//   store = createStore(reducer,applyMiddleware(logger));
// }

//react-redux 提供Provider组件，可以让容器组件拿到state。
//Provider在根组件外面包了一层，这样一来，根组件的所有子组件就默认都可以拿到state了。
//render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootEl
)
