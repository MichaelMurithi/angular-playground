import { createReducer, on } from '@ngrx/store';
import { increament, decreament, reset } from './counter.actions';

export const initialState: number = 0;

const _counterReducer = createReducer(
  initialState,
  on(increament, (state) => state + 1),
  on(decreament, (state) => state - 1),
  on(reset, (state) => initialState)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
