export default function TO_ADD(state = 0, action) {
  switch (action.type) {
  case 'TO_ADD':
    return state + 1
  default:
    return state
  }
}