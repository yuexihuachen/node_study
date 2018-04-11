import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
//UI 组件
class Content extends React.Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
  }
  content(){
    const { content } = this.props;
    return <span>{content}</span>;
  }
  render(){
    return this.content();
  }
}

Content.propTypes = {
  content:PropTypes.number.isRequired
}

export default Content;

