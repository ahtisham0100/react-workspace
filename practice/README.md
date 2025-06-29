

Problem 5: Dynamic List Manager
Task: Implement adding/removing items from a list using reducer.

State:

{ items: [] }
Actions:
addItem: { id, text }

removeItem: { id }

Tradeoff:
Would you rather use context + reducer for list management or just local state?

Problem 6: Accordion with One Active Section
Task: Only one section can be open at a time. Clicking toggles it.

State:
js
Copy
Edit
{ openSection: null | 'faq' | 'pricing' }
Actions:
toggleSection, payload: section name

🔺 Advanced Problems (System-Scale, Performance, Edge Cases)
Problem 7: Undo/Redo Text Editor
Task: Create a reducer that supports:

type: Add text

undo

redo

State Shape:

{
  history: [],
  future: [],
  current: ''
}
Concept:
Time-travel debugging. Reducer is great for modeling state transitions.

Problem 8: Reducer + Context for Global State
Task: Combine useReducer with Context API to manage global auth state.

Actions:
login, payload: { user }

logout

Interview Follow-up:
“How does this pattern scale better than prop drilling?”

Problem 9: Asynchronous Action Simulation
Task: Simulate loading states:

startFetch

success

failure

State:
js
Copy
Edit
{ loading: false, error: null, data: null }
Tradeoff:
Reducers don’t support async directly. So what would you use?

Middleware, custom dispatch, or use with useEffect

Problem 10: Reducer Composition (Nested State)
Task: Compose reducers for managing multiple UI sections:

Sidebar reducer

Modal reducer

Auth reducer

Combine them in one master reducer:

js
Copy
Edit
{
  sidebar: { isOpen: false },
  modal: { isVisible: false },
  auth: { user: null }
}
Interview Follow-up:
“How would you test this?”
“How does this relate to Redux’s combineReducers?”