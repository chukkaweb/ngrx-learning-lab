import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from './store/counter/counter.selectors';
import { decrement, increment } from './store/counter/counter.actions';
import { selectError, selectLoading, selectUsers } from './store/users/user.selectors';
import * as UsersActions from './store/users/users.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('my-pract');

  private store = inject(Store);
  count$ = this.store.select(selectCount);

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit() {
    this.load();
  }

  load() {
    this.store.dispatch(UsersActions.loadUsers());
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
}
