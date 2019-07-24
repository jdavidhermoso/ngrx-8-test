import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { loadingFinished, loadingStarted, login } from './actions/app.actions';
import { AppState } from './models/app.state';
import { selectIsAppLoading } from './selectors/ui-state.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAppLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isAppLoading$ = this.store.pipe(select(selectIsAppLoading));
  }

  public onLogin() {
    this.store.dispatch(login({ userIsLoggedIn: true }));
  }

  public startAppLoading() {
    this.store.dispatch(loadingStarted({ isAppLoading: true }));
  }

  public endAppLoading() {
    this.store.dispatch(loadingFinished({ isAppLoading: false }));
  }
}
