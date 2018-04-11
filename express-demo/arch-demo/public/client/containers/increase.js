import React from 'react';
import { render } from 'react-dom';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
//import  * as actions from '../actions';
import {increase,decrease} from '../actions';
import Inc from '../components/increase';

function mapStateToProps(state) {
  return {
    content:state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase('add'))
  }
  //bindActionCreators(actions,dispatch);
})

const Increase = connect(
  null,
  mapDispatchToProps
)(Inc)

export default Increase;