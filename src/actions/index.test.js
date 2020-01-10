import * as actions from './index'

describe('actions', () => {

  describe('SET_USER', () => {
    it('should have a type of SET_USER', () => {
      const user = 'Davey Havok'
      const result = actions.setUser(user)
      const expected = {
        type: 'SET_USER',
        user
      }

      expect(result).toEqual(expected)
    })
  })

  describe('SET_NASA_IMAGES', () => {
    it('should have a type of SET_NASA_IMAGES', () => {
      const mockImages = [
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

      const mockExpectedAction = {
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

      const result = actions.setNasaImages(mockImages)
      
      expect(result).toEqual(mockExpectedAction)
    })
  })
})