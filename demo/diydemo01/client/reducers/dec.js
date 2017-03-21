export default function TO_DEC(state = 0, action) {
  switch (action.type) {
  case 'TO_DEC':
    return state - 1
  default:
    return state
  }
}