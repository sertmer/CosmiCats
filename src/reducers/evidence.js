export const evidence = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EVIDENCE':
      return [...state, action.evidence]
    case 'REMOVE_EVIDENCE':
      return state.filter(evidence => evidence.id !== action.evidence.id)
    default: 
      return state
  }
}