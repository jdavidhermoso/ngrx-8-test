import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app.state';
import { UiState } from '../models/ui-state.model';

export const selectUiState = (appState: AppState) => appState.uiState;

export const selectIsAppLoading = createSelector(
  selectUiState,
  (uiState: UiState) => uiState.isAppLoading
);
