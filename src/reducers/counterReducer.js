const counterReducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
      break;
    case "DECREMENT_COUNT":
      return state - 1;
      break;
    case "RESET_COUNT":
      return 0;
      break;
    default:
      return state
  }
}

export default counterReducer;
