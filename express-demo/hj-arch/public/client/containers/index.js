import React from 'react';
import { render } from 'react-dom';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
//import {increase,decrease} from '../actions'
import  * as actions from '../actions'
import Counter from '../components/rootUi';

// 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
//mapStateToProps是一个函数。它的作用是建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。

/*************挺重要的，需要注意的点
不要注入全局state！这会导致每次 action 都触发所有组件重新渲染，你做的所有性能优化都将付之东流。
最好在多个组件上使用 connect()，每个组件只监听它所关联的部分 state。

组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，
才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映
在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现

************** */
function mapStateToProps(state) {
  //是否使用combineReducers true:state.counter.count  false:state.count
  //Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
  return {
    count:state.counter.count
  }
}

// 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
//也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
function mapDispatchToProps(dispatch) {
  // return {
  //   onIncreaseClick: () => dispatch(increase('add')),
  //   onDecreaseClick:() => dispatch(decrease('dec')),
  // }
  return bindActionCreators(actions,dispatch);
}

//   connect用于从 UI 组件生成容器组件。connect就是将这两种组件连起来。
//容器组件App 容器组件和UI组件并不是绝对的，可以互相使用
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App