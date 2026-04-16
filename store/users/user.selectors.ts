// users.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUsersState =
  createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);