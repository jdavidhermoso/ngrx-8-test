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
  public isAppLoading: boolean = false;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectIsAppLoading)).subscribe((isAppLoading: boolean) => {
      this.isAppLoading = isAppLoading;
    })
  }

  public onLogin() {
    this.store.dispatch(login({ userIsLoggedIn: true }));
  }

  public startAppLoading() {
    if (!this.isAppLoading) {
      this.store.dispatch(loadingStarted({ isAppLoading: true }));
    }
  }

  public endAppLoading() {
    if (this.isAppLoading) {
      this.store.dispatch(loadingFinished({ isAppLoading: false }));
    }
  }
}
