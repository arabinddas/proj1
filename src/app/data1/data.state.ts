import {createStore} from 'redux/dist/redux';
import {counterReducer} from './data.reducers';
import {TestClass1} from './test.class1';
import {composeWithDevTools} from 'redux-devtools-extension';

export interface DataState {
  counter: number;
}

export const storeFactory = () => createStore(counterReducer, { counter: 0 },
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export const test1Factory = () => { return new TestClass1(); };
