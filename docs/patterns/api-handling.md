# API Handling Pattern
## Problem
Fetch users with loading and error handling

## Solution
Actions:
- loadUsers
- loadUsersSuccess
- loadUsersFailure

State:
- users
- loading
- error

Flow:
Component → Action → Effect → API → Reducer → UI

## Key Point
Never call API in component