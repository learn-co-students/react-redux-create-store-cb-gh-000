const counterReducer = (state = 0, action) => {
<<<<<<< HEAD
	switch (action.type) {
		case 'INCREMENT_COUNT':
			return state + 1
		case 'DECREMENT_COUNT':
			return state - 1
		case 'RESET_COUNT':
			return 0
		default:
			return state
	}
=======
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    case 'RESET_COUNT':
      return 0;
    default:
      return state;
  }
>>>>>>> 229d6c55c72690e8df509fc5727fc918c58f9707
}

export default counterReducer;
