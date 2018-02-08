
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);

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
