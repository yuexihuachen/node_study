
const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
const INVALIDATE_SUBREDDIT  = 'INVALIDATE_SUBREDDIT'

export default (state = { count: 10 }, action) => {
  const count = state.count;
  switch (action.type) {
    case 'INCREASE':
      return { count: count + 1 }
    case 'DECREASE':
      return { count: count - 1 }
    default:
      return state
  }
}

