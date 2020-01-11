import * as actions from './index'

describe('actions', () => {

  describe('setUser', () => {
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

  describe('setNasaImages', () => {
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

      const expected = {
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
      
      expect(result).toEqual(expected)
    })
  })

  describe('setCatImages', () => {
    it('should have a type of SET_CAT_IMAGES', () => {
      const mockImages = [
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
      
      const result = actions.setCatImages(mockImages)

      const expected = {
        type: 'SET_CAT_IMAGES',
        images: [
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
      }

      expect(result).toEqual(expected)
    })
  })
})