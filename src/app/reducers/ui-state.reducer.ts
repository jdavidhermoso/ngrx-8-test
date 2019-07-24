import { Action, createReducer, on } from '@ngrx/store';
import { loadingFinished, loadingStarted } from '../actions/app.actions';
import { AppState } from '../models/app.state';
import { UiState } from '../models/ui-state.model';

export const initialState: UiState = {
  isAppLoading: false
};


const uiStateReducer = createReducer(
  initialState,
  on(loadingStarted, state => ({ ...state, isAppLoading: true })),
  on(loadingFinished, state => ({ ...state, isAppLoading: false })),
);

export function reducer(state: UiState | undefined, action: Action) {
  return uiStateReducer(state, action);
}
