import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);

<<<<<<< HEAD
console.log(store.getState())
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'DECREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'RESET_COUNT'})
console.log(store.getState())
=======
console.log(store.getStore());
store.dispatch({type: 'INCREMENT_COUNT'});
store.dispatch({type: 'INCREMENT_COUNT'});
console.log(store.getStore());
store.dispatch({type: 'DECREMENT_COUNT'});
console.log(store.getStore());
store.dispatch({type: 'INCREMENT_COUNT'});
store.dispatch({type: 'INCREMENT_COUNT'});
store.dispatch({type: 'INCREMENT_COUNT'});
console.log(store.getStore());
>>>>>>> 229d6c55c72690e8df509fc5727fc918c58f9707
