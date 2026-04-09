import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// The string "[Counter] Increment" is the action type

// 🧠 Why this format?
// [Feature] ActionName
// In your case:
// Counter → Feature/module name