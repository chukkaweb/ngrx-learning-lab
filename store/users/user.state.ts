export interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
}
export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};
