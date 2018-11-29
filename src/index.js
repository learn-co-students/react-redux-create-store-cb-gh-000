import {createStore} from 'redux';
import counterReducer from './reducers/counterReducer';

store = createStore(counterReducer);
