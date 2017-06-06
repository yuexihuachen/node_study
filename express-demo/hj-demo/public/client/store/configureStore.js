import { createStore, applyMiddleware,combineReducers } from 'redux'
import logger from 'redux-logger';
import reducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  /*模块热替换(hot module replacement)
  它属于试验性功能, 测试不够
    预计有一些 bug
    理论上可用在生成环境, 然而在严肃的场合或许太早
    模块 id 需要在多个编译过程被追踪, 你需要存储(records)
    优化器在第一次优化之后不再能够优化模块 id. 对 bundle 体积有影响
    HMR 运行时增加了 bundle 的体积
    生成环境需要额外的测试代码检验 HMR 处理器. 挺难做的.
  */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

//创建store两者都可以

//一个应用了 middleware 后的 store enhancer。
//这个 store enhancer 就是一个函数，并且需要应用到 createStore。它会返回一个应用了 middleware 的新的 createStore。
//let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

//是否使用combineReducers
//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
 //可以差分出去
 //let reducer = combineReducers({index});
 //let store = createStoreWithMiddleware(reducer);
 //let store = createStoreWithMiddleware(reducers);


//const rootEl = document.getElementById('root');

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