import React from 'react';
import { render } from 'react-dom';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
//import  * as actions from '../actions';
import {increase,decrease} from '../actions';
import Dec from '../components/decrease';

function mapStateToProps(state) {
  return {
    content:state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => ({
  decrease: () => {
    dispatch(decrease('dec'))
  }
  //bindActionCreators(actions,dispatch);
})

const Decrease = connect(
  null,
  mapDispatchToProps
)(Dec)

export default Decrease;