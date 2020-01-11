export const catImages = (state = [], action) => {
  switch(action.type) {
    case 'SET_CAT_IMAGES':
      return action.images
    default:
      return state
  }
}