export const evidence = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EVIDENCE':
      return [...state, action.evidence]
    default: 
      return state
  }
}