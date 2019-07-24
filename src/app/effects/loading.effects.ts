import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoadingEffects {

  appLoadingStart$ = createEffect(() => this.actions$.pipe(
    ofType('[AppLoading] Started'),
    tap(() => {
      alert('Ey! App is loading');
    })
    ),
    { dispatch: false }
  );

  appLoadingEnd$ = createEffect(() => this.actions$.pipe(
    ofType('[AppLoading] Finished'),
    tap(() => {
      alert('Ey! App is not loading');
    })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions
  ) {
  }
}
