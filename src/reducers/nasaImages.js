export const nasaImages = (state = [], action) => {
  switch (action.type) {
    case 'SET_NASA_IMAGES' :
      return action.images
    default: 
      return state
  }
}