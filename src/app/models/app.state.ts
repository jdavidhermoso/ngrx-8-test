import { UiState } from './ui-state.model';
import { UserState } from './user-state.model';

export interface AppState {
  userState: UserState;
  uiState: UiState;
}
