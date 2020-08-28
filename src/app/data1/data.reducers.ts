import { INCREMENT, DECREMENT } from './data.actions';
import { DataState } from './data.state';
import { Action, Reducer } from 'redux';

const initialState: DataState = { counter: 0 };

export const counterReducer: Reducer<DataState> = (state: DataState = initialState, action: Action): DataState => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: ++state.counter
      };
    case DECREMENT:
      return {
        counter: --state.counter
      };
    default:
      return state;
  }
};
