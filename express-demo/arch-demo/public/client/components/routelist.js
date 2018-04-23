import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
//UI 组件
class Title extends Component {
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
  }
  title(){
    const { title } = this.props;
    return <div className="title">{title}</div>;
  }
  render(){
    return this.title();
  }
}

Title.propTypes = {
    title:PropTypes.string.isRequired
}

export default Title;

