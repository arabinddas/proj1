import {Action} from 'redux';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

interface AdditionAction extends Action {
  num: number;
}

export class ActionCreator {
  static increment(): Action {
    return {
      type: INCREMENT
    };
  }
  static decrement(): Action {
    return {
      type: DECREMENT
    }
  }
}
