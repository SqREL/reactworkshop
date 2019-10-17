export default (state = 0, action) => {
  switch (action.type) {
    case 'GENERATE':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
