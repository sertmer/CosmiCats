export const getNasaImages = () => {
  return fetch('https://images-api.nasa.gov/search?keywords=galaxy&media_type=image')
    .then(res => {
      if (!res.ok) {
        throw Error('error fetching nasa images')
      }
      return res.json()
    })
}

export const getCatsInSpace = () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '830d5d50-e96d-404e-ab7a-870d94a52a8f',
    }
  }

  return fetch('https://api.thecatapi.com/v1/images/search?category_ids=2', options)
    .then(res => {
      if (!res.ok) {
        throw Error('error fetching cats in space')
      }
      return res.json()
    })
}