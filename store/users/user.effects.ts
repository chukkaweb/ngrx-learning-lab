// users.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers), // this will listen when action is triggered and api will call. 
      mergeMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((err) => of(UsersActions.loadUsersFailure({ error: err.message }))),
        ),
      ),
    ),
  );
}
