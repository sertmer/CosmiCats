import { catImages } from './catImages';

describe('catImages', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = catImages(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return the correct state it the type is SET_CAT_IMAGES', () => {
    const initialState = []
    const mockCatImages = [
      {
        breeds: [],
        categories: [],
        id: '58',
        url: 'url.com',
        width: 500,
        height: 500
      },
      {
        breeds: [],
        categories: [],
        id: '78',
        url: 'url2.com',
        width: 400,
        height: 400
      }
    ]
    const action = {
      type: 'SET_CAT_IMAGES',
      images: mockCatImages
    }
    const result = catImages(initialState, action)
    const expected = [
      {
        breeds: [],
        categories: [],
        id: '58',
        url: 'url.com',
        width: 500,
        height: 500
      },
      {
        breeds: [],
        categories: [],
        id: '78',
        url: 'url2.com',
        width: 400,
        height: 400
      }
    ]

    expect(result).toEqual(expected)
  })
})