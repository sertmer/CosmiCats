import { nasaImages } from '../reducers/nasaImages'

describe('nasaImages', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = nasaImages(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with images', () => {
    const mockInitialState = []
    const mockAction = {
      type: 'SET_NASA_IMAGES',
      images: [
        {
          href: 'someURL.com',
          nasa_id: 'PIA123',
          date_created: '2019-03-01'
        }, 
        {
          href: 'somURL2.com',
          nasa_id: 'DIZ123',
          date_created: '2019-04-01'
        }
      ]
    }

    const expected = [
        {
          href: 'someURL.com',
          nasa_id: 'PIA123',
          date_created: '2019-03-01'
        }, 
        {
          href: 'somURL2.com',
          nasa_id: 'DIZ123',
          date_created: '2019-04-01'
        }
      ]
    

    const result = nasaImages(mockInitialState, mockAction)

    expect(result).toEqual(expected)
  })
})