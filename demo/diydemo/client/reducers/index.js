import * as types from '../constants/index'

export default (state = 0, action) => {
  switch (action.type) {
    case 'TO_ADD':
      return state + 1
    case 'TO_DEC':
      return state - 1
    default:
      return state
  }
}