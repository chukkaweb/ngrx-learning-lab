# NgRx Learning Lab 🚀

This repository contains my hands-on learning and practical implementation of NgRx concepts using Angular.

# ✅ 1) What is NgRx (Simple Definition)

👉 **NgRx = State management using RxJS + Redux pattern**

* Central store (single source of truth)
* State changes are **predictable**
* Uses:
  * **Actions** → what happened
  * **Reducer** → how state changes
  * **Store** → holds state
  * **Selector** → read state

# ✅ 2) Install NgRx (Latest Way)
Run inside your project:

```bash
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
```
👉 This auto-configures everything (important) - when use ng add 

# ✅ 3) Folder Structure (Keep it clean)

Don’t dump everything in one file.

```id="3doywx"
src/app/
  store/
    counter/
      counter.actions.ts
      counter.reducer.ts
      counter.selectors.ts
      counter.effects.ts (optional for now)
      counter.state.ts
```

## 📌 What I Covered
### Core Concepts
- Actions
- Reducers
- Selectors
- Effects
- Store configuration

### Real-world Scenarios
- API handling with loading & error states
- Prevent duplicate API calls
- Cancel previous requests
- Chaining API calls
- Caching API responses

## 📂 Project Structure
store/
counter/ → Basic state management
users/ → API integration with effects

## 🔥 Key Learnings
- NgRx enforces unidirectional data flow
- Effects handle all side effects (API calls)
- Reducers must be pure functions
- Selectors improve performance using memoization

# 🔥 Flow (Must Understand)

1. User clicks button
2. `dispatch(increment)`
3. Reducer updates state
4. Store updates
5. Selector emits new value
6. UI updates automatically

# ⚠️ Common Mistakes (Avoid These)

❌ Calling API inside reducer
❌ Mutating state directly
❌ Not using selectors
❌ Putting everything in one file

# ✅ When to Use NgRx

Use NgRx when:

* Shared state across components
* Complex async flows
* Need debugging (devtools)

Avoid when:

* Small app
* Simple local state

# 🧠 Interview-Level Insight

👉 “NgRx enforces unidirectional data flow and makes state predictable, especially useful for complex applications with shared state and async operations.”


# 🚀 Next Step (Important)

Don’t stop at counter. That’s too basic.
Next I recommend:

1. Add **API call using Effects**
2. Handle:
   * loading
   * success
   * error

## 🚀 How to Run

```bash
npm install
ng serve

