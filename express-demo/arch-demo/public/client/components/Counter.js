import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import  * as actions from '../actions'
import Title from './title';
import Content from './content';
import Increase from './increase';
import Decrease from './decrease';

//UI 组件
class Counter extends React.Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
  }
  render() {
    //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。它可以是一个函数，也可以是一个对象。做出不同的处理
    //const { count, onIncreaseClick,onDecreaseClick } = this.props //对象
    const parentState = this.props; //函数
    return (<CountContent params={parentState} />);
  }
}

class CountContent extends React.Component{
  hasData(){
    const { count,increase,decrease } = this.props.params;
    return (<div>
        <Title title='计时器' />
        <Content content={count} />
        <Increase increase={increase} />
        <Decrease decrease={decrease}/>
      </div>);
  }
  render(){
    return this.hasData();
  }
}

Counter.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter

     