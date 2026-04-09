 Goal
To build strong understanding of NgRx for real-world applications and technical interviews.
# NgRx Core Concepts
## 1. Action
Represents an event
Example:
[Users] Load Users

## 2. Reducer
Pure function that updates state
Rules:
- No API calls
- No side effects
- Immutable updates

## 3. Selector
Used to read state
Benefits:
- Reusable
- Memoized
- Clean separation

## 4. Effect
Handles side effects (API calls)
Uses RxJS operators like:
- switchMap
- mergeMap
- exhaustMap

## 5. Store
Central state container
Single source of truth