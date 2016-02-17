const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

export function todoApp(state = initialState, action = { type: null }) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
