import { createAction, props } from '@ngrx/store';
import { LoadingPayload } from '../models/loading-payload.model';
import { LoginPayload } from '../models/login-payload.model';

export const login = createAction(
  '[Login Page] Login',
  props<LoginPayload>()
);

export const loadingStarted = createAction(
  '[AppLoading] Started',
  props<LoadingPayload>()
);

export const loadingFinished = createAction(
  '[AppLoading] Finished',
  props<LoadingPayload>()
);

