export const evidence = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EVIDENCE':
      return [...state, action.evidence]
    case 'REMOVE_EVIDENCE':
      return state.filter(evidence => evidence !== action.evidence)
    default: 
      return state
  }
}