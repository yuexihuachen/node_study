import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware,bindActionCreators ,compose } from 'redux';
import { Provider,connect  } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools';

import reducer from '../reducers/users'
import Counter from '../components/Counter';
import basicview from '../res/scripts/basic/basicView';
import * as actions from '../actions/users'
import DevTools from '../containers/DevTools';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

const store = createStore(
  reducer,
  enhancer
)

const rootEl = document.getElementById('root');

function mapStateToProps(state) {
  return {
    value: state.count
  }
}



// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  // return {
  //   onIncreaseClick: () => dispatch(actions.increaseAction)
  // }
  return {
    action:bindActionCreators(actions, dispatch)
  }
}


const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

    render(
  <Provider store={store}>
    <App />
  </Provider>,
    rootEl
  )


