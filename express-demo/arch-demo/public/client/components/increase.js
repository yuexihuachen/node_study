import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
//UI 组件
class Increase extends React.Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
  }
  increase(){
    const { increase } = this.props;
    return <button onClick={increase}>Increase</button>;
  }
  render(){
    return this.increase();
  }
}

Increase.propTypes = {
    increase:PropTypes.func.isRequired
}

export default Increase;

