import React from 'react';
import { render } from 'react-dom';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../actions';
import Con from '../components/content';

function mapStateToProps(state) {
  return {
    content:state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  // return {
  //   onIncreaseClick: () => dispatch(increase('add')),
  //   onDecreaseClick:() => dispatch(decrease('dec')),
  // }
  return bindActionCreators(actions,dispatch);
}

const Content = connect(
  mapStateToProps
)(Con)

export default Content;