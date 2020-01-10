export const getNasaImages = () => {
  return fetch('https://images-api.nasa.gov/search?keywords=galaxy&media_type=image')
    .then(res => {
      if (!res.ok) {
        throw Error('error fetching nasa images')
      }
      return res.json()
    })
}