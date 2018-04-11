import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
//UI 组件
class Decrease extends React.Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
  }
  decrease(){
    const { decrease } = this.props;
    return <button onClick={decrease.bind(null)}>Decrease</button>;
  }
  render(){
    return this.decrease();
  }
}

Decrease.propTypes = {
  decrease:PropTypes.func.isRequired
}

export default Decrease;

