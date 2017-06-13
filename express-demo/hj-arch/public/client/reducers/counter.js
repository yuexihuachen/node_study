import {INCREASE,DECREASE} from '../constants/ActionTypes';

export default (state = { count: 10 }, action) => {
  const count = state.count;
  switch (action.type) {
    case INCREASE:
      return { count: count + 1 }
    case DECREASE:
      return { count: count - 1 }
    default:
      return state
  }
}

