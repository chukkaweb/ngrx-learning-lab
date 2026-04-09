import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { decrement, increment } from './counter.actions';

export const coutnerReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
);
