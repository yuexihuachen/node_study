import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import  * as actions from '../actions'
import Title from './title';
import Content from '../containers/content';
import Increase from '../containers/increase';
import Decrease from '../containers/decrease';

//UI 组件
class App extends React.Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
    //组件需要与用户互动，React 就是将组件看成是一个状态机，
    //一开始有一个初始状态this.state，然后和用户互动，导致状态变化，从而触发重新渲染 UI 
    //当用户点击组件，导致状态变化，this.setState 方法就是修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
    //设置默认的state
    //不能直接修改 state(状态)，唯一可以分配 this.state 的地方是构造函数。
  }
  componentWillMount(){//在组件装载发生之前立即被调用。 
    //它在 render() 之前调用，因此在此方法中的设置 state(状态) 不会触发重新渲染。 
    
  } 
  componentDidMount(){
    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 
    //如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
  }
  componentWillUpdate(nextProps,nextState){
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
  }
  componentDidUpdate(prevProps,prevState){
    //在组件完成更新后立即调用。在初始化时不会被调用。
  }
  componentWillUnmount(){
    //在组件从 DOM 中移除的时候立刻被调用。
  }
  componentWillReceiveProps(nextProps){
    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
  }
  shouldComponentUpdate(nextProps,nextState){
    //返回一个布尔值,组件判断是否重新渲染时调用.
  }
  render() {
    //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。它可以是一个函数，也可以是一个对象。做出不同的处理
    //const { count, onIncreaseClick,onDecreaseClick } = this.props //对象
    return (<CountContent />);
  }
}

class CountContent extends React.Component{
  hasData(){
    console.log(this)
    return (<div>
        <Title title='计时器' />
        <Content />
        <Increase />
        <Decrease />
      </div>);
  }
  noData(){
    return (<div>
        <div className="title">这是一个大肉包</div>
      </div>);
  }
  render(){
    return this.hasData();
  }
}


export default App;

